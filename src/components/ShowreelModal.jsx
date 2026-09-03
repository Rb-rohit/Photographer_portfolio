import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { img } from '../assets/img';




export const ShowreelModal = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentClipIndex, setCurrentClipIndex] = useState(0);

  const clips = [
    {
      title: 'Royal Heritage Unions & Vows',
      location: 'Udaipur & Jaipur Palaces',
      duration: '4K Cinema Reel',
      poster:img.couple1
    },
    {
      title: 'Sacred Pheras & Sangeet Nights',
      location: 'Lake Pichola & Neemrana',
      duration: '4K Cinema Reel',
      poster: img.couple2
    },
    {
      title: 'High Alpine & Global Expeditions',
      location: 'Dolomites & Swiss Alps',
      duration: '4K Cinema Reel',
      poster: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85'
    }
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl bg-[#1B261D] rounded-2xl overflow-hidden shadow-2xl border border-[#C5A880]/40"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 bg-[#162018] flex items-center justify-between border-b border-white/10">
            <div className="flex items-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
              <div>
                <h3 className="text-base font-serif text-white font-medium">
                  {clips[currentClipIndex].title}
                </h3>
                <p className="text-[10px] uppercase font-sans tracking-widest text-[#C5A880]">
                  {clips[currentClipIndex].location} • {clips[currentClipIndex].duration}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close Showreel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Player Mockup with Animated Atmosphere */}
          <div className="relative aspect-video bg-black overflow-hidden group">
            <img
              src={clips[currentClipIndex].poster}
              alt="Cinematic Showreel"
              className={`w-full h-full object-cover transition-transform duration-10000 ${
                isPlaying ? 'scale-110' : 'scale-100'
              }`}
            />
            
            {/* Cinematic Letterbox Vignette */}
            <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/70 pointer-events-none" />
            
            {/* Film Grain & Sound Waves Overlay */}
            <div className="absolute bottom-16 left-6 text-white pointer-events-none drop-shadow-lg">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#C5A880] block mb-1">
                WILD LIGHT CINEMA EDITION
              </span>
              <p className="font-serif text-2xl sm:text-3xl italic">
                "Preserving the essence of the wild and the warmth of the soul."
              </p>
            </div>

            {/* Custom Play/Pause Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {!isPlaying && (
                <div className="w-20 h-20 rounded-full bg-black/60 backdrop-blur-md border border-[#C5A880] flex items-center justify-center text-[#C5A880]">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
              )}
            </div>

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between text-white">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-full hover:bg-white/20 text-white transition-colors"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                </button>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 rounded-full hover:bg-white/20 text-white transition-colors"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-[#C5A880]" />}
                </button>

                <div className="hidden sm:flex items-center space-x-2 text-xs font-mono text-stone-300">
                  <span className="text-[#C5A880]">01:48</span>
                  <span>/</span>
                  <span>03:30</span>
                </div>
              </div>

              {/* Clip Switcher Buttons */}
              <div className="flex items-center space-x-2">
                {clips.map((clip, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentClipIndex(i)}
                    className={`px-3 py-1 rounded-full text-[10px] font-sans uppercase tracking-wider transition-colors ${
                      currentClipIndex === i
                        ? 'bg-[#C5A880] text-[#1B261D] font-bold'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    Scene {i + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 bg-[#162018] flex items-center justify-between text-xs text-[#E8D8C3]">
            <span>Captured on Hasselblad & RED 8K Cinema Rig</span>
            <button
              onClick={onClose}
              className="px-5 py-1.5 rounded-full bg-[#C5A880] text-[#1B261D] text-xs font-sans uppercase tracking-widest font-semibold hover:bg-white transition-colors"
            >
              Close Reel
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
