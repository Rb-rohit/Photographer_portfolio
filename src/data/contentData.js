import { img } from "../assets/img";



export const portfolioItems = [
  // Indian Wedding Photography
  {
    id: 'royal-jaipur-palace-wedding',
    title: 'Royal Heritage Vows at City Palace',
    category: 'wedding',
    imageUrl: img.couple1,
    location: 'City Palace, Jaipur',
    description: 'A regal Indian bridal portrait in hand-embroidered crimson zardozi lehenga and heirloom polki kundan jewels.',
    cameraInfo: {
      camera: 'Sony Alpha 7R V',
      lens: 'FE 85mm f/1.4 GM',
      focalLength: '85mm',
      iso: '100',
      shutter: '1/1600s',
      aperture: 'f/1.4'
    },
    likes: 1240,
    featured: true
  },
  {
    id: 'udaipur-lake-palace-mandap',
    title: 'Sacred Pheras on Lake Pichola',
    category: 'wedding',
    imageUrl: img.couple2,
    location: 'Taj Lake Palace, Udaipur',
    description: 'An ethereal floating mandap framed by marigold garlands, sacred havan fire, and sunset reflections over Lake Pichola.',
    cameraInfo: {
      camera: 'Canon EOS R5',
      lens: 'RF 50mm f/1.2 L USM',
      focalLength: '50mm',
      iso: '125',
      shutter: '1/1250s',
      aperture: 'f/1.2'
    },
    likes: 1085,
    featured: true
  },
  {
    id: 'jodhpur-royal-varmala',
    title: 'The Royal Varmala & Rose Petal Shower',
    category: 'wedding',
    imageUrl: img.wedding0,
    location: 'Umaid Bhawan Palace, Jodhpur',
    description: 'Emotional varmala garland exchange amidst cascades of fresh red rose petals under majestic sandstone arches.',
    cameraInfo: {
      camera: 'Sony Alpha 1',
      lens: 'FE 24-70mm f/2.8 GM II',
      focalLength: '35mm',
      iso: '200',
      shutter: '1/2000s',
      aperture: 'f/2.8'
    },
    likes: 950,
    featured: true
  },
  {
    id: 'mehndi-solah-shringar',
    title: 'Mehndi Art & Crimson Dupatta',
    category: 'wedding',
    imageUrl: img.wedding1,
    location: 'Rambagh Palace, Jaipur',
    description: 'Intricate bridal henna storytelling, matha patti details, and tender moments with the bridal party.',
    cameraInfo: {
      camera: 'Fujifilm GFX 100 II',
      lens: 'GF 110mm f/2 R LM WR',
      focalLength: '110mm',
      iso: '160',
      shutter: '1/800s',
      aperture: 'f/2.0'
    },
    likes: 875,
    featured: false
  },

  // Event & Gala Photography
  {
    id: 'royal-sangeet-musical-night',
    title: 'Grand Sangeet & Royal Courtyard Gala',
    category: 'event',
    imageUrl: img.wedding2,
    location: 'Neemrana Fort-Palace, Rajasthan',
    description: 'A magical night of live sufi music, traditional folk dances, fairy-lit courtyards, and joyful family celebrations.',
    cameraInfo: {
      camera: 'Sony Alpha 7 IV',
      lens: 'FE 24-70mm f/2.8 GM II',
      focalLength: '28mm',
      iso: '1600',
      shutter: '1/200s',
      aperture: 'f/2.8'
    },
    likes: 780,
    featured: true
  },
  {
    id: 'baraat-dhol-procession',
    title: 'Baraat Grandeur & Dhol Rhythms',
    category: 'event',
    imageUrl: img.wedding3,
    location: 'Samode Palace, Rajasthan',
    description: 'High-octane royal groom procession with vintage car cavalcade, live brass band, and celebratory sparklers.',
    cameraInfo: {
      camera: 'Sony Alpha 7R V',
      lens: 'FE 35mm f/1.4 GM',
      focalLength: '35mm',
      iso: '800',
      shutter: '1/500s',
      aperture: 'f/1.8'
    },
    likes: 815,
    featured: true
  },
  {
    id: 'haldi-marigold-celebration',
    title: 'Golden Haldi & Phoolon Ki Holi',
    category: 'event',
    imageUrl: img.wedding4,
    location: 'Alsisar Mahal, Shekhawati',
    description: 'Joyous turmeric blessing rituals surrounded by golden marigolds, yellow silk drapes, and laughter.',
    cameraInfo: {
      camera: 'Canon EOS R5',
      lens: 'RF 85mm f/1.2 L USM',
      focalLength: '85mm',
      iso: '200',
      shutter: '1/1000s',
      aperture: 'f/1.6'
    },
    likes: 690,
    featured: false
  },

  // Travel Photography
  {
    id: 'santorini-sunset',
    title: 'Oia Cliffside Serenade',
    category: 'travel',
    imageUrl: img.wedding5,
    location: 'Santorini, Greece',
    description: 'Golden hour illuminating whitewashed caldera domes against the sapphire Aegean Sea.',
    cameraInfo: {
      camera: 'Leica Q3',
      lens: 'Summilux 28mm f/1.7 ASPH',
      focalLength: '28mm',
      iso: '125',
      shutter: '1/500s',
      aperture: 'f/5.6'
    },
    likes: 612,
    featured: true
  },
  {
    id: 'moroccan-riad',
    title: 'Morning Sun in the Medina',
    category: 'travel',
    imageUrl: img.wedding6,
    location: 'Marrakech, Morocco',
    description: 'Geometric terracotta tilework and morning sunshine filtering through fragrant orange blossoms.',
    cameraInfo: {
      camera: 'Fujifilm GFX 100 II',
      lens: 'GF 45mm f/2.8 R WR',
      focalLength: '45mm',
      iso: '160',
      shutter: '1/320s',
      aperture: 'f/4.0'
    },
    likes: 430,
    featured: false
  },

  // Lifestyle & Editorial
  {
    id: 'meadow-muse',
    title: 'Golden Meadow Whispers',
    category: 'lifestyle',
    imageUrl: img.wedding7,
    location: 'Cotswolds, England',
    description: 'An intimate editorial portrait capturing spontaneous warmth in wild chamomile meadows.',
    cameraInfo: {
      camera: 'Canon EOS R5',
      lens: 'RF 85mm f/1.2 L USM',
      focalLength: '85mm',
      iso: '160',
      shutter: '1/1250s',
      aperture: 'f/1.4'
    },
    likes: 718,
    featured: true
  },
  {
    id: 'coastal-morning-coffee',
    title: 'Quiet Reflections by the Coast',
    category: 'lifestyle',
    imageUrl: img.wedding8,
    location: 'Big Sur, California',
    description: 'Natural ambient portraits emphasizing authentic emotion, slow mornings, and timeless grace.',
    cameraInfo: {
      camera: 'Sony Alpha 7R V',
      lens: 'FE 50mm f/1.2 GM',
      focalLength: '50mm',
      iso: '100',
      shutter: '1/800s',
      aperture: 'f/1.8'
    },
    likes: 540,
    featured: false
  },

  // Adventure Photography
  {
    id: 'alpine-boat',
    title: 'Reflections of Lake Braies',
    category: 'adventure',
    imageUrl: img.wedding9,
    location: 'Dolomites, Italy',
    description: 'Gliding across glassy emerald waters beneath the towering limestone peaks of the Italian Alps.',
    cameraInfo: {
      camera: 'Hasselblad X2D 100C',
      lens: 'XCD 38mm f/2.5 V',
      focalLength: '38mm',
      iso: '64',
      shutter: '1/160s',
      aperture: 'f/4.0'
    },
    likes: 524,
    featured: true
  },
  {
    id: 'patagonia-peaks',
    title: 'Torres del Paine Storm Light',
    category: 'adventure',
    imageUrl: img.wedding10,
    location: 'Patagonia, Chile',
    description: 'Glacial granite needles breaking through storm clouds at the edge of the southern continent.',
    cameraInfo: {
      camera: 'Sony Alpha 1',
      lens: 'FE 70-200mm f/2.8 GM OSS II',
      focalLength: '135mm',
      iso: '250',
      shutter: '1/640s',
      aperture: 'f/6.3'
    },
    likes: 395,
    featured: false
  }
];

