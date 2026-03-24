import { useParams, Link } from 'react-router-dom';
import { useScrollFade } from '@/hooks/useScrollFade';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyBottomBar from '@/components/StickyBottomBar';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ARTICLES, IMAGES } from '@/data/siteData';

const ARTICLE_CONTENT: Record<string, { metaTitle: string; metaDescription: string; sections: { heading: string; text: string }[] }> = {
  'best-time-to-visit-egypt': {
    metaTitle: 'Best Time to Visit Egypt 2026 | Weather, Seasons & Travel Guide | Mateego',
    metaDescription: 'Plan your Egypt trip with our complete guide to the best time to visit. Month-by-month weather, peak seasons, festival dates, and expert tips for every traveler.',
    sections: [
      { heading: 'When Should You Visit Egypt?', text: 'The best time to visit Egypt is between October and April, when temperatures are comfortable for sightseeing and outdoor activities. The winter months (December–February) offer the most pleasant weather, with daytime temperatures around 20–25°C in Upper Egypt and 15–20°C in Cairo. This is peak tourist season, so expect larger crowds at popular sites like the Pyramids and Valley of the Kings.' },
      { heading: 'Shoulder Season: October & March–April', text: 'For the ideal balance of good weather and fewer crowds, consider visiting in October or March–April. Temperatures are warm but manageable, prices are lower than peak season, and you\'ll have more space to enjoy the temples and monuments. The Nile cruise experience is particularly magical during these months, with comfortable sailing conditions and golden light.' },
      { heading: 'Summer in Egypt: May–September', text: 'Summer brings intense heat, especially in Upper Egypt where temperatures can exceed 45°C. However, this is also when you\'ll find the best deals on luxury hotels and Nile cruises. Cairo and Alexandria are more manageable, and the Red Sea coast remains popular for diving and beach holidays year-round. If you can handle the heat, summer offers an uncrowded, authentic experience.' },
      { heading: 'Special Events & Festivals', text: 'Abu Simbel hosts its famous Sun Festival twice a year — on February 22nd and October 22nd — when sunlight illuminates the inner sanctuary. Ramadan offers a unique cultural experience with special evening celebrations. The Cairo International Film Festival (November) and various Sufi music festivals add cultural richness to any trip.' },
    ],
  },
  '19-top-hotels-in-egypt': {
    metaTitle: '19 Best Luxury Hotels in Egypt 2026 | Where to Stay | Mateego Explorers',
    metaDescription: 'Discover Egypt\'s finest luxury hotels — from pyramid-view suites to Nile-side palaces. Expert picks for Cairo, Luxor, Aswan, and the Red Sea coast.',
    sections: [
      { heading: 'Cairo\'s Finest Hotels', text: 'Cairo offers some of the most iconic hotel experiences in the world. The Mena House, with its unobstructed views of the Great Pyramids from its gardens and pool, is consistently rated among the world\'s best hotels. The St. Regis Cairo combines ultra-modern luxury with Nile views and impeccable butler service. For a more intimate experience, the historic Marriott Cairo (housed in a 19th-century palace) offers old-world charm in the heart of Zamalek.' },
      { heading: 'Luxor & Upper Egypt', text: 'In Luxor, the Al Moudira stands apart — a labor of love built by its Lebanese-German owners using traditional craftsmanship, filled with antiques and surrounded by lush gardens on the West Bank. The Sofitel Winter Palace, a grand colonial-era hotel on the Nile corniche, has hosted royalty and celebrities for over a century. Both offer the perfect base for exploring the Valley of the Kings and Karnak Temple.' },
      { heading: 'Aswan\'s Legendary Stays', text: 'The Old Cataract Hotel in Aswan is perhaps Egypt\'s most romantic hotel — a Victorian palace perched above the Nile where Agatha Christie wrote "Death on the Nile." Its terrace restaurant offers sunset views over Elephantine Island that are simply unforgettable. Nearby, the Movenpick Resort on Elephantine Island offers a more relaxed, tropical atmosphere.' },
      { heading: 'Nile Cruise Vessels', text: 'For many travelers, the best "hotel" in Egypt is a floating one. The Sanctuary Sun Boat III offers five-star luxury on the Nile with just 18 suites. For a more intimate experience, traditional dahabiya sailing boats like the Lazuli or Meroe carry just 10–12 guests, stopping at temples and villages inaccessible to larger vessels.' },
    ],
  },
  'guide-to-nile-cruises': {
    metaTitle: 'Complete Guide to Nile Cruises 2026 | Routes, Ships & Tips | Mateego',
    metaDescription: 'Everything you need to know about Nile cruises in Egypt. Compare luxury ships, dahabiyas, routes from Aswan to Luxor, and insider tips for the best experience.',
    sections: [
      { heading: 'Why Cruise the Nile?', text: 'A Nile cruise is the quintessential Egyptian experience — and for good reason. Sailing between Luxor and Aswan, you\'ll visit ancient temples that line the riverbanks, watch rural Egyptian life unfold from your deck, and experience the same journey that pharaohs, Roman emperors, and Victorian adventurers made before you. The Nile hasn\'t changed much in 5,000 years, and that timelessness is what makes a cruise so magical.' },
      { heading: 'Large Ships vs. Dahabiyas', text: 'Most Nile cruises operate on large vessels carrying 50–150 passengers. These offer swimming pools, spas, and multiple dining venues. For a more intimate experience, consider a dahabiya — a traditional two-masted sailing boat carrying just 10–16 guests. Dahabiyas move at a slower pace, stop at sites larger ships can\'t reach, and offer a genuinely peaceful experience on the water.' },
      { heading: 'The Classic Route: Luxor to Aswan', text: 'The most popular route runs between Luxor and Aswan (or vice versa), typically taking 4–5 nights. Key stops include Edfu Temple (one of Egypt\'s best-preserved), Kom Ombo (the unique double temple), and the Valley of the Kings. Some longer cruises extend to Dendera and Abydos, two of Egypt\'s most beautiful but less-visited temples.' },
      { heading: 'When to Cruise & What to Pack', text: 'The best months for a Nile cruise are October through April, when temperatures are comfortable and the river is calm. Pack layers — mornings on deck can be cool, but afternoons are warm. Bring comfortable walking shoes for temple visits, sun protection, and a light jacket for air-conditioned interiors. Most luxury cruises include laundry service.' },
    ],
  },
  'hidden-gems-of-luxor': {
    metaTitle: 'Hidden Gems of Luxor | Beyond the Tourist Trail | Mateego Explorers',
    metaDescription: 'Discover Luxor\'s best-kept secrets — from rarely visited tombs to local markets, sunset spots, and experiences most tourists never find. Expert insider guide.',
    sections: [
      { heading: 'Beyond the Valley of the Kings', text: 'While the Valley of the Kings is justly famous, Luxor holds dozens of lesser-known sites that are equally breathtaking. The Tombs of the Nobles on the West Bank contain some of Egypt\'s most vivid and lifelike paintings — scenes of daily life, fishing, feasting, and music that feel remarkably modern despite being 3,000 years old. Unlike the royal tombs, these are rarely crowded.' },
      { heading: 'Medinet Habu: Luxor\'s Best-Kept Secret', text: 'The mortuary temple of Ramses III at Medinet Habu is arguably Luxor\'s most underrated site. Its massive walls are covered in vivid, deeply carved reliefs that retain much of their original color — blues, reds, and greens that bring ancient battles and religious ceremonies to life. Visit in the late afternoon when the golden light makes the carvings glow.' },
      { heading: 'The Local Side of Luxor', text: 'Cross the Nile to the West Bank village of Gurna, where local families have lived among the ancient tombs for generations. Visit the morning market in Luxor town for fresh produce, spices, and street food. Take a horse-drawn carriage along the Corniche at sunset. These everyday experiences often become travelers\' most treasured memories.' },
      { heading: 'Sunrise Balloon & Sunset Felucca', text: 'Two experiences define Luxor: a hot air balloon ride at dawn, floating silently over the temples and the Nile as the sky turns gold and pink; and a felucca sail at sunset, watching the West Bank mountains change color as the day ends. Book both for the ultimate Luxor day — and bring your camera.' },
    ],
  },
  'first-timers-guide-to-egypt': {
    metaTitle: 'First-Timer\'s Guide to Egypt 2026 | Essential Tips & Advice | Mateego',
    metaDescription: 'Planning your first trip to Egypt? Our comprehensive guide covers visas, safety, packing, tipping, cultural etiquette, and everything first-time visitors need to know.',
    sections: [
      { heading: 'Is Egypt Safe for Tourists?', text: 'Yes — Egypt is one of the safest destinations in the Middle East and North Africa for tourists. Major tourist sites, hotels, and cruise vessels have excellent security. The Egyptian tourism police are a visible presence at all major sites. That said, we always recommend traveling with a knowledgeable local guide, which not only enhances safety but transforms your experience from sightseeing into genuine cultural immersion.' },
      { heading: 'Visas, Health & Practical Info', text: 'Most nationalities can obtain an Egypt e-visa online before travel or a visa on arrival at Cairo Airport. No special vaccinations are required, though we recommend standard travel health precautions. The local currency is the Egyptian Pound (EGP), and US dollars are widely accepted at hotels and tourist sites. Credit cards work in major hotels and restaurants, but carry cash for markets and tips.' },
      { heading: 'What to Pack for Egypt', text: 'Pack lightweight, breathable clothing that covers shoulders and knees (required for mosque visits and recommended for temple comfort). A good sun hat, high-SPF sunscreen, and comfortable walking shoes are essential. Bring layers for Nile cruises and desert nights, which can be surprisingly cool. A small daypack, refillable water bottle, and portable phone charger will serve you well.' },
      { heading: 'Cultural Etiquette & Tipping', text: 'Egyptians are famously hospitable and welcoming. Tipping (baksheesh) is an important part of the culture — small tips of 10–20 EGP are appropriate for service workers. Always ask before photographing people. During Ramadan, be respectful of those fasting by not eating or drinking conspicuously in public. Learning a few Arabic phrases — "shukran" (thank you), "salaam" (hello) — goes a long way.' },
    ],
  },
};

