import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Globe, Camera, Trophy, Heart } from 'lucide-react';
import { metricsData } from '../data/contentData';
import { CompassRoseWatermark, TornPaperDivider } from './Decorators';

export const MetricsSection = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  const [counts, setCounts] = useState({
    countries: 0,
    projects: 0,
    awards: 0,
    clients: 0,
  });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = performance.now();

    const animateCounters = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuad =
        1 - (1 - progress) * (1 - progress);

      setCounts({
        countries: Math.floor(easeOutQuad * 60),
        projects: Math.floor(easeOutQuad * 450),
        awards: Math.floor(easeOutQuad * 30),
        clients: Math.floor(easeOutQuad * 25),
      });

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      } else {
        setCounts({
          countries: 60,
          projects: 450,
          awards: 30,
          clients: 25,
        });
      }
    };

    const animationFrame =
      requestAnimationFrame(animateCounters);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView]);

  const getMetricIcon = (iconName) => {
    switch (iconName) {
      case 'Globe':
        return (
          <Globe className="w-8 h-8 text-[#1B261D]" />
        );

      case 'Camera':
        return (
          <Camera className="w-8 h-8 text-[#1B261D]" />
        );

      case 'Trophy':
        return (
          <Trophy className="w-8 h-8 text-[#1B261D]" />
        );

      case 'Heart':
        return (
          <Heart className="w-8 h-8 text-[#1B261D]" />
        );

      default:
        return (
          <Globe className="w-8 h-8 text-[#1B261D]" />
        );
    }
  };

  return (
    <div
      ref={ref}
      className="relative bg-[#FAF7F2] py-14 md:py-18 overflow-hidden border-b border-[#E8D8C3]"
    >
      {/* Torn Top Divider */}
      <TornPaperDivider
        position="top"
        fillColor="#FAF7F2"
        className="-mt-14 md:-mt-18 absolute top-0 left-0"
      />

      {/* Decorative Compass Rose Watermark */}
      <div className="absolute -right-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-25">
        <CompassRoseWatermark
          className="w-48 h-48 md:w-64 md:h-64"
          color="#C5A880"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-[#E8D8C3]">

          {metricsData.map((metric, idx) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
              }}
              className={`flex items-center space-x-4 sm:space-x-5 ${
                idx > 0
                  ? 'pt-6 lg:pt-0 lg:pl-8'
                  : ''
              }`}
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-full bg-white border border-[#E8D8C3] flex items-center justify-center shrink-0 shadow-sm">
                {getMetricIcon(metric.iconName)}
              </div>

              {/* Number and Label */}
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1B261D] tracking-tight flex items-baseline">
                  <span>
                    {counts[metric.id]}
                  </span>

                  <span className="text-[#A67C52] text-2xl sm:text-3xl ml-0.5">
                    {metric.suffix}
                  </span>
                </div>

                <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-sans text-[#7A7169] font-medium mt-1">
                  {metric.label}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
};