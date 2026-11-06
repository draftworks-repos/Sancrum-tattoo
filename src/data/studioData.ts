export interface Artist {
  id: string;
  name: string;
  title: string;
  bio: string;
  experience: string;
  avatarUrl: string;
  portfolio: string[];
  instagram: string;
  status: 'Accepting Bookings' | 'Waitlist Only' | 'Guest Spot';
  nextAvailable: string;
}

export interface TattooStyle {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  secondaryImageUrl: string;
  needleTechnique: string;
  avgSessions: string;
  healingTime: string;
  featuredArtists: string[];
}

export interface Review {
  id: string;
  clientName: string;
  piece: string;
  artist: string;
  rating: number;
  date: string;
  quote: string;
  avatar: string;
}

export const ARTISTS: Artist[] = [
  {
    id: 'mateo-cruz',
    name: 'Mateo Cruz',
    title: 'Founder & Master Realist',
    bio: 'With 14 years behind the rotary machine, Mateo blends Renaissance chiaroscuro techniques with contemporary portraiture. Trained in fine arts in Florence before dedicating his life to permanent skin craft.',
    experience: '14+ Years',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    portfolio: [
      'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=900&q=80'
    ],
    instagram: '@mateocruz.ink',
    status: 'Accepting Bookings',
    nextAvailable: 'Late November'
  },
  {
    id: 'elena-vance',
    name: 'Elena Vance',
    title: 'Senior Resident Artist',
    bio: 'Elena pioneered single-needle architectural botanical compositions in Berlin before joining Sanctum. Her work honors the natural grain and contours of the human musculoskeletal anatomy.',
    experience: '9 Years',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    portfolio: [
      'https://images.unsplash.com/photo-1542382257-80dedb725088?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1560707303-4e980ce876ad?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1590246814883-578336f6ee61?auto=format&fit=crop&w=900&q=80'
    ],
    instagram: '@elenavance_needle',
    status: 'Accepting Bookings',
    nextAvailable: 'Next Week'
  },
  {
    id: 'kenji-sato',
    name: 'Kenji Sato',
    title: 'Horimono Specialist',
    bio: 'Kenji spent seven years apprenticing under master horishi in Yokohama. He brings authentic wabori balance to large-scale body suits, dragons, waves, and botanical wind bars.',
    experience: '12 Years',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    portfolio: [
      'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=900&q=80'
    ],
    instagram: '@kenji.hori.sanctum',
    status: 'Waitlist Only',
    nextAvailable: 'January 2027'
  },
  {
    id: 'maya-lin',
    name: 'Maya Lin',
    title: 'Resident Illustrator',
    bio: 'Celebrated for vivid line weights, rich earth pigments, and transforming historical scar tissue or outdated tattoos into cohesive organic masterpieces.',
    experience: '8 Years',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    portfolio: [
      'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1542382257-80dedb725088?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=900&q=80'
    ],
    instagram: '@mayalin.sanctum',
    status: 'Accepting Bookings',
    nextAvailable: 'Mid December'
  }
];

