import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/7656995/pexels-photo-7656995.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    title: 'River Cleanup Drive',
    desc: 'Volunteers cleaning the river banks',
  },
  {
    url: 'https://images.pexels.com/photos/9544471/pexels-photo-9544471.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    title: 'Forest Conservation',
    desc: 'Protecting local forest ecosystems',
  },
  {
    url: 'https://images.pexels.com/photos/28662953/pexels-photo-28662953.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    title: 'Tree Plantation',
    desc: 'Planting native saplings in the hills',
  },
  {
    url: 'https://images.pexels.com/photos/9543738/pexels-photo-9543738.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    title: 'Community Cleanup',
    desc: 'Working together for a cleaner environment',
  },
  {
    url: 'https://images.pexels.com/photos/7656988/pexels-photo-7656988.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    title: 'Sunset Cleanup',
    desc: 'Evening cleanup drive near Pauri',
  },
  {
    url: 'https://images.pexels.com/photos/9543407/pexels-photo-9543407.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    title: 'Forest Patrol',
    desc: 'Monitoring forest health in the region',
  },
  {
    url: 'https://images.pexels.com/photos/7656743/pexels-photo-7656743.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    title: 'Riverside Action',
    desc: 'Keeping our rivers clean and flowing',
  },
  {
    url: 'https://images.pexels.com/photos/28662952/pexels-photo-28662952.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    title: 'Group Plantation',
    desc: 'Community tree planting event',
  },
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
