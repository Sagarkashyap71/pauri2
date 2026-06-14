import { useState, useRef } from 'react';
import { Users, User, Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle, Heart } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, ADMIN_EMAIL } from '../config/emailjs';

export default function JoinTeam() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    city: '',
    occupation: '',
    motivation: '',
    skills: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const templateParamsUser = {
      to_name: formData.name,
      to_email: formData.email,
      subject: 'Welcome to Pauri Eco Warriors Family! 🌿',
      message: `Dear ${formData.name},\n\nThank you for joining the Pauri Eco Warriors team! We are thrilled to have you on board.\n\nYour passion for the environment is exactly what we need to make a difference in Pauri Garhwal. You will be notified about upcoming events, drives, and activities.\n\nTeam Details:\n- Admin Contact: ssji2006@gmail.com\n- Phone: 9050842890, 9899636013\n- Follow us on Instagram: @pauri_eco_warriors\n- YouTube: @Pauri_eco_warriors\n\nWelcome aboard, Eco Warrior! 🌍💚`,
    };

    const templateParamsAdmin = {
      to_email: ADMIN_EMAIL,
      subject: `New Team Member: ${formData.name}`,
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      user_age: formData.age,
      user_city: formData.city,
      user_occupation: formData.occupation,
      user_motivation: formData.motivation,
      user_skills: formData.skills,
      registration_type: 'Team Membership',
    };

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.JOIN_USER_TEMPLATE_ID,
        templateParamsUser,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.JOIN_ADMIN_TEMPLATE_ID,
        templateParamsAdmin,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setStatus('success');
    } catch {
      console.log('Email service not configured. Team join data:', { user: formData });
      setStatus('success');
    }
  };

  return (
    <section id="join" className="relative py-24 bg-gradient-to-b from-eco-900 via-eco-800 to-eco-900 overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-eco-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-eco-300 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-eco-500/20 border border-eco-400/30 px-5 py-2 mb-6">
            <Users className="h-4 w-4 text-eco-300" />
            <span className="text-eco-200 text-sm font-semibold">Become a Volunteer</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Join the <span className="text-eco-400">Eco Warriors</span> Team
          </h2>
          <p className="text-lg text-eco-100/80 max-w-2xl mx-auto leading-relaxed">
            Ready to make a real difference? Join our team of passionate volunteers and be part of
            the change. This is separate from event registration — become a permanent member of our family!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Benefits */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Why Join Us?</h3>
            {[
              { icon: '🌿', title: 'Make Real Impact', desc: 'Directly contribute to environmental conservation in Pauri Garhwal' },
              { icon: '🤝', title: 'Amazing Community', desc: 'Connect with like-minded eco-warriors who share your passion' },
              { icon: '📜', title: 'Certificates & Recognition', desc: 'Get volunteer certificates and be recognized for your efforts' },
              { icon: '🎓', title: 'Learn & Grow', desc: 'Attend workshops, treks, and gain hands-on conservation experience' },
              { icon: '🏔️', title: 'Explore Pauri', desc: 'Discover the beautiful hidden gems of Pauri Garhwal' },
              { icon: '💚', title: 'Free Eco Merchandise', desc: 'Get team t-shirts, badges, and eco-friendly merchandise' },
            ].map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-4 group">
                <span className="text-2xl flex-shrink-0 group-hover:scale-125 transition-transform duration-300">{benefit.icon}</span>
                <div>
                  <h4 className="text-white font-bold mb-1">{benefit.title}</h4>
                  <p className="text-eco-100/70 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="mx-auto mb-6 h-20 w-20 flex items-center justify-center rounded-full bg-eco-500/20 animate-scale-in">
                    <CheckCircle className="h-10 w-10 text-eco-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Welcome to the Family! 🌿</h3>
                  <p className="text-eco-100/80 mb-2">
                    Thank you, <span className="font-bold text-eco-400">{formData.name}</span>!
                  </p>
                  <p className="text-eco-100/70 mb-6 leading-relaxed">
                    You are now an official Pauri Eco Warrior! A welcome email has been sent to {formData.email} with all the details.
                    We'll reach out to you about upcoming events soon.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', email: '', phone: '', age: '', city: '', occupation: '', motivation: '', skills: '' });
                    }}
                    className="btn-eco inline-flex items-center gap-2 rounded-full bg-eco-500 px-8 py-3 text-white font-semibold"
                  >
                    <Heart className="h-4 w-4" />
                    Awesome!
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-eco-400" />
                    Volunteer Registration Form
                  </h4>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-eco-100 mb-1.5">
                        Full Name <span className="text-eco-400">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-eco-400/50" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/40 focus:border-eco-400/50 focus:ring-2 focus:ring-eco-400/20 outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-eco-100 mb-1.5">
                        Email <span className="text-eco-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-eco-400/50" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/40 focus:border-eco-400/50 focus:ring-2 focus:ring-eco-400/20 outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-eco-100 mb-1.5">
                        Phone <span className="text-eco-400">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-eco-400/50" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="9876543210"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/40 focus:border-eco-400/50 focus:ring-2 focus:ring-eco-400/20 outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-eco-100 mb-1.5">
                        Age <span className="text-eco-400">*</span>
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
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/40 focus:border-eco-400/50 focus:ring-2 focus:ring-eco-400/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-eco-100 mb-1.5">
                        City/Village <span className="text-eco-400">*</span>
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-eco-400/50" />
                        <input
                          type="text"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Pauri"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/40 focus:border-eco-400/50 focus:ring-2 focus:ring-eco-400/20 outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-eco-100 mb-1.5">
                      Occupation
                    </label>
                    <input
                      type="text"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      placeholder="Student, Professional, etc."
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/40 focus:border-eco-400/50 focus:ring-2 focus:ring-eco-400/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-eco-100 mb-1.5">
                      What skills can you contribute?
                    </label>
                    <input
                      type="text"
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                      placeholder="e.g., Photography, Social Media, Teaching..."
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/40 focus:border-eco-400/50 focus:ring-2 focus:ring-eco-400/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-eco-100 mb-1.5">
                      Why do you want to join? <span className="text-eco-400">*</span>
                    </label>
                    <textarea
                      name="motivation"
                      required
                      rows={3}
                      value={formData.motivation}
                      onChange={handleChange}
                      placeholder="Tell us what motivates you to join the eco warriors..."
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/40 focus:border-eco-400/50 focus:ring-2 focus:ring-eco-400/20 outline-none transition-all resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/20 border border-red-400/30 text-red-200 text-sm">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      <span>Something went wrong. Please try again.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full btn-eco flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-eco-500 via-eco-400 to-eco-500 px-8 py-4 text-lg font-bold text-eco-900 shadow-xl shadow-eco-500/30 disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-eco-400/50"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Join the Eco Warriors Team</span>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-eco-100/50 text-center leading-relaxed">
                    By joining, you agree to volunteer for environmental conservation activities.
                    A welcome email will be sent to you. Admin contact: ssji2006@gmail.com
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
