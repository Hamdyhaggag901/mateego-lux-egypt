export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1200&q=80',
  pyramids: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1200&q=80',
  nile: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1200&q=80',
  desert: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=1200&q=80',
  temple: 'https://images.unsplash.com/photo-1562679299-9d7e5d5c4fc0?w=1200&q=80',
  family: 'https://images.unsplash.com/photo-1541300613939-71366a840d8a?w=1200&q=80',
  cairo: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=1200&q=80',
  luxor: 'https://images.unsplash.com/photo-1562679299-9d7e5d5c4fc0?w=1200&q=80',
  alex: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=1200&q=80',
  aswan: 'https://images.unsplash.com/photo-1585970480901-90d6bb2a48b5?w=1200&q=80',
  sinai: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80',
  redSea: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80',
};

export const NAV_LINKS = [
  { label: 'JOURNEYS', href: '/journeys' },
  { label: 'EXPERIENCES', href: '/experiences' },
  { label: 'INSPIRATION', href: '/inspiration' },
  { label: 'ABOUT EGYPT', href: '/about-egypt' },
  { label: 'ABOUT US', href: '/about' },
];

export const JOURNEYS = [
  { slug: 'classic-egypt-tour', title: 'Classic Egypt Tour', subtitle: 'Cairo, Luxor, Aswan', days: 10, price: 4950, image: IMAGES.pyramids, description: 'Experience the essential wonders of Egypt — from the Great Pyramids of Giza to the temples of Luxor and the beauty of Aswan. A comprehensive journey through 5,000 years of history.' },
  { slug: 'luxury-nile-cruise', title: 'Luxury Nile Cruise Package', subtitle: 'Aswan to Luxor', days: 8, price: 7300, image: IMAGES.nile, description: 'Sail the Nile on a luxury dahabiya or boutique river vessel, stopping at ancient temples and riverside villages unreachable by road.' },
  { slug: 'white-desert-adventure', title: 'White Desert Adventure', subtitle: 'Western Desert', days: 5, price: 3800, image: IMAGES.desert, description: 'Camp under the stars amid surreal chalk formations in Egypt\'s White Desert. An off-the-beaten-path adventure combining desert safari with oasis exploration.' },
  { slug: 'private-pyramids-experience', title: 'Private Pyramids Experience', subtitle: 'Cairo & Giza', days: 4, price: 2950, image: IMAGES.cairo, description: 'An exclusive, in-depth exploration of the Giza Plateau with a private Egyptologist, including sunrise access and behind-the-scenes visits.' },
  { slug: 'ancient-temples-journey', title: 'Ancient Temples Journey', subtitle: 'Luxor, Karnak, Abu Simbel', days: 7, price: 5200, image: IMAGES.temple, description: 'Trace the path of the pharaohs through Egypt\'s greatest temple complexes — Karnak, Luxor Temple, Hatshepsut, and the colossal Abu Simbel.' },
  { slug: 'red-sea-sinai-escape', title: 'Red Sea & Sinai Escape', subtitle: 'Sharm El Sheikh, Dahab, Mount Sinai', days: 6, price: 3500, image: IMAGES.redSea, description: 'Combine crystal-clear snorkeling in the Red Sea with desert treks, sunrise hikes on Mount Sinai, and relaxation at luxury coastal resorts.' },
];

export const DESTINATIONS = [
  { slug: 'cairo', name: 'Cairo & Giza', image: IMAGES.cairo, description: 'Home to the Great Pyramids and the vibrant Khan el-Khalili bazaar.' },
  { slug: 'luxor', name: 'Luxor & Karnak', image: IMAGES.luxor, description: 'The world\'s greatest open-air museum, with temples and royal tombs.' },
  { slug: 'aswan', name: 'Aswan & Abu Simbel', image: IMAGES.aswan, description: 'Nubian culture, felucca sailing, and the colossal temples of Ramses II.' },
  { slug: 'nile-cruises', name: 'Nile Cruises', image: IMAGES.nile, description: 'Drift between ancient temples on a luxury river cruise.' },
  { slug: 'siwa-oasis', name: 'Siwa Oasis', image: IMAGES.desert, description: 'A remote desert paradise with salt lakes and ancient oracle ruins.' },
  { slug: 'white-desert', name: 'White Desert', image: IMAGES.desert, description: 'Surreal chalk formations and star-filled nights in the Western Desert.' },
  { slug: 'alexandria', name: 'Alexandria', image: IMAGES.alex, description: 'Mediterranean charm, Greco-Roman ruins, and world-class seafood.' },
  { slug: 'sinai', name: 'Sinai', image: IMAGES.sinai, description: 'Mountain trails, coral reefs, and the ancient monastery of St. Catherine.' },
];

