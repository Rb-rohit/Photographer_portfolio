
// Elegant Olive Leaf Branch (from image 2 & image 1)
export const BotanicalBranch = ({ 
  className = "w-24 h-24", 
  color = "#C5A880" 
}) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <path 
      d="M15 85C25 70 45 50 85 20" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
    {/* Leaves */}
    <path d="M35 62C30 52 38 42 48 45C45 55 35 62 35 62Z" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="1.2" />
    <path d="M42 66C52 64 58 72 52 80C42 78 42 66 42 66Z" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="1.2" />
    <path d="M55 45C50 35 60 28 68 32C66 42 55 45 55 45Z" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="1.2" />
    <path d="M62 48C72 48 76 56 70 64C62 60 62 48 62 48Z" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="1.2" />
    <path d="M75 28C72 18 80 12 88 15C88 25 75 28 75 28Z" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.2" />
  </svg>
);

// Vintage Postal Stamp Seal Badge (from image 1)
export const PostalStampSeal = ({ className = "w-28 h-28" }) => (
  <div className={`relative flex items-center justify-center select-none ${className}`}>
    <svg viewBox="0 0 120 120" className="w-full h-full text-[#C5A880]/80">
      <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="60" cy="60" r="48" stroke="currentColor" strokeWidth="1" />
      <circle cx="60" cy="60" r="32" stroke="currentColor" strokeWidth="1" />
      {/* Curved text path */}
      <path
        id="stampPathTop"
        d="M 24,60 A 36,36 0 0,1 96,60"
        fill="none"
      />
      <path
        id="stampPathBottom"
        d="M 96,60 A 36,36 0 0,1 24,60"
        fill="none"
      />
      <text className="text-[7.5px] font-sans uppercase tracking-[0.25em] fill-[#A67C52] font-semibold">
        <textPath href="#stampPathTop" startOffset="50%" textAnchor="middle">
          WILD LIGHT EXPEDITION
        </textPath>
      </text>
      <text className="text-[6.5px] font-sans uppercase tracking-[0.2em] fill-[#A67C52]">
        <textPath href="#stampPathBottom" startOffset="50%" textAnchor="middle">
          STORYTELLER • EST. 2016
        </textPath>
      </text>
      {/* Center icon */}
      <path d="M60 48L64 56L72 60L64 64L60 72L56 64L48 60L56 56Z" fill="#C5A880" />
      <circle cx="60" cy="60" r="2.5" fill="#1B261D" />
    </svg>
  </div>
);

// Compass Rose Watermark (from image 1 stats bar)
export const CompassRoseWatermark = ({ 
  className = "w-32 h-32",
  color = "#C5A880"
}) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="44" stroke={color} strokeWidth="0.8" strokeDasharray="2 3" opacity="0.6" />
    <circle cx="50" cy="50" r="40" stroke={color} strokeWidth="0.8" opacity="0.4" />
    <circle cx="50" cy="50" r="32" stroke={color} strokeWidth="0.5" opacity="0.3" />
    {/* North South East West Points */}
    <path d="M50 12L54 44L50 50L46 44Z" fill={color} opacity="0.75" />
    <path d="M50 88L54 56L50 50L46 56Z" fill={color} opacity="0.4" />
    <path d="M88 50L56 54L50 50L56 46Z" fill={color} opacity="0.4" />
    <path d="M12 50L44 54L50 50L44 46Z" fill={color} opacity="0.4" />
    {/* Diagonal rays */}
    <path d="M74 26L53 47L50 50L47 53L26 74" stroke={color} strokeWidth="0.6" opacity="0.4" />
    <path d="M26 26L47 47L50 50L53 53L74 74" stroke={color} strokeWidth="0.6" opacity="0.4" />
    <text x="50" y="9" textAnchor="middle" fill={color} fontSize="6" fontFamily="serif" fontWeight="bold">N</text>
    <text x="50" y="97" textAnchor="middle" fill={color} fontSize="6" fontFamily="serif">S</text>
    <text x="96" y="52" textAnchor="middle" fill={color} fontSize="6" fontFamily="serif">E</text>
    <text x="4" y="52" textAnchor="middle" fill={color} fontSize="6" fontFamily="serif">W</text>
  </svg>
);

// Torn Paper Top Transition (SVG torn edge divider)
export const TornPaperDivider = ({ position = 'top', fillColor = '#FAF7F2', className = '' }) => (
  <div className={`w-full overflow-hidden leading-none z-10 select-none pointer-events-none ${className}`}>
    <svg 
      className={`w-full h-8 md:h-12 block ${position === 'bottom' ? 'rotate-180' : ''}`} 
      viewBox="0 0 1200 40" 
      preserveAspectRatio="none" 
      fill={fillColor}
    >
      <path d="M0,0 L0,25 Q30,12 60,26 T120,20 T180,29 T240,15 T300,28 T360,18 T420,27 T480,16 T540,29 T600,19 T660,28 T720,15 T780,27 T840,17 T900,28 T960,16 T1020,26 T1080,18 T1140,28 T1200,20 L1200,0 Z" />
      <path d="M0,25 Q40,18 80,30 T160,16 T240,28 T320,15 T400,29 T480,18 T560,27 T640,17 T720,28 T800,16 T880,29 T960,19 T1040,28 T1120,16 T1200,26 L1200,40 L0,40 Z" fill={fillColor} opacity="0.4" />
    </svg>
  </div>
);

// Realistic Dark Forest Torn Paper Divider
export const DarkForestTornDivider = ({ position = 'top', fillColor = '#1B261D', className = '' }) => (
  <div className={`w-full overflow-hidden leading-none z-10 select-none pointer-events-none ${className}`}>
    <svg 
      className={`w-full h-8 md:h-12 block ${position === 'bottom' ? 'rotate-180' : ''}`} 
      viewBox="0 0 1200 40" 
      preserveAspectRatio="none" 
      fill={fillColor}
    >
      <path d="M0,0 L0,22 Q35,10 70,25 T140,18 T210,30 T280,14 T350,26 T420,16 T490,28 T560,15 T630,29 T700,17 T770,27 T840,14 T910,28 T980,16 T1050,27 T1120,15 T1200,24 L1200,0 Z" />
      <path d="M0,22 Q45,15 90,28 T180,15 T270,29 T360,14 T450,27 T540,16 T630,28 T720,15 T810,29 T900,17 T990,28 T1080,15 T1200,24 L1200,40 L0,40 Z" fill={fillColor} opacity="0.3" />
    </svg>
  </div>
);

// Scrapbook Adhesive Tape / Washi Tape
export const WashiTape = ({ 
  className = "w-24 h-6", 
  tilt = "-rotate-3" 
}) => (
  <div 
    className={`absolute z-20 pointer-events-none bg-[#E8D8C3]/80 backdrop-blur-xs border-y border-[#D6C4AD]/60 shadow-xs ${tilt} ${className}`}
    style={{
      clipPath: 'polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%)'
    }}
  />
);