export const servicesData = [
  {
    id: 'indian-wedding-photography',
    title: 'Royal Indian & Destination Weddings',
    shortDesc: 'Artistic, cinematic coverage for multi-day Indian weddings, royal palace celebrations, Haldi, Mehndi, Sangeet & Pheras.',
    fullDesc: 'We document the vibrant splendor, deep emotional rituals, and timeless grandeur of Indian weddings worldwide. From intimate Haldi and Sangeet celebrations to regal Varmala moments in heritage palaces (Jaipur, Udaipur, Goa, Italy), our team crafts heirloom visual stories that honor your heritage with museum-grade artistic finesse.',
    icon: 'Heart',
    priceStarting: '₹4,500',
    duration: '2 to 4 Days (Multi-Function)',
    deliverables: [
      'Comprehensive high-resolution gallery (900+ signature retouched images)',
      'Multi-day coverage: Haldi, Mehndi, Sangeet, Baraat & Royal Pheras',
      'Handcrafted Italian heirloom velvet bridal photo album',
      'Express 48-hour wedding teaser gallery & 4K cinematic trailer'
    ],
    sampleImage: img.wedding11
  },
  {
    id: 'event-gala-photography',
    title: 'Event & Gala Photography',
    shortDesc: 'High-energy, refined documentation for royal sangeets, black-tie galas, private soirees, and brand summits.',
    fullDesc: 'Capturing the prestige, ambiance, VIP guests, and spontaneous joy of high-profile events. We work discreetly with prime natural and ambient lighting to ensure every toast, performance, and celebration is immortalized with elegance.',
    icon: 'Sparkles',
    priceStarting: '₹2,200',
    duration: '4 to 8 Hours',
    deliverables: [
      'Same-night social media press selection (30 curated highlight shots)',
      'Complete high-res event story archive with commercial usage rights',
      'Dual photographer coverage available for large-scale banquets and summits',
      'Branded digital download portal for guest distribution'
    ],
    sampleImage: img.wedding12
  },
  {
    id: 'travel-photography',
    title: 'Travel & Destination Expeditions',
    shortDesc: 'Documenting breathtaking destinations, luxury hospitality retreats, cultural heritage, and raw landscapes.',
    fullDesc: 'Editorial assignments for tourism boards, boutique retreats, luxury travel publications, and private expeditions. We weave place, light, and culture into cohesive visual narratives that transport viewers.',
    icon: 'Camera',
    priceStarting: '₹2,800',
    duration: 'Multi-day Assignment',
    deliverables: [
      'Comprehensive curated image library (150+ master color-graded files)',
      'Full commercial licensing for web, billboard, print, and global press',
      '4K 60fps drone aerial cinematography and b-roll clips',
      'Custom color-graded preset pack tailored to the destination'
    ],
    sampleImage: img.wedding1
  },
  {
    id: 'lifestyle-editorial',
    title: 'Lifestyle & Editorial Portraits',
    shortDesc: 'Authentic portraits, royal fashion editorials, and brand stories centered on genuine personality and natural light.',
    fullDesc: 'Unposed, deeply evocative portraiture for artists, founders, couples, and creative fashion brands. We focus on natural body language, subtle emotions, and golden atmospheric lighting.',
    icon: 'Palmtree',
    priceStarting: '₹1,450',
    duration: 'Half-Day / Full-Day',
    deliverables: [
      '60+ masterfully retouched editorial files in full resolution',
      'Private online proofing gallery with 1-click cloud downloads',
      'Creative moodboard, wardrobe styling, and location scouting guide',
      'Fine art mini print keepsake set'
    ],
    sampleImage: img.wedding2
  },
  {
    id: 'adventure-photography',
    title: 'Adventure & Wilderness',
    shortDesc: 'From alpine summit treks to desert dune crossings, freezing the unrelenting spirit of wild exploration.',
    fullDesc: 'Specialized rugged expedition documentation in challenging mountain, sea, and backcountry environments. Equipped with weatherproof medium-format gear for extreme shoots.',
    icon: 'Mountain',
    priceStarting: '₹3,200',
    duration: 'Custom Expedition',
    deliverables: [
      'Rugged field backups and same-week satellite photo dispatches',
      '100MP medium format high-definition landscape & portrait master files',
      'Behind-the-scenes documentary essay & action sequences',
      'Large-format exhibition prints ready for gallery framing'
    ],
    sampleImage: img.wedding3
  },
  {
    id: 'prints-workshops',
    title: 'Fine Art Prints & Workshops',
    shortDesc: 'Museum-grade Hahnemühle archival prints and intimate masterclasses on natural light, wedding craft, and composition.',
    fullDesc: 'Collector-edition cotton rag prints signed and numbered, plus boutique small-group masterclasses in Europe and Asia focusing on visual storytelling, destination wedding cinematography, and post-processing.',
    icon: 'Image',
    priceStarting: '₹450 / ₹1,900',
    duration: 'Print Edition / 3-Day Workshop',
    deliverables: [
      'Hahnemühle Photo Rag Baryta 315gsm archival paper with Certificate of Authenticity',
      '1-on-1 portfolio review & Lightroom/Photoshop post-processing masterclass',
      'Field guide to golden hour exposure & composition techniques',
      'Lifetime access to private alumni storytelling forum'
    ],
    sampleImage: img.wedding4
  }
];