export const HOTELS = [
  { name: 'Mena House', location: 'Cairo', image: IMAGES.pyramids, description: 'Historic luxury hotel in the shadow of the Great Pyramids.' },
  { name: 'Old Cataract', location: 'Aswan', image: IMAGES.aswan, description: 'A legendary Nile-side palace where Agatha Christie penned her novels.' },
  { name: 'Al Moudira', location: 'Luxor', image: IMAGES.luxor, description: 'An opulent oasis on Luxor\'s West Bank, built with traditional craftsmanship.' },
  { name: 'Historia Nile Cruise', location: 'Nile River', image: IMAGES.nile, description: 'A boutique river vessel blending Art Deco style with modern comfort.' },
  { name: 'Dahabiya Lazuli', location: 'Nile River', image: IMAGES.nile, description: 'Intimate traditional sailing boat for the most authentic Nile experience.' },
  { name: 'St Regis', location: 'Cairo', image: IMAGES.cairo, description: 'Ultra-modern luxury overlooking the Nile with impeccable Butler Service.' },
];

export const TESTIMONIALS = [
  { quote: 'From the moment we landed in Cairo, every detail was flawlessly arranged. Our private Egyptologist brought the temples to life in ways we never imagined possible.', author: 'Margaret H.', location: 'New York', rating: 5 },
  { quote: 'The dahabiya cruise was the highlight of our honeymoon. Watching the sun set over the Nile from our private deck — there are no words. Mateego made it magical.', author: 'James & Sarah', location: 'California', rating: 5 },
  { quote: 'Traveling with three kids, we were nervous about Egypt. Mateego designed an itinerary that kept everyone engaged — even the teenagers put their phones away!', author: 'The Williams Family', location: 'Texas', rating: 5 },
];

export const ARTICLES = [
  { slug: 'best-time-to-visit-egypt', title: 'Best Time to Visit Egypt', image: IMAGES.pyramids },
  { slug: '19-top-hotels-in-egypt', title: '19 Top Hotels in Egypt', image: IMAGES.luxor },
  { slug: 'guide-to-nile-cruises', title: 'A Guide to Nile Cruises', image: IMAGES.nile },
  { slug: 'hidden-gems-of-luxor', title: 'Hidden Gems of Luxor', image: IMAGES.temple },
  { slug: 'first-timers-guide-to-egypt', title: "First-Timer's Guide to Egypt", image: IMAGES.cairo },
];

export const PRESS = ['AFAR', 'Bloomberg', 'HONG KONG TATLER', 'Robb Report', 'The Telegraph', 'TRAVEL+LEISURE', 'VOGUE'];

