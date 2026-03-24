import { useParams, Link } from 'react-router-dom';
import { useScrollFade } from '@/hooks/useScrollFade';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { DESTINATIONS, JOURNEYS, HOTELS, TESTIMONIALS, DESTINATION_SEO } from '@/data/siteData';

const features: Record<string, { icon: string; label: string }[]> = {
  cairo: [
    { icon: '🏛️', label: 'Great Pyramids' },
    { icon: '🏺', label: 'Egyptian Museum' },
    { icon: '🕌', label: 'Islamic Cairo' },
    { icon: '🛍️', label: 'Khan el-Khalili' },
  ],
  luxor: [
    { icon: '🏛️', label: 'Karnak Temple' },
    { icon: '👑', label: 'Valley of Kings' },
    { icon: '🎈', label: 'Hot air balloons' },
    { icon: '🏺', label: 'Hatshepsut Temple' },
  ],
  aswan: [
    { icon: '⛵', label: 'Felucca sailing' },
    { icon: '🏛️', label: 'Abu Simbel' },
    { icon: '🎨', label: 'Nubian villages' },
    { icon: '🏝️', label: 'Philae Temple' },
  ],
  'nile-cruises': [
    { icon: '🚢', label: 'Luxury vessels' },
    { icon: '🏛️', label: 'Temple stops' },
    { icon: '🍽️', label: 'Gourmet dining' },
    { icon: '🌅', label: 'Nile sunsets' },
  ],
  'siwa-oasis': [
    { icon: '🏜️', label: 'Desert paradise' },
    { icon: '🏊', label: 'Salt lakes' },
    { icon: '🏛️', label: 'Oracle Temple' },
    { icon: '⭐', label: 'Stargazing' },
  ],
  'white-desert': [
    { icon: '🪨', label: 'Chalk formations' },
    { icon: '⛺', label: 'Desert camping' },
    { icon: '🌌', label: 'Star-filled skies' },
    { icon: '🏜️', label: 'Safari tours' },
  ],
  alexandria: [
    { icon: '📚', label: 'Bibliotheca' },
    { icon: '🏰', label: 'Qaitbay Citadel' },
    { icon: '🦐', label: 'Fresh seafood' },
    { icon: '🌊', label: 'Mediterranean' },
  ],
  sinai: [
    { icon: '⛰️', label: 'Mount Sinai' },
    { icon: '🤿', label: 'Coral reefs' },
    { icon: '🏕️', label: 'Bedouin camps' },
    { icon: '⛪', label: 'St. Catherine' },
  ],
};

const defaultFeatures = [
  { icon: '🏛️', label: 'Ancient temples' },
  { icon: '🌅', label: 'Stunning sunsets' },
  { icon: '🎭', label: 'Rich culture' },
  { icon: '🏜️', label: 'Desert landscapes' },
];