export const metricsData = [
  {
    id: 'countries',
    value: 45,
    suffix: '+',
    label: 'Countries Visited',
    iconName: 'Globe'
  },
  {
    id: 'weddings-events',
    value: 320,
    suffix: '+',
    label: 'Weddings & Royal Events',
    iconName: 'Heart'
  },
  {
    id: 'projects',
    value: 650,
    suffix: '+',
    label: 'Stories & Campaigns',
    iconName: 'Camera'
  },
  {
    id: 'awards',
    value: 40,
    suffix: '+',
    label: 'International Honors',
    iconName: 'Trophy'
  }
];

export const testimonialsData = [
  {
    id: 'ananya-rohit',
    name: 'Ananya & Rohit Singhania',
    role: 'Udaipur Royal Wedding Couple',
    location: 'Mumbai & Udaipur',
    avatar: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=300&q=80',
    quote: 'Alex and his team captured our 3-day wedding at Taj Lake Palace Udaipur with unbelievable emotion and artistic vision. From the high-energy Sangeet to our sunset pheras, every frame looks like a royal cinematic painting. We cried looking at our album!',
    rating: 5,
    featuredStory: 'Udaipur Palace Destination Wedding',
    shootType: 'Royal Indian Wedding'
  },
  {
    id: 'priya-vikram',
    name: 'Priya & Vikram Malhotra',
    role: 'Jaipur Heritage Celebration',
    location: 'Delhi & Jaipur',
    avatar: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=300&q=80',
    quote: 'Every single ceremony—from the vibrant Haldi flower shower to the emotional Bidaai—was captured so unobtrusively and beautifully. Alex knows exactly how to work with natural light and vibrant Indian colors.',
    rating: 5,
    featuredStory: 'Rambagh Palace Heritage Union',
    shootType: 'Wedding & Sangeet'
  },
  {
    id: 'clara-v',
    name: 'Clara Van Der Berg',
    role: 'Event Chair, Monaco Philanthropic Gala',
    location: 'Monte Carlo, Monaco',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    quote: 'Covering a high-profile gala with 400 VIP guests requires immense discretion and perfection. Alex captured electric candids and royal elegance seamlessly. Our guests are still raving about the photos.',
    rating: 5,
    featuredStory: 'Riviera Annual Charity Soirée',
    shootType: 'Event & Gala'
  },
  {
    id: 'james-t',
    name: 'James Thornton',
    role: 'Founder, Wilderness Expeditions',
    location: 'Vancouver, Canada',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    quote: 'Professional, passionate, and so easy to work with in rugged terrain. Alex went above and beyond to capture the true soul of our expedition. Highly recommended!',
    rating: 5,
    featuredStory: 'Patagonia Backcountry Trek',
    shootType: 'Adventure'
  }
];

