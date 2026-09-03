import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Heart, 
  Maximize2, 
  ArrowRight,
  Eye
} from 'lucide-react';
import { portfolioItems } from '../data/contentData';
import { LightboxModal } from './LightboxModal';
import { BotanicalBranch } from './Decorators';

export const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [likedPhotos, setLikedPhotos] = useState({});
  const [showFullGalleryModal, setShowFullGalleryModal] = useState(false);

  const categories = [
    { id: 'all', label: 'ALL' },
    { id: 'wedding', label: 'WEDDINGS' },
    { id: 'event', label: 'EVENTS & GALAS' },
    { id: 'travel', label: 'TRAVEL' },
    { id: 'lifestyle', label: 'LIFESTYLE' },
    { id: 'adventure', label: 'ADVENTURE' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const toggleLike = (id) => {
    setLikedPhotos(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePrevPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNextPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredItems.length);
    }
  };

  return (
    <section id="portfolio" className="relative bg-[#1B261D] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Subtle Botanical corner embellishments */}
      <div className="absolute top-6 left-6 pointer-events-none opacity-20">
        <BotanicalBranch className="w-32 h-32 -rotate-45" color="#C5A880" />
      </div>
      <div className="absolute bottom-6 right-6 pointer-events-none opacity-20">
        <BotanicalBranch className="w-32 h-32 rotate-135" color="#C5A880" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase font-sans tracking-[0.3em] text-[#C5A880] font-semibold mb-2">
            PORTFOLIO
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-normal tracking-tight text-white">
            Recent Work
          </h2>
          <div className="w-16 h-[1px] bg-[#C5A880]/50 mx-auto mt-4" />
        </div>

        {/* Filter Category Tabs (Image 1 Layout + Animated Pill) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-2 rounded-full text-xs font-sans tracking-[0.2em] uppercase font-semibold transition-all duration-300 ${
                  isActive 
                    ? 'text-[#1B261D]' 
                    : 'text-[#E8D8C3]/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePortfolioTab"
                    className="absolute inset-0 bg-[#C5A880] rounded-full shadow-md"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Photography Showcase Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-5"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => {
              const isLiked = !!likedPhotos[item.id];
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="group relative h-[380px] sm:h-[400px] rounded-xl overflow-hidden bg-[#162018] border border-white/10 hover:border-[#C5A880] shadow-luxury transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedPhotoIndex(index)}
                >
                  {/* Photo Image */}
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-full bg-[#1B261D]/80 backdrop-blur-md text-[9px] uppercase font-sans tracking-widest text-[#E8D8C3] border border-white/10">
                      {item.category}
                    </span>
                  </div>

                  {/* Top Right Quick Like Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(item.id);
                    }}
                    className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white/80 hover:text-rose-400 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Like Photo"
                  >
                    <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                  </button>

                  {/* Bottom Metadata & Hover Reveal */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10 transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="flex items-center space-x-1.5 text-[11px] text-[#C5A880] mb-1 font-sans">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                    
                    <h3 className="text-base font-serif text-white font-medium leading-snug line-clamp-2">
                      {item.title}
                    </h3>

                    {/* View Lightbox indicator on hover */}
                    <div className="mt-3 pt-2 border-t border-white/15 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-sans uppercase tracking-widest text-[#FAF7F2]">
                      <span className="flex items-center space-x-1">
                        <Eye className="w-3 h-3 text-[#C5A880]" />
                        <span>View Details</span>
                      </span>
                      <Maximize2 className="w-3 h-3 text-[#C5A880]" />
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View Full Portfolio Button */}
        <div className="mt-14 text-center">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setShowFullGalleryModal(true)}
            id="view-full-portfolio-btn"
            className="px-8 py-3.5 rounded-full bg-[#C5A880] hover:bg-white text-[#1B261D] text-xs font-sans tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-luxury inline-flex items-center space-x-3 group"
          >
            <span>VIEW FULL PORTFOLIO</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <LightboxModal
          item={filteredItems[selectedPhotoIndex]}
          onClose={() => setSelectedPhotoIndex(null)}
          onPrev={handlePrevPhoto}
          onNext={handleNextPhoto}
          onToggleLike={toggleLike}
          isLiked={!!likedPhotos[filteredItems[selectedPhotoIndex].id]}
        />
      )}

      {/* Full Gallery Archive Modal */}
      <AnimatePresence>
        {showFullGalleryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-6xl max-h-[92vh] bg-[#FAF7F2] text-[#1B261D] rounded-2xl shadow-2xl border border-[#E8D8C3] overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="p-6 bg-[#1B261D] text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#C5A880]">Complete Curated Archive</span>
                  <h3 className="text-2xl sm:text-3xl font-serif">Wild Light Photographic Collection</h3>
                </div>
                <button
                  onClick={() => setShowFullGalleryModal(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Grid of all items */}
              <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {portfolioItems.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setShowFullGalleryModal(false);
                      setSelectedPhotoIndex(idx);
                    }}
                    className="group relative aspect-[4/5] rounded-xl overflow-hidden bg-stone-900 border border-[#E8D8C3] cursor-pointer shadow-sm hover:shadow-lg transition-all"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end text-white">
                      <span className="text-[10px] font-sans text-[#C5A880] uppercase tracking-wider">{item.location}</span>
                      <h4 className="text-sm font-serif">{item.title}</h4>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-[#F4EFE6] border-t border-[#E8D8C3] flex items-center justify-between text-xs text-[#7A7169]">
                <span>Total Items: {portfolioItems.length} Master Photographs</span>
                <button
                  onClick={() => setShowFullGalleryModal(false)}
                  className="px-5 py-1.5 rounded-full bg-[#1B261D] text-white text-xs font-sans uppercase tracking-wider"
                >
                  Close Archive
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
