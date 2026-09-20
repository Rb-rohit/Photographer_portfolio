import { useState } from 'react';
import { motion} from 'motion/react';

import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,   
  Check, 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BotanicalBranch, WashiTape, TornPaperDivider } from './Decorators';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export const ContactSection = ({ initialService = '' }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Form Fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [shootType, setShootType] = useState(initialService || 'Travel Photography');
  const [dateEstimate, setDateEstimate] = useState('');
  const [locationName, setLocationName] = useState('');
//   const [budgetRange, setBudgetRange] = useState('$2,500 - $5,000');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@wildlightphoto.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
      
      // Fire luxury celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#C5A880', '#1B261D', '#E8D8C3', '#FAF7F2']
        });
      } catch {
        // fallback
      }
    }, 900);
  };

  return (
    <section id="contact" className="relative bg-[#FAF7F2] pt-16 pb-24 overflow-hidden">
      
      {/* Torn Top Divider transition from Testimonials */}
      <TornPaperDivider position="top" fillColor="#FAF7F2" className="-mt-16 relative z-20" />

      {/* Background Decorators */}
      <div className="absolute top-1/3 -right-12 pointer-events-none opacity-30">
        <BotanicalBranch className="w-44 h-44 rotate-90" color="#C5A880" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Contact Form & Info (Image 1 Layout) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Header */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="h-[1px] w-6 bg-[#C5A880]" />
                <span className="text-xs uppercase font-sans tracking-[0.25em] text-[#A67C52] font-semibold">
                  LET'S CONNECTc
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1B261D] font-normal tracking-tight">
                Have a Project in Mind?
              </h2>
              
              <p className="text-2xl sm:text-3xl font-script text-[#A67C52] mt-1 tracking-wide">
                I'd love to hear from you!
              </p>
            </div>

            {/* Quick Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              
              {/* Email */}
              <div 
                onClick={handleCopyEmail}
                className="p-4 rounded-xl bg-white border border-[#E8D8C3] hover:border-[#C5A880] shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#FAF7F2] text-[#1B261D] flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#A67C52]" />
                  </div>
                  <span className="text-[10px] text-[#A67C52] opacity-0 group-hover:opacity-100 transition-opacity">
                    {copiedEmail ? 'Copied!' : 'Click to copy'}
                  </span>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-sans tracking-widest text-[#7A7169]">Email</p>
                  <p className="text-xs font-semibold text-[#1B261D] truncate">hello@rohitphoto.com</p>
                </div>
              </div>

              {/* Phone */}
              <a 
                href="tel: +91 9921923609"
                className="p-4 rounded-xl bg-white border border-[#E8D8C3] hover:border-[#C5A880] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="w-8 h-8 rounded-full bg-[#FAF7F2] text-[#1B261D] flex items-center justify-center mb-2">
                  <Phone className="w-4 h-4 text-[#A67C52]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-sans tracking-widest text-[#7A7169]">Phone</p>
                  <p className="text-xs font-semibold text-[#1B261D]">+91 9921923609</p>
                </div>
              </a>

              {/* Location */}
              <div className="p-4 rounded-xl bg-white border border-[#E8D8C3] shadow-xs flex flex-col justify-between">
                <div className="w-8 h-8 rounded-full bg-[#FAF7F2] text-[#1B261D] flex items-center justify-center mb-2">
                  <MapPin className="w-4 h-4 text-[#A67C52]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-sans tracking-widest text-[#7A7169]">Location</p>
                  <p className="text-xs font-semibold text-[#1B261D]">Nagpur, Maharashtra</p>
                </div>
              </div>

            </div>

            {/* Interactive Message / Inquiry Form */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8D8C3] shadow-luxury">
              {formSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#1B261D] text-[#C5A880] mx-auto flex items-center justify-center">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-serif text-[#1B261D]">Message Received With Warmth!</h3>
                  <p className="text-sm text-[#554E49] max-w-md mx-auto">
                    Thank you, <strong>{fullName}</strong>. Rohit has received your inquiry for <strong>{shootType}</strong> and will be in touch within 24 hours with a custom proposal guide.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2 rounded-full border border-[#1B261D] text-xs uppercase tracking-widest font-semibold hover:bg-[#1B261D] hover:text-white transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-sans tracking-wider text-[#3A3535] mb-1 font-medium">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full Name"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8D8C3] bg-[#FAF7F2] text-sm focus:outline-none focus:border-[#1B261D] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-sans tracking-wider text-[#3A3535] mb-1 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8D8C3] bg-[#FAF7F2] text-sm focus:outline-none focus:border-[#1B261D] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-sans tracking-wider text-[#3A3535] mb-1 font-medium">
                        Shoot Category
                      </label>
                      <select
                        value={shootType}
                        onChange={(e) => setShootType(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg border border-[#E8D8C3] bg-[#FAF7F2] text-xs focus:outline-none focus:border-[#1B261D] focus:bg-white transition-all"
                      >
                        <option value="Wedding & Union Stories">Wedding & Union Stories</option>
                        <option value="Event & Gala Photography">Event & Gala Photography</option>
                        <option value="Travel & Destination Expeditions">Travel & Destination Expeditions</option>
                        <option value="Lifestyle & Editorial Portraits">Lifestyle & Editorial Portraits</option>
                        <option value="Adventure & Wilderness">Adventure & Wilderness</option>
                        <option value="Fine Art Prints & Workshops">Fine Art Prints & Workshops</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-sans tracking-wider text-[#3A3535] mb-1 font-medium">
                        Estimated Date / Month
                      </label>
                      <input
                        type="text"
                        value={dateEstimate}
                        onChange={(e) => setDateEstimate(e.target.value)}
                        placeholder="e.g. October 2026"
                        className="w-full px-3 py-2.5 rounded-lg border border-[#E8D8C3] bg-[#FAF7F2] text-xs focus:outline-none focus:border-[#1B261D] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-sans tracking-wider text-[#3A3535] mb-1 font-medium">
                        Destination / Location
                      </label>
                      <input
                        type="text"
                        value={locationName}
                        onChange={(e) => setLocationName(e.target.value)}
                        placeholder="Location Name or City"
                        className="w-full px-3 py-2.5 rounded-lg border border-[#E8D8C3] bg-[#FAF7F2] text-xs focus:outline-none focus:border-[#1B261D] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-sans tracking-wider text-[#3A3535] mb-1 font-medium">
                      Project Vision & Details *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about the story you want to preserve, the setting, mood, or deliverables..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8D8C3] bg-[#FAF7F2] text-sm focus:outline-none focus:border-[#1B261D] focus:bg-white transition-all"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={submitting}
                    id="contact-send-message-btn"
                    className="w-full py-3.5 rounded-full bg-[#1B261D] hover:bg-[#C5A880] text-white hover:text-[#1B261D] text-xs font-sans uppercase tracking-[0.2em] font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-luxury"
                  >
                    {submitting ? (
                      <span className="animate-pulse">Dispatching Inquiry...</span>
                    ) : (
                      <>
                        <span>SEND A MESSAGE</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>

            {/* Social Follow */}
            <div className="flex items-center space-x-4 pt-2">
              <span className="text-xs uppercase font-sans tracking-widest text-[#7A7169] font-medium">FOLLOW:</span>
              <div className="flex items-center space-x-3 text-[#1B261D]">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white border border-[#E8D8C3] hover:text-[#C5A880] transition-colors shadow-xs">
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white border border-[#E8D8C3] hover:text-[#C5A880] transition-colors shadow-xs">
                  <FaFacebook className="w-4 h-4" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white border border-[#E8D8C3] hover:text-[#C5A880] transition-colors shadow-xs">
                  <FaYoutube className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Scrapbook Pinned Note & Scenic Pine Cabin Photo (Image 1 Layout) */}
          <div className="lg:col-span-5 relative">
            
            <div className="relative max-w-md mx-auto">
              
              {/* Forest Cabin Photograph Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-polaroid border-2 border-white bg-stone-900 group">
                <img
                  src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=85"
                  alt="Pine Forest Expedition Cabin"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Scrapbook Sticky Note with Cursive Script (Image 1 Detail: "Let's create something beautiful together. ♡") */}
              <motion.div
                whileHover={{ rotate: 0, scale: 1.03 }}
                initial={{ rotate: 3 }}
                transition={{ duration: 0.3 }}
                className="absolute -bottom-10 -right-2 sm:-right-6 w-56 sm:w-64 bg-[#FDFBF7] p-5 sm:p-6 rounded-lg shadow-polaroid border border-[#E8D8C3] z-30"
              >
                {/* Washi tape on top of sticky note */}
                <WashiTape className="-top-3 left-1/2 -translate-x-1/2 w-24 h-4" tilt="-rotate-2" />

                <div className="text-center pt-2 space-y-1">
                  <p className="font-script text-2xl text-[#1B261D] leading-tight">
                    Let's create something beautiful together.
                  </p>
                  <p className="font-script text-2xl text-[#C5A880]">♡</p>
                </div>
              </motion.div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
