
import { motion } from 'motion/react';
import { Play, ArrowRight, Camera, Award, Heart } from 'lucide-react';
import { BotanicalBranch } from './Decorators';
import { img } from '../assets/img';

export const Hero = ({ 
  onOpenShowreel, 
  onScrollToPortfolio,
}) => {
  return (
    <section 
      id="home" 
      className="relative min-h-[95vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#1B261D]"
    >
      {/* Background Hero Image with atmospheric grading */}
      <div className="absolute inset-0 z-0">
        <img
          src={img.wedding0}
          alt="Royal Indian Wedding & Destination Storytelling"
          className="w-full h-full object-cover object-top transform scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Luxury multi-layer gradient vignette with warm champagne & deep evergreen tones */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B261D] via-[#1B261D]/60 to-[#1B261D]/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#1B261D]/30 to-[#1B261D]/75" />
      </div>

      {/* Decorative Botanical Flourish (Top Right & Left) */}
      <div className="absolute top-24 left-6 md:left-12 pointer-events-none opacity-40 z-10">
        <BotanicalBranch className="w-24 h-24 md:w-36 md:h-36 -rotate-12" color="#E8D8C3" />
      </div>
      <div className="absolute bottom-20 right-6 md:right-16 pointer-events-none opacity-35 z-10">
        <BotanicalBranch className="w-32 h-32 md:w-44 md:h-44 rotate-180" color="#C5A880" />
      </div>

      {/* Hero Content Box */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          
          {/* Top Eyebrow / Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center space-x-2.5 mb-4"
          >
            <span className="w-8 h-[1px] bg-[#C5A880]" />
            <p className="text-xs md:text-sm font-sans uppercase tracking-[0.3em] text-[#E8D8C3] font-medium">
              Weddings • Events • Travel • Editorial
            </p>
          </motion.div>

          {/* Main Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-white tracking-tight leading-[1.08] mb-4 drop-shadow-md"
          >
            Beautiful Places.<br />
            <span className="font-normal text-[#FAF7F2]">Real Moments.</span><br />
            <span className="italic font-serif text-[#E8D8C3]">Timeless Memories.</span>
          </motion.h1>

          {/* Calligraphy Cursive Subtitle & Heart Doodle (Theme 2 blend) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex items-center space-x-3 mb-8"
          >
            <p className="text-2xl md:text-3xl font-script text-[#C5A880] tracking-wide">
              Weddings. Events. Adventures. You.
            </p>
            <span className="text-xl text-[#C5A880]/80 font-script">♡</span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12"
          >
            {/* View Portfolio Button */}
            <motion.button
              whileHover={{ scale: 1.03, x: 2 }}
              whileTap={{ scale: 0.97 }}
              onClick={onScrollToPortfolio}
              id="hero-view-portfolio-btn"
              className="px-7 py-3.5 rounded-full bg-[#1B261D]/90 hover:bg-[#C5A880] hover:text-[#1B261D] text-white border border-[#C5A880]/50 text-xs font-sans tracking-[0.2em] uppercase font-semibold transition-all duration-300 flex items-center space-x-3 shadow-luxury backdrop-blur-xs group"
            >
              <span>VIEW PORTFOLIO</span>
              <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:text-[#1B261D] group-hover:translate-x-1 transition-all duration-300" />
            </motion.button>

            {/* Watch Showreel Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenShowreel}
              id="hero-watch-showreel-btn"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-sans tracking-[0.2em] uppercase font-medium transition-all duration-300 flex items-center space-x-3 backdrop-blur-xs group"
            >
              <span className="w-7 h-7 rounded-full bg-[#C5A880] text-[#1B261D] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </span>
              <span className="tracking-[0.18em]">WATCH SHOWREEL</span>
            </motion.button>
          </motion.div>

          {/* Quick Credibility Trust Badges (Inspired by theme in Image 2) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="pt-6 border-t border-white/15 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg text-[#E8D8C3]"
          >
            <div className="flex items-center space-x-2.5">
              <Camera className="w-4 h-4 text-[#C5A880] shrink-0" />
              <div>
                <p className="text-sm md:text-base font-serif font-bold text-white leading-tight">500+</p>
                <p className="text-[10px] uppercase tracking-wider text-[#E8D8C3]/80">Shoots Captured</p>
              </div>
            </div>
            <div className="flex items-center space-x-2.5">
              <Award className="w-4 h-4 text-[#C5A880] shrink-0" />
              <div>
                <p className="text-sm md:text-base font-serif font-bold text-white leading-tight">8+ Years</p>
                <p className="text-[10px] uppercase tracking-wider text-[#E8D8C3]/80">Experience</p>
              </div>
            </div>
            <div className="flex items-center space-x-2.5">
              <Heart className="w-4 h-4 text-[#C5A880] shrink-0" />
              <div>
                <p className="text-sm md:text-base font-serif font-bold text-white leading-tight">100%</p>
                <p className="text-[10px] uppercase tracking-wider text-[#E8D8C3]/80">Client Love</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
