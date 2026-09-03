import confetti from 'canvas-confetti';
import { Check, Send, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';


export const BookingModal = ({ 
  isOpen, 
  onClose,
  defaultService = 'Travel Photography' 
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultService);
  const [location, setLocation] = useState('');
  const [timeline, setTimeline] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setService(defaultService);
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#C5A880', '#1B261D', '#FAF7F2', '#A67C52']
        });
      } catch {
        // fallback
      }
    }, 800);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          className="relative w-full max-w-xl bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#E8D8C3] overflow-hidden max-h-[92vh] flex flex-col"
        >
          {/* Header with Dark Forest & Gold Theme */}
          <div className="p-6 bg-[#1B261D] text-white flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#C5A880] font-semibold">
                CONSULTATION & INQUIRY
              </span>
              <h3 className="text-2xl font-serif">Let's Plan Something Extraordinary</h3>
            </div>
            <button
              onClick={handleResetAndClose}
              className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 overflow-y-auto">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#1B261D] text-[#C5A880] mx-auto flex items-center justify-center shadow-lg">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-serif text-[#1B261D]">Inquiry Successfully Received!</h4>
                <p className="text-sm text-[#554E49] leading-relaxed max-w-md mx-auto">
                  Thank you, <strong>{name}</strong>! Rohit Bodalkar has received your proposal for <strong>{service}</strong> in <strong>{location || 'your chosen destination'}</strong>. We will review your dates and respond within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleResetAndClose}
                    className="px-8 py-3 rounded-full bg-[#1B261D] text-white hover:bg-[#C5A880] hover:text-[#1B261D] text-xs font-sans uppercase tracking-[0.2em] font-semibold transition-colors"
                  >
                    Return to Portfolio
                  </button>
                </div>
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full Name"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8D8C3] bg-white text-sm focus:outline-none focus:border-[#1B261D]"
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
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8D8C3] bg-white text-sm focus:outline-none focus:border-[#1B261D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-sans tracking-wider text-[#3A3535] mb-1 font-medium">
                      Select Service *
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-[#E8D8C3] bg-white text-xs focus:outline-none focus:border-[#1B261D]"
                    >
                      <option value="Wedding & Union Stories">Wedding & Union Stories ($3,800+)</option>
                      <option value="Event & Gala Photography">Event & Gala Photography ($2,200+)</option>
                      <option value="Travel & Destination Expeditions">Travel & Destination Expeditions ($2,800+)</option>
                      <option value="Lifestyle & Editorial Portraits">Lifestyle & Editorial Portraits ($1,450+)</option>
                      <option value="Adventure & Wilderness">Adventure & Wilderness ($3,200+)</option>
                      <option value="Fine Art Prints & Workshops">Fine Art Prints & Workshops ($450+)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-sans tracking-wider text-[#3A3535] mb-1 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 1234567890"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8D8C3] bg-white text-sm focus:outline-none focus:border-[#1B261D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-sans tracking-wider text-[#3A3535] mb-1 font-medium">
                      Target Location / City / Destination
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Location or City"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8D8C3] bg-white text-sm focus:outline-none focus:border-[#1B261D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-sans tracking-wider text-[#3A3535] mb-1 font-medium">
                      Target Dates or Season
                    </label>
                    <input
                      type="text"
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      placeholder="e.g. Spring 2026 or Sept 14"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8D8C3] bg-white text-sm focus:outline-none focus:border-[#1B261D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-sans tracking-wider text-[#3A3535] mb-1 font-medium">
                    Creative Vision & Goals
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Tell me about the story, setting, or aesthetic mood you'd love to achieve..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8D8C3] bg-white text-sm focus:outline-none focus:border-[#1B261D]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-full bg-[#1B261D] hover:bg-[#C5A880] text-white hover:text-[#1B261D] text-xs font-sans uppercase tracking-[0.2em] font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-luxury"
                  >
                    {submitting ? (
                      <span className="animate-pulse">Confirming details...</span>
                    ) : (
                      <>
                        <span>SUBMIT INQUIRY</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
