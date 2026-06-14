import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Join Us', href: '#join' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-eco-900/5'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-eco-500 to-eco-700 shadow-lg shadow-eco-500/30 transition-transform duration-300 group-hover:scale-110">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-eco-400 animate-pulse" />
            </div>
            <div>
              <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-eco-800' : 'text-white'}`}>
                Pauri Eco Warriors
              </span>
              <p className={`text-[10px] font-medium tracking-wider uppercase transition-colors duration-300 ${scrolled ? 'text-eco-600' : 'text-eco-200'}`}>
                Protecting Nature
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-eco-500/10 group ${
                  scrolled ? 'text-gray-700 hover:text-eco-700' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-eco-500 rounded-full transition-all duration-300 group-hover:w-3/4" />
              </a>
            ))}
            <a
              href="#join"
              className="ml-4 btn-eco inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-eco-600 to-eco-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-eco-500/30"
            >
              <Leaf className="h-4 w-4" />
              Join the Movement
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-lg border-t border-eco-100 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-eco-50 hover:text-eco-700 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#join"
            onClick={() => setIsOpen(false)}
            className="block mx-4 mt-3 text-center btn-eco rounded-full bg-gradient-to-r from-eco-600 to-eco-500 px-6 py-3 text-sm font-semibold text-white shadow-lg"
          >
            Join the Movement
          </a>
        </div>
      </div>
    </nav>
  );
}
