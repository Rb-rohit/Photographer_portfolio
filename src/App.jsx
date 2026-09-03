import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { MetricsSection } from './components/MetricsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ShowreelModal } from './components/ShowreelModal';
import { BookingModal } from './components/BookingModal';
import RotatingImageGallery from './components/RotatingImageGallery';


export default function App() {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('Travel Photography');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle) => {
    setSelectedServiceForBooking(serviceTitle);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#282320] flex flex-col font-sans selection:bg-[#C5A880]/30 selection:text-[#1B261D] relative">
      
      {/* Fixed Luxury Navigation Bar */}
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Section (Image 1 layout with Image 2 luxury forest & champagne styling) */}
      <main className="flex-grow">
        <Hero
          onOpenShowreel={() => setShowreelOpen(true)}
          onScrollToPortfolio={scrollToPortfolio}
          onOpenBooking={() => setBookingOpen(true)}
        />

        <RotatingImageGallery/>

        {/* About Section with Scrapbook / Polaroid / Torn Paper Effect */}
        <AboutSection onOpenBooking={() => setBookingOpen(true)} />

        {/* Services Section with 4 Interactive Offerings */}
        <ServicesSection onSelectServiceForBooking={handleSelectService} />

        {/* Recent Work Portfolio with Category Filters & Lightbox */}
        <PortfolioSection />

        {/* Stats & Milestones Bar with Compass Rose Watermark */}
        <MetricsSection />

        {/* Kind Words / Client Testimonials Carousel */}
        <TestimonialsSection />

        {/* Contact Section & Pinned Note (Image 1 Layout) */}
        <ContactSection initialService={selectedServiceForBooking} />
      </main>

      {/* Footer & Instagram Live Feed */}
      <Footer />

      {/* Global Showreel Modal */}
      <ShowreelModal 
        isOpen={showreelOpen} 
        onClose={() => setShowreelOpen(false)} 
      />

      {/* Global Booking / Inquiry Consultation Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultService={selectedServiceForBooking}
      />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#1B261D] text-[#C5A880] hover:bg-[#C5A880] hover:text-[#1B261D] shadow-luxury border border-[#C5A880]/50 transition-all duration-300 flex items-center justify-center cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