export const TATTOO_STYLES: TattooStyle[] = [
  {
    id: 'black-and-grey',
    name: 'Black & Grey',
    description: 'Executed with custom-diluted greywash inks across multiple needle groupings, capturing sculptural light, shadow, and soft transitions that mature gracefully with age.',
    imageUrl: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=900&q=80',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=900&q=80',
    needleTechnique: '3RL to 7RL Liners & 15 Curved Magnums',
    avgSessions: '1–4 Sessions',
    healingTime: '2 to 3 weeks',
    featuredArtists: ['Mateo Cruz', 'Elena Vance']
  },
  {
    id: 'realism',
    name: 'Realism',
    description: 'Translating photographic clarity, stone carvings, wildlife, and classical Renaissance art onto human canvas with microscopic precision and deep contrast.',
    imageUrl: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=900&q=80',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=900&q=80',
    needleTechnique: 'Bugpin 08 Tight Liners & Micro Shaders',
    avgSessions: '2–6 Sessions',
    healingTime: '3 to 4 weeks',
    featuredArtists: ['Mateo Cruz']
  },
  {
    id: 'fine-line',
    name: 'Fine Line',
    description: 'Utilizing single-needle (1RL) and micro-grouping techniques to create featherweight contours, anatomical diagrams, and delicate floral stems that feel effortlessly etched.',
    imageUrl: 'https://images.unsplash.com/photo-1542382257-80dedb725088?auto=format&fit=crop&w=900&q=80',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?auto=format&fit=crop&w=900&q=80',
    needleTechnique: 'Single Needle 1RL / 0.25mm cartridges',
    avgSessions: '1 Session',
    healingTime: '10 to 14 days',
    featuredArtists: ['Elena Vance']
  },
  {
    id: 'blackwork',
    name: 'Blackwork',
    description: 'High-density solid carbon pigment meets sacred geometry, dotwork stippling, and occult engravings. Created for collectors seeking bold visual resonance.',
    imageUrl: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=900&q=80',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1590246814883-578336f6ee61?auto=format&fit=crop&w=900&q=80',
    needleTechnique: 'Round Shaders & Heavy 25+ Magnum Blocks',
    avgSessions: '1–3 Sessions',
    healingTime: '2 to 3 weeks',
    featuredArtists: ['Kenji Sato', 'Maya Lin']
  },
  {
    id: 'neo-traditional',
    name: 'Neo Traditional',
    description: 'Evolving classical sailor motifs into opulent visual narratives featuring bold outlines, varied line weights, decadent animalia, and earthy color palettes.',
    imageUrl: 'https://images.unsplash.com/photo-1590246814883-578336f6ee61?auto=format&fit=crop&w=900&q=80',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=900&q=80',
    needleTechnique: 'Traditional 9RL Liners & Flat Weave Shaders',
    avgSessions: '1–2 Sessions',
    healingTime: '2 to 3 weeks',
    featuredArtists: ['Maya Lin']
  },
  {
    id: 'japanese',
    name: 'Japanese (Irezumi)',
    description: 'Traditional wabori compositions featuring Ryu dragons, Koi, chrysanthemum botanicals, and deep windbars designed specifically to complement the muscle lines.',
    imageUrl: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=900&q=80',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=900&q=80',
    needleTechnique: 'Custom Tebori-style tapered groupings',
    avgSessions: '3–8 Sessions',
    healingTime: '3 to 5 weeks',
    featuredArtists: ['Kenji Sato']
  },
  {
    id: 'custom',
    name: 'Custom Bespoke',
    description: 'A collaborative design residency where your personal symbolism, architecture, or conceptual ideas are translated into a one-of-a-kind wearable art piece.',
    imageUrl: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?auto=format&fit=crop&w=900&q=80',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=900&q=80',
    needleTechnique: 'Multi-disciplinary tailored setup',
    avgSessions: 'Tailored to piece',
    healingTime: '2 to 3 weeks',
    featuredArtists: ['Mateo Cruz', 'Elena Vance', 'Maya Lin']
  },
  {
    id: 'cover-up',
    name: 'Cover-Up & Rework',
    description: 'Technical mastery of optical redirection, tone saturation, and organic composition to cover unwanted work or restore aging designs without laser trauma.',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=900&q=80',
    needleTechnique: 'Dense pigment placement & gradient blending',
    avgSessions: '2–4 Sessions',
    healingTime: '3 weeks',
    featuredArtists: ['Maya Lin', 'Mateo Cruz']
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'g-1',
    title: 'Apollonian Marble',
    style: 'Realism',
    artist: 'Mateo Cruz',
    placement: 'Outer Bicep',
    imageUrl: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1000&q=80',
    description: 'Sculptural drapery and marble bust lighting using five graduated charcoal greywashes.',
    healingTime: 'Healed 6 months'
  },
  {
    id: 'g-2',
    title: 'Wild Botanical',
    style: 'Fine Line',
    artist: 'Elena Vance',
    placement: 'Clavicle & Shoulder',
    imageUrl: 'https://images.unsplash.com/photo-1542382257-80dedb725088?auto=format&fit=crop&w=1000&q=80',
    description: 'Micro single-needle olive branch and wild meadow florals following the natural skeletal collar line.',
    healingTime: 'Healed 3 months'
  },
  {
    id: 'g-3',
    title: 'Ouroboros Serpent',
    style: 'Blackwork',
    artist: 'Kenji Sato',
    placement: 'Forearm Inner',
    imageUrl: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=1000&q=80',
    description: 'Dense carbon black scale geometry with stippled shading and high negative-space contrast.',
    healingTime: 'Healed 1 year'
  },
  {
    id: 'g-4',
    title: 'The Alchemist',
    style: 'Neo Traditional',
    artist: 'Maya Lin',
    placement: 'Thigh',
    imageUrl: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=1000&q=80',
    description: 'Rich earth ochre pigments, deep obsidian feather textures, and geometric solar halo.',
    healingTime: 'Healed 4 months'
  },
  {
    id: 'g-5',
    title: 'Ascending Ryu',
    style: 'Japanese',
    artist: 'Kenji Sato',
    placement: 'Full Sleeve',
    imageUrl: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=1000&q=80',
    description: 'Traditional wabori flow with heavy black windbars framing luminous dragon crests.',
    healingTime: 'Healed 8 months'
  },
  {
    id: 'g-6',
    title: 'Cerebral Constellation',
    style: 'Custom',
    artist: 'Elena Vance',
    placement: 'Spine',
    imageUrl: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?auto=format&fit=crop&w=1000&q=80',
    description: 'Custom astronomical coordinates rendered in microscopic dotwork descending the vertebrae.',
    healingTime: 'Healed 2 months'
  },
  {
    id: 'g-7',
    title: 'Phantoms',
    style: 'Black & Grey',
    artist: 'Mateo Cruz',
    placement: 'Forearm',
    imageUrl: 'https://images.unsplash.com/photo-1590246814883-578336f6ee61?auto=format&fit=crop&w=1000&q=80',
    description: 'Classical bust portrait with architectural column perspective and atmospheric fog wash.',
    healingTime: 'Healed 5 months'
  },
  {
    id: 'g-8',
    title: 'Phoenix Rebirth',
    style: 'Cover-Up',
    artist: 'Maya Lin',
    placement: 'Upper Shoulder',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80',
    description: 'Complete transformation of a faded decade-old graphic into an evocative fiery plumaged phoenix.',
    healingTime: 'Healed 6 months'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r-1',
    clientName: 'Julian Mercer',
    piece: 'Architectural Sleeve (Black & Grey)',
    artist: 'Mateo Cruz',
    rating: 5,
    date: 'October 2026',
    quote: 'Mateo is not just a tattoo artist; he has the mind of a classical sculptor. The calm atmosphere of the studio and the depth in the ink work exceeded every expectation.',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'r-2',
    clientName: 'Sophia Laurent',
    piece: 'Botanical Spine Etching (Fine Line)',
    artist: 'Elena Vance',
    rating: 5,
    date: 'September 2026',
    quote: 'Elena made my first large piece feel so tranquil and sacred. The single-needle linework is so precise it looks like an archival botanical illustration pressed directly into skin.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'r-3',
    clientName: 'Daisuke Takahashi',
    piece: 'Torso Wave & Ryu (Japanese)',
    artist: 'Kenji Sato',
    rating: 5,
    date: 'August 2026',
    quote: 'Kenji studied genuine horimono craft and it shows in every stroke. His respect for human anatomy and movement makes the piece come alive when you move.',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'r-4',
    clientName: 'Clara Moreau',
    piece: 'Cover-up & Floral Transformation',
    artist: 'Maya Lin',
    rating: 5,
    date: 'November 2026',
    quote: 'Maya transformed an old regret into my favorite part of myself. Her color palette and spatial eye completely erased the old ink without heavy blotches.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
  }
];

