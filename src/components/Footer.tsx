import { Leaf, Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';
import { SOCIAL_LINKS } from '../config/emailjs';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-eco-950 text-white overflow-hidden" style={{ backgroundColor: '#022c22' }}>
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="#022c22" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-eco-600 shadow-lg shadow-eco-600/30">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-white">Pauri Eco Warriors</span>
                <p className="text-[10px] font-medium tracking-wider uppercase text-eco-400">Protecting Nature</p>
              </div>
            </div>
            <p className="text-eco-100/60 text-sm leading-relaxed mb-6">
              A community-driven environmental conservation initiative from Pauri Garhwal,
              Uttarakhand. Together, we protect our mountains, forests, and rivers.
            </p>
            <div className="flex gap-3">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 transition-all duration-300 hover:scale-110"
                title="Instagram - @pauri_eco_warriors"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 hover:bg-red-600 transition-all duration-300 hover:scale-110"
                title="YouTube - @Pauri_eco_warriors"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                title="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Our Events', href: '#events' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Join Team', href: '#join' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-eco-100/60 hover:text-eco-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-eco-500" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Initiatives */}
          <div>
            <h4 className="text-white font-bold mb-6">Our Initiatives</h4>
            <ul className="space-y-3">
              {['River Cleanup Drives', 'Mountain Reforestation', 'Plastic Free Campaign', 'Wildlife Conservation', 'Green Schools Program', 'Eco Awareness Walks'].map((item) => (
                <li key={item}>
                  <span className="text-eco-100/60 text-sm flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-eco-500" />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <a href="mailto:ssji2006@gmail.com" className="flex items-center gap-3 text-eco-100/60 hover:text-eco-400 transition-colors text-sm">
                <Mail className="h-4 w-4 text-eco-500 flex-shrink-0" />
                ssji2006@gmail.com
              </a>
              <a href="tel:+919050842890" className="flex items-center gap-3 text-eco-100/60 hover:text-eco-400 transition-colors text-sm">
                <Phone className="h-4 w-4 text-eco-500 flex-shrink-0" />
                +91 9050842890
              </a>
              <a href="tel:+919899636013" className="flex items-center gap-3 text-eco-100/60 hover:text-eco-400 transition-colors text-sm">
                <Phone className="h-4 w-4 text-eco-500 flex-shrink-0" />
                +91 9899636013
              </a>
              <div className="flex items-center gap-3 text-eco-100/60 text-sm">
                <MapPin className="h-4 w-4 text-eco-500 flex-shrink-0" />
                Pauri Garhwal, Uttarakhand, India
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-eco-100/40 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Pauri Eco Warriors. All rights reserved. Made with{' '}
            <Heart className="inline h-3 w-3 text-red-500 fill-red-500" /> for Nature.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-eco-100/40 hover:text-eco-400 transition-colors text-sm"
          >
            <span>Back to Top</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-eco-600/20 hover:bg-eco-600/40 transition-colors">
              <ArrowUp className="h-4 w-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