export default function Destination() {
  useScrollFade();
  const { slug } = useParams();
  const dest = DESTINATIONS.find((d) => d.slug === slug) || DESTINATIONS[0];
  const feats = features[slug || ''] || defaultFeatures;
  const seo = DESTINATION_SEO[slug || ''];

  return (
    <div style={{ paddingBottom: 60 }}>
      {seo && (
        <title>{seo.metaTitle}</title>
      )}
      <Navbar />

      {/* Hero */}
      <section style={{
        height: 500, position: 'relative', display: 'flex', alignItems: 'flex-end',
        backgroundImage: `url(${dest.image})`, backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: 48 }}>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, marginBottom: 8 }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link> / <Link to="/journeys" style={{ color: 'rgba(255,255,255,0.7)' }}>Destinations</Link> / {dest.name}
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 'clamp(32px, 5vw, 52px)' }}>
            {seo ? seo.h1 : `Luxury ${dest.name} Tours`} <em>made for you</em>
          </h1>
          {seo && (
            <meta name="description" content={seo.metaDescription} />
          )}
        </div>
      </section>

      {/* Icon features */}
      <section className="section-cream fade-up">
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: 64, flexWrap: 'wrap' }}>
          {feats.map((f) => (
            <div key={f.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 32, color: '#B9985A', marginBottom: 8 }}>{f.icon}</div>
              <div style={{ fontSize: 12, letterSpacing: 1, color: '#6b6259' }}>{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial */}
      <section className="fade-up" style={{ padding: '80px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 40, marginBottom: 24 }}>
              Discover {dest.name}
            </h2>
            {seo ? (
              seo.content.map((p, i) => (
                <p key={i} style={{ color: '#6b6259', lineHeight: 1.8, marginBottom: 16 }}>{p}</p>
              ))
            ) : (
              <>
                <p style={{ color: '#6b6259', lineHeight: 1.8, marginBottom: 16 }}>{dest.description}</p>
                <p style={{ color: '#6b6259', lineHeight: 1.8 }}>
                  Our Travel Designers know every corner of {dest.name}, from its grand monuments to its hidden local gems. Let us craft an experience that goes beyond the ordinary, immersing you in the authentic spirit of this remarkable destination.
                </p>
              </>
            )}
          </div>
          <div>
            <div style={{ background: '#F5F0E8', padding: 32, borderRadius: 8, marginBottom: 24 }}>
              <div className="gold-label" style={{ marginBottom: 16 }}>HIGHLIGHTS</div>
              {['Private guided tours', 'Luxury accommodation', 'Authentic local cuisine', 'Cultural immersion', 'Flexible itineraries'].map((h) => (
                <div key={h} style={{ padding: '6px 0', color: '#111', fontSize: 14 }}>• {h}</div>
              ))}
            </div>
            <div style={{ border: '1px solid #eee', padding: 24, borderRadius: 8, textAlign: 'center' }}>
              <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#eee', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32 }}>👤</div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 20, marginBottom: 4 }}>Ahmed Hassan</div>
              <div style={{ color: '#B9985A', fontSize: 12, letterSpacing: 1 }}>EGYPT TRAVEL DESIGNER</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="section-dark fade-up">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40, textAlign: 'center', flexWrap: 'wrap' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 32 }}>
            Ready to explore {dest.name}?
          </h2>
          <Link to="/plan" className="btn-lavender">Start Planning</Link>
        </div>
      </section>

      {/* Hotels */}
      <section className="section-cream fade-up">
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, textAlign: 'center', marginBottom: 40 }}>Where to Stay</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }} className="dest-grid">
            {HOTELS.slice(0, 3).map((h) => (
              <div key={h.name} style={{ borderRadius: 8, overflow: 'hidden', background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <img src={h.image} alt={h.name} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                <div style={{ padding: 24 }}>
                  <div className="gold-label" style={{ marginBottom: 8 }}>{h.location}</div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, marginBottom: 8 }}>{h.name}</h3>
                  <p style={{ color: '#6b6259', fontSize: 14, lineHeight: 1.6, marginBottom: 12 }}>{h.description}</p>
                  <span className="btn-lavender" style={{ fontSize: 11, padding: '8px 20px' }}>Discover hotel →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trip Inspiration */}
      <section className="fade-up" style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, textAlign: 'center', marginBottom: 40 }}>Trip Inspiration</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }} className="dest-grid">
            {JOURNEYS.slice(0, 3).map((j) => (
              <Link key={j.slug} to={`/journeys/${j.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ borderRadius: 8, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
                  <img src={j.image} alt={j.title} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                  <div style={{ padding: 20 }}>
                    <div style={{ color: '#6b6259', fontSize: 12 }}>{j.days} days · From ${j.price.toLocaleString()} pp</div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, marginTop: 8 }}>{j.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-cream fade-up">
        <div className="container" style={{ maxWidth: 700, textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: 26, lineHeight: 1.5, marginBottom: 16 }}>
            &ldquo;{TESTIMONIALS[2].quote}&rdquo;
          </div>
          <div className="stars">★★★★★</div>
          <div style={{ color: '#6b6259', fontSize: 14, marginTop: 8 }}>{TESTIMONIALS[2].author}, {TESTIMONIALS[2].location}</div>
        </div>
      </section>

      {/* Bottom sticky bar */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 90,
        background: '#1a1a1a', padding: '12px 40px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <Link to="/journeys" className="btn-lavender" style={{ fontSize: 11, padding: '8px 20px' }}>
          ← My Inspiration 🗺️
        </Link>
        <Link to="/contact" className="btn-lavender" style={{ fontSize: 11, padding: '8px 20px' }}>
          Contact a Travel Designer →
        </Link>
      </div>

      <Footer />
      <WhatsAppButton />

      <style>{`
        @media (max-width: 768px) {
          .dest-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
