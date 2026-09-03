import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera,Check, ChevronRight, X } from 'lucide-react';
import { BotanicalBranch, PostalStampSeal, WashiTape, TornPaperDivider } from './Decorators';
import { img } from '../assets/img';


export const AboutSection = ({ onOpenBooking }) => {
  const [bioModalOpen, setBioModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('story');

  return (
    <section id="about" className="relative bg-[#FAF7F2] pt-8 pb-24 overflow-hidden">
      
      {/* Torn Paper Top Transition coming from Hero */}
      <TornPaperDivider position="top" fillColor="#FAF7F2" className="-mt-10 md:-mt-14 relative z-20" />

      {/* Ambient background watermark & texture */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#C5A880]/10 blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-12 right-6 pointer-events-none opacity-40">
        <BotanicalBranch className="w-32 h-32 rotate-45" color="#C5A880" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-14">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Scrapbook & Polaroid Photo Collage (Image 1 Layout + Image 2 Luxury Warm Grading) */}
          <div className="lg:col-span-6 relative">
            
            {/* Postal Stamp Seal Watermark */}
            <div className="absolute -top-10 -left-6 z-20 transform -rotate-12 hover:rotate-0 transition-transform duration-500">
              <PostalStampSeal className="w-24 h-24 md:w-32 md:h-32" />
            </div>

            {/* Botanical leafy sprig behind polaroid */}
            <div className="absolute -bottom-8 -left-4 z-10 opacity-70">
              <BotanicalBranch className="w-28 h-28 -rotate-45" color="#2B382D" />
            </div>

            {/* Container for the overlapping photo frames */}
            <div className="relative w-full max-w-md mx-auto lg:max-w-none pt-6 pb-8 pl-4 pr-4 sm:pl-8 sm:pr-8">
              
              {/* Primary Polaroid Photo (Alex Morgan) */}
              <motion.div
                whileHover={{ rotate: 0, scale: 1.02 }}
                initial={{ rotate: -3 }}
                transition={{ duration: 0.4 }}
                className="relative z-20 bg-white p-3.5 sm:p-4 pb-8 sm:pb-10 rounded-sm shadow-polaroid border border-[#E8D8C3] max-w-[290px] sm:max-w-[320px] cursor-pointer group"
                onClick={() => setBioModalOpen(true)}
              >
                {/* Washi tape on top */}
                <WashiTape className="-top-3 left-1/2 -translate-x-1/2 w-28 h-5" tilt="rotate-1" />

                {/* Photo frame */}
                <div className="relative overflow-hidden aspect-[4/5] bg-[#1B261D] rounded-xs">
                  <img
                    src={img.profile}
                    alt="Alex Morgan - Photographer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-white text-[11px] font-sans tracking-widest uppercase flex items-center space-x-1">
                      <span>Click for Full Bio</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* Polaroid handwritten caption */}
                <div className="pt-3 text-center">
                  <p className="font-script text-lg text-[#1B261D] leading-tight">Rohit in Maharastra </p>
                  <p className="text-[9px] uppercase tracking-widest text-[#A67C52] font-sans">Royal Expedition Series</p>
                </div>
              </motion.div>

              {/* Secondary Overlapping Photo (Indian Palace & Destination Union) */}
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ duration: 0.4 }}
                className="absolute right-0 bottom-2 sm:bottom-4 z-10 w-[55%] sm:w-[60%] bg-[#FAF7F2] p-2.5 sm:p-3 rounded-md shadow-luxury border border-[#E8D8C3] group cursor-pointer"
                onClick={() => setBioModalOpen(true)}
              >
                <div className="relative overflow-hidden aspect-[16/10] rounded-xs">
                  <img
                    src={img.profile1}
                    alt="Royal Udaipur Destination Union"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-[#1B261D]/80 backdrop-blur-xs text-[9px] font-sans tracking-wider text-[#FAF7F2] uppercase">
                    Palace Journal
                  </div>
                </div>
              </motion.div>

            </div>

          </div>

          {/* Right Column: Editorial Text & Experience Badge */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Section Tag */}
            <div className="flex items-center space-x-2">
              <span className="h-[1px] w-6 bg-[#C5A880]" />
              <span className="text-xs uppercase font-sans tracking-[0.25em] text-[#A67C52] font-semibold">
                ABOUT ME
              </span>
            </div>

            {/* Title & Signature subtitle */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1B261D] font-normal tracking-tight">
                Hi, I'm Rohit, a visual storyteller capturing the world's beauty through my lens.
              </h2>
              <p className="text-2xl sm:text-3xl font-script text-[#A67C52] mt-1 tracking-wide">
                Photographer. Traveler. Storyteller.
              </p>
            </div>

            {/* Biography Paragraphs */}
            <div className="space-y-4 text-[#3A3535] text-sm sm:text-base leading-relaxed font-sans font-light">
              <p>
                I believe every place has a story and every moment deserves to be remembered. 
                Through my lens, I capture the raw beauty of the world and the authentic emotions 
                that make life extraordinary.
              </p>
              <p className="text-[#554E49] text-sm">
                Based between the coastal rainforests of Vancouver and remote expedition cabins across the globe, 
                my approach blends cinematic framing with unforced, intimate natural light.
              </p>
            </div>

            {/* Action Button & Experience Badge Row */}
            <div className="pt-4 flex flex-wrap items-center gap-6 sm:gap-8">
              
              {/* More About Me Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setBioModalOpen(true)}
                id="about-more-bio-btn"
                className="px-7 py-3 rounded-full bg-[#1B261D] hover:bg-[#C5A880] text-[#FAF7F2] hover:text-[#1B261D] text-xs font-sans tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-luxury"
              >
                MORE ABOUT ME
              </motion.button>

              {/* 8+ Years Experience Badge (from image 1) */}
              <div className="flex items-center space-x-3 px-4 py-2.5 rounded-xl border border-[#E8D8C3] bg-white/70 shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#C5A880]/60 flex items-center justify-center text-[#1B261D]">
                  <Camera className="w-5 h-5 text-[#C5A880]" />
                </div>
                <div>
                  <p className="text-lg font-serif font-bold text-[#1B261D] leading-none">8+ YEARS</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#A67C52] font-sans font-medium">Experience</p>
                </div>
              </div>

            </div>

            {/* Highlights Checklist / Values */}
            <div className="pt-4 grid grid-cols-2 gap-3 border-t border-[#E8D8C3]/70 text-xs font-sans text-[#3A3535]">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-[#C5A880]/20 flex items-center justify-center text-[#1B261D]">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span>100% Natural Light Mastery</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-[#C5A880]/20 flex items-center justify-center text-[#1B261D]">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span>Worldwide Travel Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-[#C5A880]/20 flex items-center justify-center text-[#1B261D]">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span>Medium Format Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-[#C5A880]/20 flex items-center justify-center text-[#1B261D]">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span>Curated Archival Prints</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Bio & Philosophy Modal */}
      <AnimatePresence>
        {bioModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#E8D8C3] overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 bg-[#1B261D] text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#C5A880]">The Storyteller Behind The Lens</span>
                  <h3 className="text-2xl font-serif">Rohit Bodalkar — Bio & Philosophy</h3>
                </div>
                <button
                  onClick={() => setBioModalOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-[#E8D8C3] bg-[#F4EFE6] px-6">
                {(['story', 'gear', 'philosophy'] ).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-3 px-4 text-xs uppercase tracking-widest font-sans font-semibold transition-all relative ${
                      activeTab === tab ? 'text-[#1B261D]' : 'text-[#7A7169] hover:text-[#1B261D]'
                    }`}
                  >
                    {tab === 'story' && 'My Journey'}
                    {tab === 'gear' && 'Camera Gear Bag'}
                    {tab === 'philosophy' && 'Creative Philosophy'}
                    {activeTab === tab && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A880]" />
                    )}
                  </button>
                ))}
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto space-y-4 text-sm font-sans text-[#3A3535]">
                {activeTab === 'story' && (
                  <div className="space-y-3">
                    <p className="leading-relaxed">
                      Growing up in the Pacific Northwest surrounded by towering cedar trees and rugged coastlines, I picked up my first 35mm film camera at age 16. What began as documenting weekend hiking trips soon evolved into a lifelong devotion to visual storytelling.
                    </p>
                    <p className="leading-relaxed">
                      Over the last 8+ years, I have embarked on assignments across 60+ countries—from midnight sun in the Lofoten Islands to sunrise ceremonies in Kyoto and remote cattle ranches in Patagonia.
                    </p>
                    <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#E8D8C3] mt-4">
                      <p className="font-serif text-base italic text-[#1B261D]">
                        "The goal isn't just to take a picture of what something looks like, but to preserve what it felt like to be alive in that exact second."
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'gear' && (
                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-wider text-[#A67C52] font-semibold">Current Primary Kit</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-white rounded-lg border border-[#E8D8C3]">
                        <p className="font-semibold text-[#1B261D]">Hasselblad X2D 100C</p>
                        <p className="text-gray-500">100MP Medium Format for Archival Fine Art Prints</p>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-[#E8D8C3]">
                        <p className="font-semibold text-[#1B261D]">Sony Alpha 7R V & 7 IV</p>
                        <p className="text-gray-500">Fast hybrid bodies for dynamic expeditions & lifestyle</p>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-[#E8D8C3]">
                        <p className="font-semibold text-[#1B261D]">Prime Lenses (24mm, 50mm, 85mm f/1.2)</p>
                        <p className="text-gray-500">Ultra-sharp, creamy bokeh for honest portraits</p>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-[#E8D8C3]">
                        <p className="font-semibold text-[#1B261D]">DJI Mavic 3 Pro Cine</p>
                        <p className="text-gray-500">Hasselblad aerial optics with 4K ProRes capture</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'philosophy' && (
                  <div className="space-y-3">
                    <p className="leading-relaxed">
                      <strong>1. Less Staging, More Being:</strong> True emotion cannot be scripted. I guide subjects into natural environments and let real moments unfold.
                    </p>
                    <p className="leading-relaxed">
                      <strong>2. Respect for the Wild:</strong> Leave No Trace principles guide every wilderness expedition. We honor the heritage and nature of every location.
                    </p>
                    <p className="leading-relaxed">
                      <strong>3. Archival Longevity:</strong> Trends fade, but authentic tones, balanced contrast, and delicate light endure for generations.
                    </p>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-[#F4EFE6] border-t border-[#E8D8C3] flex items-center justify-between">
                <span className="text-xs text-[#7A7169]">Based in Vancouver • Traveling Worldwide</span>
                <button
                  onClick={() => {
                    setBioModalOpen(false);
                    onOpenBooking();
                  }}
                  className="px-5 py-2 rounded-full bg-[#1B261D] text-white hover:bg-[#C5A880] hover:text-[#1B261D] text-xs font-sans uppercase tracking-widest font-semibold transition-colors"
                >
                  Book an Assignment
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
