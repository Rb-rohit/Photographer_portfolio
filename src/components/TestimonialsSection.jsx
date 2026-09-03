import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote,  
  Plus, 
  X, 
  Check 
} from 'lucide-react';
import { testimonialsData } from '../data/contentData';
import { BotanicalBranch } from './Decorators';
import { img } from '../assets/img';

export const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState(testimonialsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  // New review form state
  const [newName, setNewName] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newQuote, setNewQuote] = useState('');
  const [newRating, setNewRating] = useState(5);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!newName || !newQuote) return;

    const newTestimonial = {
      id: `client-${Date.now()}`,
      name: newName,
      role: 'Client Review',
      location: newLocation || 'Worldwide Traveler',
      avatar: { src: img.couple1, alt: newName },
      quote: newQuote,
      rating: newRating,
      featuredStory: 'Custom Photography Story',
      shootType: 'Photography Project'
    };

    setTestimonials([newTestimonial, ...testimonials]);
    setReviewSubmitted(true);
    setTimeout(() => {
      setReviewSubmitted(false);
      setReviewModalOpen(false);
      setNewName('');
      setNewLocation('');
      setNewQuote('');
    }, 1800);
  };

  return (
    <section id="testimonials" className="relative bg-[#1B261D] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Botanical Flourishes in background */}
      <div className="absolute top-10 right-10 pointer-events-none opacity-20">
        <BotanicalBranch className="w-36 h-36 rotate-12" color="#C5A880" />
      </div>
      <div className="absolute bottom-8 left-8 pointer-events-none opacity-20">
        <BotanicalBranch className="w-36 h-36 -rotate-160" color="#C5A880" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase font-sans tracking-[0.3em] text-[#C5A880] font-semibold mb-2">
            KIND WORDS
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-normal tracking-tight text-white">
            What Clients Say
          </h2>
          <div className="w-16 h-[1px] bg-[#C5A880]/50 mx-auto mt-4" />
        </div>

        {/* Carousel / Multi-Card Review Display (Image 1 Layout + Image 2 Luxury Card Styling) */}
        <div className="relative">
          
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#FAF7F2] text-[#1B261D] hover:bg-[#C5A880] transition-all flex items-center justify-center shadow-lg cursor-pointer"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#FAF7F2] text-[#1B261D] hover:bg-[#C5A880] transition-all flex items-center justify-center shadow-lg cursor-pointer"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:px-8">
            {testimonials.slice(currentIndex, currentIndex + 3).concat(
              testimonials.slice(0, Math.max(0, currentIndex + 3 - testimonials.length))
            ).slice(0, 3).map((item, idx) => (
              <motion.div
                key={item.id + idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-[#FAF7F2] text-[#1B261D] p-7 rounded-2xl border border-[#E8D8C3] shadow-luxury flex flex-col justify-between relative group transition-all duration-300"
              >
                <div>
                  {/* Avatar & Client Header */}
                  <div className="flex flex-col items-center text-center mb-5">
                    <div className="relative mb-3">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-[#C5A880] shadow-sm"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#1B261D] text-[#C5A880] flex items-center justify-center shadow-xs">
                        <Quote className="w-3 h-3 fill-current" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-serif font-bold text-[#1B261D] tracking-wide">
                      {item.name}
                    </h3>
                    <p className="text-[11px] font-sans text-[#A67C52] uppercase tracking-wider">
                      {item.location}
                    </p>
                  </div>

                  {/* Quote text */}
                  <p className="text-xs sm:text-sm text-[#3A3535] italic font-serif leading-relaxed text-center mb-6">
                    "{item.quote}"
                  </p>
                </div>

                {/* 5-Star Rating (from image 1) */}
                <div className="pt-4 border-t border-[#E8D8C3]/70 flex items-center justify-center space-x-1 text-[#C5A880]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Leave a review button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setReviewModalOpen(true)}
            className="inline-flex items-center space-x-2 text-xs uppercase font-sans tracking-[0.2em] text-[#C5A880] hover:text-white border-b border-[#C5A880]/40 pb-1 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Leave a Client Note or Testimonial</span>
          </button>
        </div>

      </div>

      {/* Review Submission Modal */}
      <AnimatePresence>
        {reviewModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-[#FAF7F2] text-[#1B261D] rounded-2xl p-6 sm:p-8 border border-[#E8D8C3] shadow-2xl"
            >
              <button
                onClick={() => setReviewModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-serif text-[#1B261D] mb-1">Share Your Experience</h3>
              <p className="text-xs text-[#7A7169] mb-6">Leave kind words for Alex Morgan & the Wild Light team.</p>

              {reviewSubmitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#1B261D] text-[#C5A880] mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <p className="font-serif text-xl">Thank you for your warm words!</p>
                  <p className="text-xs text-gray-500">Your review has been added to our guestbook.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-sans text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      placeholder="Name as you'd like it to appear"
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E8D8C3] bg-white text-sm focus:outline-none focus:border-[#1B261D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-sans text-gray-700 mb-1">
                      Location / Shoot Type
                    </label>
                    <input
                      type="text"
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                      placeholder="Location or Shoot Type"
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E8D8C3] bg-white text-sm focus:outline-none focus:border-[#1B261D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-sans text-gray-700 mb-1">
                      Rating
                    </label>
                    <div className="flex items-center space-x-1 text-[#C5A880]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setNewRating(star)}
                          className="p-1 hover:scale-110 transition-transform"
                        >
                          <Star className={`w-5 h-5 ${star <= newRating ? 'fill-current' : 'text-gray-300'}`} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-sans text-gray-700 mb-1">
                      Your Words / Story
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={newQuote}
                      onChange={(e) => setNewQuote(e.target.value)}
                      placeholder="Describe your session experience, the photographs, and how the memories were captured..."
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E8D8C3] bg-white text-sm focus:outline-none focus:border-[#1B261D]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-[#1B261D] text-white hover:bg-[#C5A880] hover:text-[#1B261D] text-xs font-sans uppercase tracking-[0.2em] font-semibold transition-colors mt-2"
                  >
                    Post Kind Words
                  </button>
                </form>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
