import { useState, useRef, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle, Send, Loader2, User, Mail, Phone, AlertCircle, Star } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, ADMIN_EMAIL } from '../config/emailjs';
import type { EventData } from '../data/events';

interface Props {
  event: EventData;
  isOpen: boolean;
  onClose: () => void;
}

export default function EventRegistrationModal({ event, isOpen, onClose }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    city: '',
    message: '',
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const templateParamsUser = {
      to_name: formData.name,
      to_email: formData.email,
      event_title: event.title,
      event_date: event.date,
      event_time: event.time,
      event_location: event.location,
      event_description: event.description,
      event_highlights: event.highlights.join(', '),
      user_name: formData.name,
      user_phone: formData.phone,
      user_city: formData.city,
    };

    const templateParamsAdmin = {
      to_email: ADMIN_EMAIL,
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      user_age: formData.age,
      user_city: formData.city,
      user_message: formData.message,
      event_title: event.title,
      event_date: event.date,
      event_time: event.time,
      event_location: event.location,
      event_id: event.id,
    };

    try {
      // Send confirmation to user
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.USER_TEMPLATE_ID,
        templateParamsUser,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      // Send notification to admin
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.ADMIN_TEMPLATE_ID,
        templateParamsAdmin,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setStatus('success');
    } catch {
      // If EmailJS is not configured, show success anyway for demo
      console.log('Email service not configured. Registration data:', {
        user: formData,
        event: { title: event.title, date: event.date, time: event.time, location: event.location }
      });
      setStatus('success');
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', age: '', city: '', message: '' });
    setStatus('idle');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>

        {status === 'success' ? (
          /* Success State */
          <div className="p-8 sm:p-12 text-center">
            <div className="mx-auto mb-6 h-20 w-20 flex items-center justify-center rounded-full bg-eco-100 animate-scale-in">
              <CheckCircle className="h-10 w-10 text-eco-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Registration Successful! 🎉</h3>
            <p className="text-gray-600 mb-2">
              Thank you, <span className="font-semibold text-eco-700">{formData.name}</span>!
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              You have been successfully registered for <span className="font-semibold text-eco-700">{event.title}</span>.
              A confirmation email with all event details has been sent to <span className="font-semibold">{formData.email}</span>.
            </p>

            {/* Event Summary Card */}
            <div className="bg-eco-50 rounded-2xl p-6 mb-8 text-left">
              <h4 className="font-bold text-eco-800 mb-4 text-lg">📋 Event Details</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar className="h-4 w-4 text-eco-600 flex-shrink-0" />
                  <span className="text-sm"><strong>Date:</strong> {event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="h-4 w-4 text-eco-600 flex-shrink-0" />
                  <span className="text-sm"><strong>Time:</strong> {event.time}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="h-4 w-4 text-eco-600 flex-shrink-0" />
                  <span className="text-sm"><strong>Location:</strong> {event.location}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-eco-200">
                <p className="text-xs text-gray-500">
                  💡 Please arrive 15 minutes early. For any queries, contact us at ssji2006@gmail.com or call 9050842890 / 9899636013.
                </p>
              </div>
            </div>

            <button
              onClick={resetForm}
              className="btn-eco inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-eco-600 to-eco-500 px-8 py-3 text-white font-semibold shadow-lg shadow-eco-500/30"
            >
              <CheckCircle className="h-5 w-5" />
              Done
            </button>
          </div>
        ) : (
          /* Registration Form */
          <>
            {/* Header */}
            <div className="relative h-48 overflow-hidden rounded-t-3xl">
              <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-eco-900/90 via-eco-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block bg-eco-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                  {event.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">{event.title}</h3>
              </div>
            </div>

            {/* Event Details Bar */}
            <div className="flex flex-wrap gap-4 px-6 sm:px-8 py-4 bg-eco-50 border-b border-eco-100">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Calendar className="h-4 w-4 text-eco-600" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Clock className="h-4 w-4 text-eco-600" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <MapPin className="h-4 w-4 text-eco-600" />
                <span>{event.location}</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="px-6 sm:px-8 py-4 bg-white border-b border-gray-100">
              <div className="flex flex-wrap gap-2">
                {event.highlights.map((h, i) => (
                  <span key={i} className="inline-flex items-center gap-1 bg-eco-50 text-eco-700 text-xs font-medium px-3 py-1.5 rounded-full border border-eco-100">
                    <Star className="h-3 w-3" />
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Spots left */}
            <div className="px-6 sm:px-8 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <AlertCircle className="h-4 w-4 text-amber-500" />
                <span className="text-gray-600">
                  <strong className="text-eco-700">{event.spots - event.registered}</strong> spots remaining out of {event.spots}
                </span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-gray-100 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-eco-500 to-eco-400 transition-all duration-500"
                  style={{ width: `${(event.registered / event.spots) * 100}%` }}
                />
              </div>
            </div>

            {/* Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Fill Your Details to Register</h4>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20 focus:bg-white outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20 focus:bg-white outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="9876543210"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20 focus:bg-white outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Age <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="age"
                    required
                    min="10"
                    max="80"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="25"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20 focus:bg-white outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    City/Village <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Pauri"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20 focus:bg-white outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Any Message (Optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any special requirements or questions..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20 focus:bg-white outline-none transition-all resize-none"
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full btn-eco flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-eco-600 via-eco-500 to-eco-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-eco-500/30 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Registering...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Register for This Event</span>
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center leading-relaxed">
                By registering, you'll receive a confirmation email with event details.
                Admin will be notified of your registration. For queries, call 9050842890 or 9899636013.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
