import { ChevronDown, TreePine, Users, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Pauri Garhwal Mountains"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-eco-900/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-eco-900/40 to-transparent" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-eco-400/20 animate-float"
            style={{
              width: `${20 + i * 10}px`,
              height: `${20 + i * 10}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-eco-500/20 border border-eco-400/30 backdrop-blur-sm px-5 py-2 mb-8 animate-fade-in-up">
            <span className="h-2 w-2 rounded-full bg-eco-400 animate-pulse" />
            <span className="text-eco-200 text-sm font-medium">Pauri Garhwal, Uttarakhand</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6" style={{ animationDelay: '0.2s' }}>
            <span className="text-white block">Protecting</span>
            <span className="text-gradient block" style={{ WebkitTextFillColor: 'transparent', background: 'linear-gradient(135deg, #34d399, #6ee7b7, #a7f3d0)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
              Our Mountains
            </span>
            <span className="text-white block">Our Future</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
            We are a passionate community of environmental warriors from Pauri Garhwal,
            dedicated to preserving the pristine beauty of our Himalayan homeland through
            conservation, education, and community action.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="#events"
              className="btn-eco group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-eco-500 via-eco-600 to-eco-700 px-8 py-4 text-lg font-semibold text-white shadow-2xl shadow-eco-500/40"
            >
              <span>View Our Events</span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#join"
              className="btn-eco group inline-flex items-center gap-3 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300"
            >
              <Users className="h-5 w-5" />
              <span>Join the Team</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg">
            {[
              { icon: TreePine, value: '10K+', label: 'Trees Planted' },
              { icon: Users, value: '500+', label: 'Volunteers' },
              { icon: MapPin, value: '25+', label: 'Events Done' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-eco-500/20 mb-2">
                  <stat.icon className="h-5 w-5 text-eco-400" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll Down</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
