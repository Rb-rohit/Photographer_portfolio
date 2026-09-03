import { useState } from 'react';
import { 
  Camera, 
  Send, 
  Heart, 
  MessageCircle, 
  Check,  
  ArrowUpRight 
} from 'lucide-react';
import { instagramPosts } from '../data/contentData';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setNewsletterSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="relative bg-[#162018] text-[#FAF7F2] pt-16 pb-12 border-t border-white/10 overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Instagram Feed Grid Banner (Image 1 Style) */}
        <div className="mb-16 pb-12 border-b border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <div>
              <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#C5A880] font-semibold">
                LIVE JOURNAL
              </span>
              <h3 className="text-xl font-serif text-white">Instagram Feed</h3>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs uppercase font-sans tracking-widest text-[#E8D8C3] hover:text-[#C5A880] flex items-center space-x-1 transition-colors"
            >
              <span>@wildlight_stories</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden bg-stone-900 border border-white/10 shadow-sm"
              >
                <img
                  src={post.imageUrl}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Hover overlay with likes and caption */}
                <div className="absolute inset-0 bg-[#1B261D]/85 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-between text-white">
                  <div className="flex items-center justify-between text-[11px] text-[#C5A880]">
                    <span className="flex items-center space-x-1">
                      <Heart className="w-3 h-3 fill-current" />
                      <span>{post.likes}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MessageCircle className="w-3 h-3" />
                      <span>{post.comments}</span>
                    </span>
                  </div>
                  <p className="text-[10px] font-sans text-stone-200 line-clamp-3 leading-snug">
                    {post.caption}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 4 Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          
          {/* Column 1: Brand Info (Image 1 Style) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-[#FAF7F2]/10 border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880]">
                <Camera className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xl font-serif tracking-[0.25em] font-semibold uppercase block leading-tight text-white">
                  ROHIT
                </span>
                <span className="text-[8.5px] tracking-[0.35em] uppercase font-sans font-medium text-[#C5A880]">
                  Photography & Studio
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#E8D8C3]/80 font-sans font-light leading-relaxed max-w-sm">
              Capturing the world through my lens and sharing stories that inspire adventure, authenticity, and human connection.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-[#E8D8C3]/80">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/15 hover:text-[#C5A880] transition-colors">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/15 hover:text-[#C5A880] transition-colors">
                <FaFacebook className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/15 hover:text-[#C5A880] transition-colors">
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-sans tracking-[0.25em] text-[#C5A880] font-semibold">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs font-sans text-[#E8D8C3]/80">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Alex</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services & Pricing</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Portfolio Archive</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">Client Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Inquiries & Booking</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-sans tracking-[0.25em] text-[#C5A880] font-semibold">
              STUDIO LOCATION
            </h4>
            <div className="text-xs font-sans text-[#E8D8C3]/80 space-y-1.5">
              <p className="text-white font-medium">Wild Light Studio HQ</p>
              <p>450 Waterfront Promenade</p>
              <p>Vancouver, BC V6B 2Z6, Canada</p>
              <p className="pt-2 text-[#C5A880]">hello@rohitphoto.com</p>
              <p>+91 9921923609</p>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-sans tracking-[0.25em] text-[#C5A880] font-semibold">
              NEWSLETTER
            </h4>
            <p className="text-xs text-[#E8D8C3]/80 font-sans font-light leading-relaxed">
              Subscribe for updates, expedition dispatches, and exclusive fine art print releases.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 rounded-lg bg-[#C5A880]/20 border border-[#C5A880] text-xs text-[#E8D8C3] flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#C5A880]" />
                <span>Welcome to our inner storytelling circle!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center space-x-2 pt-1">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-3.5 py-2.5 rounded-full bg-white/10 border border-white/20 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#C5A880] transition-colors"
                />
                <button
                  type="submit"
                  className="p-2.5 rounded-full bg-[#C5A880] hover:bg-white text-[#1B261D] transition-colors shrink-0"
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar (Image 1 Style) */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E8D8C3]/60 font-sans gap-4">
          <p>© {new Date().getFullYear()} Wild Light Photography. All Rights Reserved.</p>
          <div className="flex items-center space-x-1">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 text-[#C5A880] fill-current mx-0.5" />
            <span>for Photographer and dreamers.</span>
          </div>
        </div>

      </div>

    </footer>
  );
};