export const DESTINATION_SEO: Record<string, { metaTitle: string; metaDescription: string; h1: string; content: string[] }> = {
  cairo: {
    metaTitle: 'Cairo Tours & Giza Pyramids Trips | Private Egypt Travel | Mateego Explorers',
    metaDescription: 'Explore Cairo and the Giza Pyramids with private Egyptologist guides. Luxury Cairo tours, pyramid visits, Egyptian Museum trips, and Khan el-Khalili experiences.',
    h1: 'Cairo Tours & Giza Pyramids Trips',
    content: [
      'Cairo is the beating heart of Egypt — a sprawling metropolis where ancient wonders stand alongside vibrant modern life. Our private Cairo tours take you beyond the tourist trail to experience the real city, from the awe-inspiring Great Pyramids of Giza to the treasures of the Grand Egyptian Museum.',
      'With a private Egyptologist guide, you\'ll explore the Giza Plateau at your own pace, learning the secrets of the pyramids and the Sphinx without the crowds. Our exclusive sunrise and sunset access ensures you experience these 4,500-year-old monuments in the most magical light.',
      'Beyond the pyramids, Cairo offers a wealth of experiences — from the medieval streets of Islamic Cairo and the bustling Khan el-Khalili bazaar to the serene beauty of the Coptic Quarter. Our travel designers craft bespoke Cairo itineraries that balance iconic sightseeing with hidden local gems, luxury dining, and authentic cultural encounters.',
    ],
  },
  luxor: {
    metaTitle: 'Luxor Temple Tours & Karnak Temple Egypt | Private Guided Tours | Mateego',
    metaDescription: 'Discover Luxor and Karnak Temple with expert Egyptologist guides. Valley of the Kings, Hatshepsut Temple, hot air balloon rides, and luxury Luxor travel packages.',
    h1: 'Luxor Temple Tours & Karnak Temple Egypt',
    content: [
      'Luxor is often called the world\'s greatest open-air museum, and for good reason. Home to the Valley of the Kings, the temples of Karnak and Luxor, and the mortuary temple of Hatshepsut, this ancient city on the banks of the Nile is an unmissable highlight of any Egypt journey.',
      'Our private Luxor temple tours are led by expert Egyptologists who bring the ancient stones to life with stories of pharaohs, gods, and 3,000 years of history. Whether you\'re exploring the colossal columns of Karnak at dawn or descending into the painted tombs of the Valley of the Kings, every moment is designed to be unforgettable.',
      'For the ultimate Luxor experience, take a hot air balloon ride at sunrise over the West Bank, floating above the temples and the Nile in golden morning light. Our Luxor travel packages include luxury hotel stays at properties like the Al Moudira and the Sofitel Winter Palace, with private transfers and exclusive access throughout.',
    ],
  },
  aswan: {
    metaTitle: 'Aswan Travel & Abu Simbel Day Trip | Private Tours | Mateego Explorers',
    metaDescription: 'Plan your Aswan travel and Abu Simbel day trip with private guides. Felucca sailing, Nubian villages, Philae Temple, and luxury Aswan tour packages.',
    h1: 'Aswan Travel & Abu Simbel Day Trips',
    content: [
      'Aswan is Egypt at its most beautiful — a city of golden light, Nubian culture, and the timeless flow of the Nile. From here, you can visit the colossal temples of Abu Simbel, one of the most breathtaking sights in all of Egypt, carved into the mountainside by Ramses II over 3,000 years ago.',
      'Our private Abu Simbel day trips depart early to catch the temples at sunrise, when the first rays of light illuminate the inner sanctuary — an astronomical feat designed by ancient Egyptian architects. Whether you fly or drive, our expert guides ensure you understand every detail of these remarkable monuments.',
      'In Aswan itself, sail the Nile on a traditional felucca, visit the beautiful island temple of Philae, and explore colorful Nubian villages where hospitality is a way of life. Our Aswan travel packages include stays at the legendary Old Cataract Hotel, where Agatha Christie wrote "Death on the Nile."',
    ],
  },
  'nile-cruises': {
    metaTitle: 'Nile Cruise Packages | Egypt Nile River Tours | Luxury Cruises | Mateego',
    metaDescription: 'Book luxury Nile cruise packages from Aswan to Luxor. Private dahabiya sailing, boutique river vessels, temple stops, and all-inclusive Egypt Nile river tours.',
    h1: 'Nile Cruise Packages & Egypt River Tours',
    content: [
      'A Nile cruise is the quintessential Egyptian experience — drifting between ancient temples as the timeless landscape of palm trees, desert, and golden sandstone unfolds along the riverbanks. Our luxury Nile cruise packages offer the finest vessels on the river, from intimate traditional dahabiyas to elegant boutique ships.',
      'Our Egypt Nile river tours typically sail between Aswan and Luxor, stopping at temples rarely visited by larger cruise ships. Aboard a private dahabiya, you\'ll enjoy a pace of travel unchanged for centuries, with stops at Kom Ombo, Edfu, and hidden riverside villages accessible only by boat.',
      'Every Nile cruise package includes a private Egyptologist guide, gourmet dining featuring Egyptian and international cuisine, and spacious cabins with panoramic Nile views. Whether you choose a 4-night classic cruise or an extended 7-night journey, sailing the Nile is an experience that stays with you forever.',
    ],
  },
  'siwa-oasis': {
    metaTitle: 'Siwa Oasis Tours | Egypt Desert Experience | Private Safari | Mateego',
    metaDescription: 'Explore Siwa Oasis on private desert tours. Salt lakes, ancient Oracle Temple, sand dune adventures, and authentic Berber culture in Egypt\'s remote Western Desert.',
    h1: 'Siwa Oasis Tours & Egypt Desert Experience',
    content: [
      'Siwa Oasis is one of Egypt\'s most enchanting and remote destinations — a lush paradise surrounded by the vast Sahara Desert. Located near the Libyan border, this isolated oasis has preserved its unique Berber culture, ancient traditions, and stunning natural beauty for thousands of years.',
      'Our private Siwa Oasis tours take you to the ancient Temple of the Oracle, where Alexander the Great is said to have received divine confirmation of his destiny. You\'ll swim in the crystal-clear salt lakes of Bir Wahed, explore the medieval mud-brick fortress of Shali, and watch the sunset from the towering dunes of the Great Sand Sea.',
      'The Egypt desert experience in Siwa is unlike anywhere else — from camping under star-filled skies to soaking in natural hot springs. Our tours include stays at eco-lodges built in traditional Siwan style, offering a perfect blend of authenticity and comfort in one of the world\'s last unspoiled oases.',
    ],
  },
  'white-desert': {
    metaTitle: 'White Desert Egypt | Egypt Safari Tours | Desert Camping | Mateego Explorers',
    metaDescription: 'Discover the White Desert Egypt on private safari tours. Surreal chalk formations, overnight desert camping, crystal mountains, and Bahariya Oasis adventures.',
    h1: 'White Desert Egypt & Safari Tours',
    content: [
      'The White Desert is one of Egypt\'s most surreal and otherworldly landscapes — a vast expanse of chalk-white rock formations sculpted by millennia of wind erosion into shapes resembling mushrooms, icebergs, and abstract sculptures. Located in Egypt\'s Western Desert, it\'s a must-visit for adventure seekers and nature lovers.',
      'Our Egypt safari tours take you deep into the White Desert National Park, where you\'ll camp overnight among the formations under a canopy of stars so bright they seem within reach. Your experienced Bedouin guides prepare traditional meals over open fires while sharing stories of desert life and navigation.',
      'The journey to the White Desert typically passes through the Bahariya Oasis and the Crystal Mountain, adding layers of geological wonder to your Egypt desert adventure. Our private safari tours include 4x4 desert vehicles, all camping equipment, and expert naturalist guides who bring the desert ecosystem to life.',
    ],
  },
  alexandria: {
    metaTitle: 'Alexandria Egypt Tours | Mediterranean Egypt Travel | Private Guides | Mateego',
    metaDescription: 'Explore Alexandria Egypt on private guided tours. Bibliotheca Alexandrina, Qaitbay Citadel, catacombs, Mediterranean seafood, and Greco-Roman heritage tours.',
    h1: 'Alexandria Egypt Tours & Mediterranean Travel',
    content: [
      'Alexandria is Egypt\'s Mediterranean jewel — a cosmopolitan city founded by Alexander the Great in 331 BC that blends Greco-Roman heritage, Ottoman architecture, and modern Egyptian culture. Once home to one of the Seven Wonders of the Ancient World, the city retains an intellectual and artistic spirit unlike anywhere else in Egypt.',
      'Our private Alexandria Egypt tours include visits to the stunning Bibliotheca Alexandrina (a modern tribute to the ancient Library of Alexandria), the 15th-century Qaitbay Citadel built on the site of the legendary Pharos Lighthouse, and the mysterious Catacombs of Kom El Shoqafa — a unique blend of Egyptian and Roman funerary art.',
      'Alexandria is also a food lover\'s paradise. Our Mediterranean Egypt travel experiences include guided food tours through the city\'s fish markets and waterfront restaurants, where you\'ll savor the freshest seafood in the country. Combined with walks along the Corniche and visits to Montazah Palace gardens, Alexandria offers a refreshing contrast to Egypt\'s ancient interior.',
    ],
  },
  sinai: {
    metaTitle: 'Sinai Peninsula Tours | Mount Sinai Egypt | Red Sea & Desert | Mateego',
    metaDescription: 'Explore the Sinai Peninsula on private tours. Mount Sinai sunrise trek, St. Catherine\'s Monastery, Red Sea snorkeling, Dahab diving, and Bedouin desert camps.',
    h1: 'Sinai Peninsula Tours & Mount Sinai Egypt',
    content: [
      'The Sinai Peninsula is where desert mountains meet the Red Sea in one of Egypt\'s most dramatic and spiritually significant landscapes. From the sacred peak of Mount Sinai to the coral gardens of Dahab and Sharm El Sheikh, Sinai offers a unique blend of adventure, spirituality, and natural beauty.',
      'Our Mount Sinai Egypt tours begin with the classic pre-dawn ascent to the summit, where you\'ll watch the sunrise paint the desert mountains in shades of gold and crimson — a profoundly moving experience. Nearby, the UNESCO-listed St. Catherine\'s Monastery, one of the oldest continuously functioning Christian monasteries in the world, houses priceless icons and manuscripts.',
      'Beyond the mountains, Sinai\'s Red Sea coast offers world-class diving and snorkeling. Our Sinai Peninsula tours combine mountain treks with underwater exploration in the Blue Hole near Dahab, coral reef diving in Ras Mohammed National Park, and relaxation at luxury Red Sea resorts. Bedouin desert camps offer authentic stargazing experiences in one of the darkest skies on Earth.',
    ],
  },
};
