export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1200&q=80',
  pyramids: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1200&q=80',
  nile: 'https://images.unsplash.com/photo-1539768942893-daf3538e9819?w=1200&q=80',
  desert: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&q=80',
  temple: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=1200&q=80',
  family: 'https://images.unsplash.com/photo-1541300613939-71366a840d8a?w=1200&q=80',
  cairo: 'https://images.unsplash.com/photo-1601580391937-e9e2f5584a2e?w=1200&q=80',
  luxor: 'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=1200&q=80',
  alex: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=1200&q=80',
  aswan: 'https://images.unsplash.com/photo-1585970480901-90d6bb2a48b5?w=1200&q=80',
};

export const NAV_LINKS = [
  { label: 'JOURNEYS', href: '/journeys' },
  { label: 'EXPERIENCES', href: '/journeys' },
  { label: 'INSPIRATION', href: '/journeys' },
  { label: 'ABOUT EGYPT', href: '/about' },
  { label: 'ABOUT US', href: '/about' },
];

export const JOURNEYS = [
  { slug: 'egypts-ancient-wonders', title: "Egypt's Ancient Wonders", days: 8, price: 4950, image: IMAGES.pyramids, description: 'Explore the Great Pyramids, Sphinx, and the treasures of the Egyptian Museum on this immersive journey through ancient history.' },
  { slug: 'classic-egypt', title: 'Classic Egypt', days: 11, price: 6200, image: IMAGES.temple, description: 'A comprehensive tour covering Cairo, Luxor, and Aswan with luxury Nile cruising and private Egyptologist guides.' },
  { slug: 'luxury-grand-tour', title: 'Luxury Grand Tour of Egypt', days: 13, price: 9800, image: IMAGES.nile, description: 'The ultimate Egyptian experience — from Alexandria to Abu Simbel, with stays at the finest heritage hotels.' },
  { slug: 'family-adventure', title: 'Family Adventure', days: 11, price: 5650, image: IMAGES.family, description: 'Kid-friendly itineraries with camel rides, felucca sailing, and hands-on archaeology workshops.' },
  { slug: 'nile-dahabiya-cruise', title: 'Nile Dahabiya Cruise', days: 8, price: 7300, image: IMAGES.nile, description: 'Sail the Nile on a traditional dahabiya, stopping at temples and villages unreachable by larger vessels.' },
  { slug: 'highlights-of-egypt', title: 'Highlights of Egypt', days: 8, price: 4200, image: IMAGES.cairo, description: 'A curated introduction to Egypt\'s must-see sites, perfect for first-time visitors.' },
];

export const DESTINATIONS = [
  { slug: 'cairo', name: 'Cairo & Giza', image: IMAGES.cairo, description: 'Home to the Great Pyramids and the vibrant Khan el-Khalili bazaar.' },
  { slug: 'luxor', name: 'Luxor & Karnak', image: IMAGES.luxor, description: 'The world\'s greatest open-air museum, with temples and royal tombs.' },
  { slug: 'aswan', name: 'Aswan & Abu Simbel', image: IMAGES.aswan, description: 'Nubian culture, felucca sailing, and the colossal temples of Ramses II.' },
  { slug: 'nile-cruises', name: 'Nile Cruises', image: IMAGES.nile, description: 'Drift between ancient temples on a luxury river cruise.' },
  { slug: 'siwa-oasis', name: 'Siwa Oasis', image: IMAGES.desert, description: 'A remote desert paradise with salt lakes and ancient oracle ruins.' },
  { slug: 'white-desert', name: 'White Desert', image: IMAGES.desert, description: 'Surreal chalk formations and star-filled nights in the Western Desert.' },
  { slug: 'alexandria', name: 'Alexandria', image: IMAGES.alex, description: 'Mediterranean charm, Greco-Roman ruins, and world-class seafood.' },
  { slug: 'sinai', name: 'Sinai', image: IMAGES.hero, description: 'Mountain trails, coral reefs, and the ancient monastery of St. Catherine.' },
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
  { title: 'Best Time to Visit Egypt', image: IMAGES.pyramids },
  { title: '19 Top Hotels in Egypt', image: IMAGES.luxor },
  { title: 'A Guide to Nile Cruises', image: IMAGES.nile },
  { title: 'Hidden Gems of Luxor', image: IMAGES.temple },
  { title: "First-Timer's Guide to Egypt", image: IMAGES.cairo },
];

export const PRESS = ['AFAR', 'Bloomberg', 'HONG KONG TATLER', 'Robb Report', 'The Telegraph', 'TRAVEL+LEISURE', 'VOGUE'];
