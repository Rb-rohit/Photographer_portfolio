import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, 
  Palmtree, 
  Mountain, 
  Image as ImageIcon, 
  Heart,
  Sparkles,
  ArrowRight, 
  Check, 
  X, 
} from 'lucide-react';
import { servicesData } from '../data/contentData';
import { BotanicalBranch } from './Decorators';


export const ServicesSection = ({ onSelectServiceForBooking }) => {
  const [selectedService, setSelectedService] = useState(null);

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Heart':
        return <Heart className="w-6 h-6 text-[#1B261D]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#1B261D]" />;
      case 'Camera':
        return <Camera className="w-6 h-6 text-[#1B261D]" />;
      case 'Palmtree':
        return <Palmtree className="w-6 h-6 text-[#1B261D]" />;
      case 'Mountain':
        return <Mountain className="w-6 h-6 text-[#1B261D]" />;
      case 'Image':
        return <ImageIcon className="w-6 h-6 text-[#1B261D]" />;
      default:
        return <Camera className="w-6 h-6 text-[#1B261D]" />;
    }
  };

  return (
    <section id="services" className="relative bg-[#FAF7F2] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Decorative Botanical spray in background */}
      <div className="absolute top-8 left-8 pointer-events-none opacity-30">
        <BotanicalBranch className="w-28 h-28 -rotate-12" color="#C5A880" />
      </div>
      <div className="absolute bottom-8 right-8 pointer-events-none opacity-30">
        <BotanicalBranch className="w-28 h-28 rotate-180" color="#C5A880" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header with Curved Flourish */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase font-sans tracking-[0.3em] text-[#A67C52] font-semibold mb-2">
            WHAT I DO
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#1B261D] font-normal tracking-tight">
            Services & Offerings
          </h2>
          
          {/* Subtle curved ornament flourish */}
          <div className="flex items-center justify-center space-x-3 mt-3">
            <span className="w-12 h-[1px] bg-[#C5A880]/60" />
            <span className="text-[#C5A880] text-sm">✦</span>
            <span className="w-12 h-[1px] bg-[#C5A880]/60" />
          </div>

          <p className="mt-4 text-sm sm:text-base text-[#554E49] font-sans font-light">
            Artistic wedding cinematography, VIP event coverage, destination travel assignments, editorial portraits, and fine art collections.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-7 border border-[#E8D8C3] shadow-luxury hover:shadow-luxury-hover hover:border-[#C5A880] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div>
                {/* Icon Container with Gold Ring */}
                <div className="w-14 h-14 rounded-2xl bg-[#FAF7F2] border border-[#E8D8C3] flex items-center justify-center mb-6 group-hover:border-[#1B261D]  transition-colors duration-300">
                  <span className="group-hover:text-[#C5A880] transition-colors duration-300">
                    {getServiceIcon(service.icon)}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-serif text-[#1B261D] font-medium mb-3 group-hover:text-[#A67C52] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#554E49] leading-relaxed font-sans font-light mb-6 line-clamp-4">
                  {service.shortDesc}
                </p>
              </div>

              {/* Learn More Link */}
              <div className="pt-4 border-t border-[#E8D8C3]/60 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-[#1B261D] group-hover:text-[#A67C52] transition-colors flex items-center space-x-2">
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
                <span className="text-[11px] font-sans text-[#A67C52] font-medium">
                  {service.priceStarting}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Service Detail & Package Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#E8D8C3] overflow-hidden max-h-[92vh] flex flex-col"
            >
              {/* Header Image Cover */}
              <div className="relative h-48 sm:h-56 bg-[#1B261D] overflow-hidden">
                <img
                  src={selectedService.sampleImage}
                  alt={selectedService.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B261D] via-[#1B261D]/40 to-transparent" />
                
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
                    Service Package Details
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif">{selectedService.title}</h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm font-sans text-[#3A3535]">
                <div>
                  <h4 className="text-xs uppercase font-sans tracking-[0.2em] text-[#A67C52] font-semibold mb-2">
                    About This Experience
                  </h4>
                  <p className="leading-relaxed text-[#3A3535]">{selectedService.fullDesc}</p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-white border border-[#E8D8C3]">
                  <div>
                    <span className="text-[10px] uppercase font-sans tracking-widest text-[#7A7169]">Starting Rate</span>
                    <p className="text-xl font-serif font-bold text-[#1B261D]">{selectedService.priceStarting}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-sans tracking-widest text-[#7A7169]">Timeline / Duration</span>
                    <p className="text-sm font-sans font-semibold text-[#1B261D] mt-1">{selectedService.duration}</p>
                  </div>
                </div>

                {/* Deliverables List */}
                <div>
                  <h4 className="text-xs uppercase font-sans tracking-[0.2em] text-[#A67C52] font-semibold mb-3">
                    What's Included in Every Assignment
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedService.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3 text-xs sm:text-sm">
                        <div className="w-5 h-5 rounded-full bg-[#1B261D] text-[#C5A880] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-[#3A3535]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="p-4 sm:p-6 bg-[#F4EFE6] border-t border-[#E8D8C3] flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#7A7169]">Have custom dates or requirements?</p>
                  <p className="text-xs font-semibold text-[#1B261D]">Inquiries answered within 24 hours</p>
                </div>
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onSelectServiceForBooking(title);
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#1B261D] text-white hover:bg-[#C5A880] hover:text-[#1B261D] text-xs font-sans uppercase tracking-[0.18em] font-semibold transition-colors shadow-sm"
                >
                  Inquire Now
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