export default function Article() {
  useScrollFade();
  const { slug } = useParams();
  const article = ARTICLES.find((a) => a.slug === slug);
  const content = ARTICLE_CONTENT[slug || ''];

  if (!article || !content) {
    return (
      <div>
        <Navbar />
        <div className="container" style={{ padding: '200px 0 100px', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 40 }}>Article not found</h1>
          <Link to="/" className="btn-lavender" style={{ marginTop: 24, display: 'inline-flex' }}>Back to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: 60 }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        height: 450, position: 'relative', display: 'flex', alignItems: 'flex-end',
        backgroundImage: `url(${article.image})`, backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: 48 }}>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, marginBottom: 8 }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link> / <Link to="/inspiration" style={{ color: 'rgba(255,255,255,0.7)' }}>Inspiration</Link> / {article.title}
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 'clamp(32px, 5vw, 52px)' }}>
            {article.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="fade-up" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          {content.sections.map((s, i) => (
            <div key={i} style={{ marginBottom: 48 }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 32, marginBottom: 16 }}>{s.heading}</h2>
              <p style={{ color: '#6b6259', lineHeight: 1.8, fontSize: 16 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark fade-up">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 32, marginBottom: 16 }}>
            Ready to plan your Egypt adventure?
          </h2>
          <Link to="/plan" className="btn-lavender">Start Planning</Link>
        </div>
      </section>

      {/* Related articles */}
      <section className="section-cream fade-up">
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, textAlign: 'center', marginBottom: 40 }}>More Inspiration</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }} className="article-grid">
            {ARTICLES.filter(a => a.slug !== slug).slice(0, 3).map((a) => (
              <Link key={a.slug} to={`/articles/${a.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ borderRadius: 8, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
                  <img src={a.image} alt={a.title} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                  <div style={{ padding: 20 }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22 }}>{a.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <StickyBottomBar />
      <WhatsAppButton />

      <style>{`
        @media (max-width: 768px) {
          .article-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