export const STUDIO_INFO = {
  name: 'SANCTUM',
  address: '482 Howard Street, SOMA Arts District',
  city: 'San Francisco, CA 94105',
  phone: '+01 89596 90529',
  email: 'hello@draftworks.in',
  hours: [
    { days: 'Tuesday – Saturday', time: '11:00 AM – 8:00 PM' },
    { days: 'Sunday', time: '12:00 PM – 6:00 PM' },
    { days: 'Monday', time: 'Private Sessions & Consultations by Appointment' }
  ],
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086438991206!2d-122.39958782357777!3d37.7880295112443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807cbb377bcf%3A0x8978ce2ba14a2fc1!2s482%20Howard%20St%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1714000000000!5m2!1sen!2sus'
};

export const FAQS = [
  {
    q: 'How does your consultation and booking process work?',
    a: 'Every custom piece begins with a one-on-one consultation (in-studio or virtual) where we review your placement, aesthetic vision, reference material, and anatomy. Once accepted, we secure your session with a deposit and begin crafting your custom stencil.'
  },
  {
    q: 'What are your hygiene and sterilization protocols?',
    a: 'We adhere to medical-grade hygiene standards. We utilize hospital-grade Class B vacuum autoclaves, 100% single-use EO gas-sterilized needle cartridges, vegan non-toxic carbon pigments, and surface barriers replaced between every client.'
  },
  {
    q: 'How do you price tattoos at SANCTUM?',
    a: 'Smaller and medium single-session pieces are quoted at a flat rate based on complexity, placement, and time. Large-scale multi-session pieces (sleeves, back pieces) are billed at an hourly rate ranging from $180 to $220/hour depending on artist seniority.'
  },
  {
    q: 'Can I request a cover-up for an existing tattoo or scar?',
    a: 'Yes, our resident cover-up specialist Maya Lin and master realist Mateo Cruz frequently rework older tattoos and surgical scars. We evaluate the contrast, tone, and skin texture in person to propose a piece that permanently and beautifully conceals the old ink.'
  },
  {
    q: 'What is the recommended aftercare routine?',
    a: 'We provide premium medical-grade second skin barrier film applied immediately after your session for the initial 3–5 days, followed by our custom botanical aftercare salve and detailed step-by-step healing guide.'
  }
];