export const instagramPosts = [
  {
    id: 'ig-1',
    imageUrl: img.wedding8,
    likes: 3840,
    comments: 240,
    caption: 'Jaipur royal bridal elegance. Zardozi red and timeless grace under palace arches.',
    location: 'City Palace, Jaipur'
  },
  {
    id: 'ig-2',
    imageUrl: img.couple1,
    likes: 4210,
    comments: 312,
    caption: 'Sunset pheras overlooking Lake Pichola. Pure poetry in golden light.',
    location: 'Taj Lake Palace, Udaipur'
  },
  {
    id: 'ig-3',
    imageUrl: img.wedding9,
    likes: 2890,
    comments: 184,
    caption: 'Sangeet courtyards aglow under the star-studded Rajasthan skies.',
    location: 'Neemrana Fort, India'
  },
  {
    id: 'ig-4',
    imageUrl: img.wedding10,
    likes: 3120,
    comments: 142,
    caption: 'Aegean gold. Thankful for every horizon that teaches us patience.',
    location: 'Oia, Santorini'
  },
  {
    id: 'ig-5',
    imageUrl: img.wedding11,
    likes: 3200,
    comments: 210,
    caption: 'Morning silence at Lake Braies with nothing but the dip of wooden oars.',
    location: 'Dolomites, Italy'
  }
];
