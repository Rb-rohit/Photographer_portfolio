import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Camera, 
  Heart, 
  Share2, 
  Check
} from 'lucide-react';



export const LightboxModal= ({
  item,
  onClose,
  onPrev,
  onNext,
  onToggleLike,
  isLiked
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!item) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Prev & Next Arrows */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/40 hover:bg-black/80 text-white/90 hover:text-white border border-white/20 transition-colors hidden sm:flex items-center justify-center"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/40 hover:bg-black/80 text-white/90 hover:text-white border border-white/20 transition-colors hidden sm:flex items-center justify-center"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Main Lightbox Content Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl max-h-[92vh] bg-[#1B261D] border border-[#C5A880]/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image Canvas Container */}
          <div className="relative lg:w-2/3 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[420px] max-h-[60vh] lg:max-h-[85vh] overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Metadata Sidebar (EXIF & Story) */}
          <div className="lg:w-1/3 p-6 bg-[#162018] text-[#FAF7F2] flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Category & Location Badge */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#C5A880] font-semibold">
                  {item.category}
                </span>
                <span className="flex items-center space-x-1 text-xs text-[#E8D8C3]/80">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{item.location}</span>
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-serif text-white mb-3">{item.title}</h3>

              {/* Story Description */}
              <p className="text-xs sm:text-sm text-[#E8D8C3]/90 font-sans leading-relaxed mb-6 font-light">
                {item.description}
              </p>

              {/* Technical EXIF Info Box */}
              {item.cameraInfo && (
                <div className="p-4 rounded-xl bg-[#1B261D] border border-white/10 space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-xs text-[#C5A880] font-medium pb-1 border-b border-white/10">
                    <Camera className="w-3.5 h-3.5" />
                    <span className="uppercase tracking-wider">Field Capture Specifications</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-[#FAF7F2]/80">
                    <div>
                      <span className="text-white/40 block">Camera</span>
                      <span className="font-mono text-white">{item.cameraInfo.camera}</span>
                    </div>
                    <div>
                      <span className="text-white/40 block">Lens</span>
                      <span className="font-mono text-white">{item.cameraInfo.lens}</span>
                    </div>
                    <div>
                      <span className="text-white/40 block">Settings</span>
                      <span className="font-mono text-white">{item.cameraInfo.focalLength} • {item.cameraInfo.aperture}</span>
                    </div>
                    <div>
                      <span className="text-white/40 block">Exposure</span>
                      <span className="font-mono text-white">ISO {item.cameraInfo.iso} • {item.cameraInfo.shutter}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions Bar */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => onToggleLike(item.id)}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-full text-xs font-sans transition-colors ${
                  isLiked 
                    ? 'bg-rose-900/40 text-rose-300 border border-rose-500/40' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-400 text-rose-400' : ''}`} />
                <span>{item.likes + (isLiked ? 1 : 0)} Likes</span>
              </button>

              <button
                onClick={handleShare}
                className="flex items-center space-x-1.5 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-sans transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Link Copied' : 'Share'}</span>
              </button>
            </div>

          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
};
