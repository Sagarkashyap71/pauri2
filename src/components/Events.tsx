import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight, Sparkles } from 'lucide-react';
import { events } from '../data/events';
import EventRegistrationModal from './EventRegistrationModal';
import type { EventData } from '../data/events';

const categories = ['All', 'Cleanup', 'Plantation', 'Awareness', 'Conservation', 'Campaign', 'Education'];

export default function Events() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredEvents = activeCategory === 'All'
    ? events
    : events.filter(e => e.category === activeCategory);

  const openRegistration = (event: EventData) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <section id="events" className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-eco-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-eco-50/50 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-eco-50 border border-eco-200 px-5 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-eco-600" />
            <span className="text-eco-700 text-sm font-semibold">Our Events</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Upcoming <span className="text-eco-600">Events & Drives</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join our community-driven environmental events. Each event has its own
            registration — sign up for the ones that inspire you!
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-eco-600 text-white shadow-lg shadow-eco-500/30'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-eco-300 hover:text-eco-700 hover:bg-eco-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-eco-500/10 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1 bg-eco-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  {event.category}
                </span>
                <div className="absolute bottom-4 right-4">
                  <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full">
                    <Users className="h-3 w-3" />
                    {event.spots - event.registered} spots left
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-eco-700 transition-colors line-clamp-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                  {event.description}
                </p>

                {/* Details */}
                <div className="space-y-2 mb-5">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4 text-eco-500 flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4 text-eco-500 flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 text-eco-500 flex-shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-5">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>{event.registered} registered</span>
                    <span>{event.spots} total</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-eco-500 to-eco-400"
                      style={{ width: `${(event.registered / event.spots) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Register Button */}
                <button
                  onClick={() => openRegistration(event)}
                  className="w-full btn-eco group/btn flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-eco-600 via-eco-500 to-eco-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-eco-500/25 hover:shadow-eco-500/40"
                >
                  <span>Register for This Event</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Registration Modal */}
      {selectedEvent && (
        <EventRegistrationModal
          event={selectedEvent}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedEvent(null);
          }}
        />
      )}
    </section>
  );
}
