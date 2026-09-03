import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Camera, 
  ArrowUpRight 
} from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';


export const Navbar = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll
      const sections = ['home', 'about', 'services', 'portfolio', 'testimonials', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md py-3 border-b border-[#E8D8C3]/80 shadow-luxury' 
          : 'bg-gradient-to-b from-[#1B261D]/80 via-[#1B261D]/40 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Luxury ETERNA-styled serif typography */}
          <a 
            href="#home" 
            className="group flex items-center space-x-3 cursor-pointer select-none"
            id="brand-logo-btn"
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border ${
              isScrolled 
                ? 'bg-[#1B261D] text-[#C5A880] border-[#C5A880]/40 group-hover:scale-105' 
                : 'bg-[#FAF7F2]/10 backdrop-blur-xs text-[#E8D8C3] border-white/20 group-hover:bg-white/20'
            }`}>
              <Camera className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl md:text-2xl font-serif tracking-[0.25em] font-semibold uppercase leading-tight transition-colors ${
                isScrolled ? 'text-[#1B261D]' : 'text-white'
              }`}>
                ROHIT
              </span>
              <span className={`text-[9px] tracking-[0.35em] uppercase font-sans font-medium transition-colors ${
                isScrolled ? 'text-[#A67C52]' : 'text-[#E8D8C3]/90'
              }`}>
                Photography & Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 py-1 ${
                    isScrolled 
                      ? isActive 
                        ? 'text-[#1B261D] font-semibold' 
                        : 'text-[#282320]/75 hover:text-[#C5A880]' 
                      : isActive 
                        ? 'text-white font-semibold' 
                        : 'text-white/80 hover:text-[#C5A880]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A880] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Social Icons */}
            <div className="flex items-center space-x-2.5">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isScrolled ? 'text-[#282320]/80 hover:text-[#C5A880]' : 'text-white/80 hover:text-[#C5A880]'
                }`}
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isScrolled ? 'text-[#282320]/80 hover:text-[#C5A880]' : 'text-white/80 hover:text-[#C5A880]'
                }`}
                aria-label="Facebook"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
            </div>

            {/* "Let's Connect" Luxury Pill CTA Button */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenBooking}
              id="header-lets-connect-btn"
              className={`px-5 py-2.5 rounded-full text-xs font-sans tracking-[0.18em] uppercase font-semibold transition-all duration-300 flex items-center space-x-2 shadow-sm ${
                isScrolled
                  ? 'bg-[#1B261D] text-[#FAF7F2] hover:bg-[#A67C52] shadow-luxury'
                  : 'bg-[#C5A880] text-[#1B261D] hover:bg-white hover:text-[#1B261D] shadow-lg'
              }`}
            >
              <span>LET'S CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${isScrolled ? 'text-[#1B261D]' : 'text-white'}`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#FAF7F2] border-b border-[#E8D8C3] px-6 py-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#1B261D] text-sm uppercase font-serif tracking-[0.2em] hover:text-[#C5A880] transition-colors py-1 border-b border-[#E8D8C3]/40"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-2 flex flex-col space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-full bg-[#1B261D] text-[#FAF7F2] text-xs uppercase font-sans tracking-[0.2em] font-medium flex items-center justify-center space-x-2"
                >
                  <span>LET'S CONNECT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                
                <div className="flex items-center justify-center space-x-4 pt-2 text-[#282320]/80">
                  <a href="https://instagram.com" className="p-2 hover:text-[#C5A880]">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a href="https://facebook.com" className="p-2 hover:text-[#C5A880]">
                    <FaFacebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
