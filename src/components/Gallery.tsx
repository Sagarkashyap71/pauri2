import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const galleryImages = [
  {
    url: '/images/cleanup-drive.png',
    title: 'Cleanliness Drive',
    desc: 'Volunteers working together to keep Pauri clean',
  },
  {
    url: '/images/team-photo.png',
    title: 'Our Volunteers',
    desc: 'Dedicated members of Pauri Eco Warriors',
  },
  {
    url: '/images/award.png',
    title: 'Clean Pauri Save Pauri Award',
    desc: 'Recognition for environmental contributions',
  },
  {
    url: '/images/award-ceremony.png',
    title: 'Award Ceremony',
    desc: 'Celebrating our achievements',
  },
  {
    url: '/images/banner.png',
    title: 'Pauri Eco Warriors',
    desc: 'Together for a greener future',
  },
  {
    url: '/images/kids-cleanup.png',
    title: 'Community Participation',
    desc: 'Young volunteers leading by example',
  },
  {
    url: '/images/pauri-view.png',
    title: 'Beautiful Pauri',
    desc: 'Protecting the natural beauty of our region',
  },
  {
    url: '/images/volunteers.png',
    title: 'Environmental Action',
    desc: 'Creating impact through collective effort',
  },
  {
  url: '/images/team-bonding.png',
  title: 'Moments of Friendship',
  desc: 'Building strong bonds while working for a greener Pauri',
  },
  {
  url: '/images/officials.png',
  title: 'Community Partnership',
  desc: 'Working together for environmental change',
  },
  {
  url: '/images/cultural-event.png',
  title: 'Cultural Heritage Event',
  desc: 'Celebrating local traditions and community spirit',
  },
  {
  url: '/images/founders.png',
  title: 'Manvi & Anshika',
  desc: 'Founders of Pauri Eco Warriors, inspiring youth-led environmental action in Pauri',
  }
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
  const nextImage = () =>
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));

  return (
    <section id="gallery" className="relative py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-eco-50 border border-eco-200 px-5 py-2 mb-6">
            <Camera className="h-4 w-4 text-eco-600" />
            <span className="text-eco-700 text-sm font-semibold">Our Gallery</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Moments of <span className="text-eco-600">Impact</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Snapshots from our events — every photo tells a story of hope, action, and community.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img
                src={img.url}
                alt={img.title}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  index === 0 ? 'h-full min-h-[300px]' : 'h-48 sm:h-56'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-white font-bold text-sm">{img.title}</h4>
                <p className="text-white/80 text-xs">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
          <div className="max-w-4xl max-h-[80vh] px-16">
            <img
              src={galleryImages[lightboxIndex].url}
              alt={galleryImages[lightboxIndex].title}
              className="w-full h-full object-contain rounded-2xl"
            />
            <div className="text-center mt-4">
              <h4 className="text-white font-bold text-lg">{galleryImages[lightboxIndex].title}</h4>
              <p className="text-white/70 text-sm">{galleryImages[lightboxIndex].desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
