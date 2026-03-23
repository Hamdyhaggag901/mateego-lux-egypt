import { useParams, Link } from 'react-router-dom';
import { useScrollFade } from '@/hooks/useScrollFade';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyBottomBar from '@/components/StickyBottomBar';
import WhatsAppButton from '@/components/WhatsAppButton';
import { JOURNEYS, IMAGES, HOTELS, TESTIMONIALS } from '@/data/siteData';

const itinerary = [
  { days: '1–2', title: 'Cairo', description: 'Arrive in Cairo and explore the Great Pyramids of Giza, the Sphinx, and the Grand Egyptian Museum. Enjoy a private sunset dinner with views of the pyramids.', image: IMAGES.cairo, hotels: [HOTELS[0], HOTELS[5]] },
  { days: '3–4', title: 'Alexandria', description: 'Drive north to the Mediterranean coast. Visit the Bibliotheca Alexandrina, Qaitbay Citadel, and the atmospheric Montazah Palace gardens. Savor fresh seafood by the harbor.', image: IMAGES.alex, hotels: [HOTELS[0]] },
  { days: '5', title: 'Aswan & Abu Simbel', description: 'Fly to Aswan for an early morning visit to the colossal temples of Abu Simbel. Afternoon felucca sailing around Elephantine Island and the Botanical Garden.', image: IMAGES.aswan, hotels: [HOTELS[1]] },
  { days: '6–8', title: 'Nile Cruise', description: 'Board your luxury dahabiya and sail the Nile from Aswan to Luxor. Stop at Kom Ombo, Edfu Temple, and hidden riverside villages accessible only by boat.', image: IMAGES.nile, hotels: [HOTELS[3], HOTELS[4]] },
  { days: '9', title: 'Luxor', description: 'Explore the Valley of the Kings, Hatshepsut\'s Temple, and the stunning Karnak complex. Optional hot air balloon at dawn over the West Bank.', image: IMAGES.luxor, hotels: [HOTELS[2]] },
  { days: '10–11', title: 'Red Sea', description: 'Transfer to the Red Sea coast for snorkeling in crystal-clear waters, desert excursions, and relaxation at a luxury beach resort.', image: IMAGES.desert, hotels: [] },
  { days: '12–13', title: 'Cairo', description: 'Return to Cairo for a visit to Islamic Cairo, the Khan el-Khalili bazaar, and a farewell dinner cruise on the Nile.', image: IMAGES.cairo, hotels: [HOTELS[0], HOTELS[5]] },
];

export default function SingleJourney() {
  useScrollFade();
  const { slug } = useParams();
  const journey = JOURNEYS.find((j) => j.slug === slug) || JOURNEYS[2];

  return (
    <div style={{ paddingBottom: 60 }}>
      <Navbar />

      {/* Hero */}
      <section style={{ padding: '120px 0 60px', background: '#F5F0E8' }}>
        <div className="container">
          <div style={{ color: '#6b6259', fontSize: 13, marginBottom: 12 }}>
            <Link to="/" style={{ color: '#6b6259' }}>Home</Link> / <Link to="/journeys" style={{ color: '#6b6259' }}>Journeys</Link> / {journey.title}
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 56px)', marginBottom: 20 }}>
            {journey.title}
          </h1>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <span className="pill-gold">{journey.days} days</span>
            <span className="pill-gold">From ${journey.price.toLocaleString()} PP</span>
          </div>
        </div>
      </section>

      {/* Full-width photo */}
      <div style={{ height: 500, overflow: 'hidden' }}>
        <img src={journey.image} alt={journey.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Two-col layout */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '65% 35%', gap: 48 }}>
          {/* Left - scrollable */}
          <div>
            {/* Bespoke box */}
            <div className="fade-up" style={{
              background: '#F5F0E8', padding: 40, borderRadius: 8, marginBottom: 48,
              display: 'flex', gap: 32, alignItems: 'center',
            }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, marginBottom: 16 }}>
                  Bespoke trips, crafted for you
                </h3>
                {['Luxury accommodation throughout', 'Private guided tours with Egyptologist', 'All private transfers included', 'Mateego Concierge 24/7 support'].map((b) => (
                  <div key={b} style={{ padding: '4px 0', color: '#6b6259', fontSize: 14 }}>✓ {b}</div>
                ))}
              </div>
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" stroke="#111" strokeWidth="1.2">
                <circle cx="45" cy="40" r="12" />
                <circle cx="75" cy="40" r="12" />
                <path d="M30 80c0-16 12-28 30-28s30 12 30 28" />
                <rect x="20" y="85" width="80" height="30" rx="4" />
              </svg>
            </div>

            {/* Dark CTA */}
            <div className="section-dark fade-up" style={{ borderRadius: 8, padding: 40, marginBottom: 48, textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 28, marginBottom: 16 }}>
                Make this journey yours
              </h3>
              <Link to="/plan" className="btn-lavender">Start Planning</Link>
            </div>

            {/* Itinerary */}
            <h2 className="fade-up" style={{ fontFamily: 'var(--font-heading)', fontSize: 40, marginBottom: 40 }}>
              Itinerary in detail
            </h2>

            {itinerary.map((day) => (
              <div key={day.days} className="fade-up" style={{ marginBottom: 64 }} data-day={day.days}>
                <div className="gold-label" style={{ marginBottom: 8 }}>DAYS {day.days}</div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, marginBottom: 24 }}>{day.title}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
                  <p style={{ color: '#6b6259', lineHeight: 1.8 }}>{day.description}</p>
                  <div style={{ borderRadius: 8, overflow: 'hidden', height: 200 }}>
                    <img src={day.image} alt={day.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
                {day.hotels.length > 0 && (
                  <div>
                    <div style={{ fontSize: 14, color: '#6b6259', marginBottom: 12 }}>Where you could stay</div>
                    <div style={{ display: 'flex', gap: 16, overflowX: 'auto' }}>
                      {day.hotels.map((h) => (
                        <div key={h.name} style={{
                          flex: '0 0 260px', borderRadius: 8, overflow: 'hidden',
                          background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                        }}>
                          <img src={h.image} alt={h.name} style={{ width: '100%', height: 140, objectFit: 'cover' }} />
                          <div style={{ padding: 16 }}>
                            <div className="gold-label" style={{ marginBottom: 4 }}>{h.location}</div>
                            <div style={{ fontFamily: 'var(--font-heading)', fontSize: 18 }}>{h.name}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right - sticky map */}
          <div style={{ position: 'sticky', top: 100, alignSelf: 'start' }}>
            <div style={{ background: '#F5F0E8', borderRadius: 12, padding: 32, textAlign: 'center' }}>
              <svg width="200" height="320" viewBox="0 0 200 320" fill="none">
                <path d="M100 10 L140 40 L160 100 L180 170 L140 260 L120 310 L100 320 L80 310 L60 260 L40 200 L30 140 L50 80 L70 40 Z" fill="#e8e0d0" stroke="#B9985A" strokeWidth="1" />
                <path d="M100 60 L80 100 L120 180 L140 260" stroke="#B9985A" strokeWidth="1" strokeDasharray="4 4" />
                {[
                  { x: 100, y: 60, label: 'Cairo' },
                  { x: 80, y: 100, label: 'Alexandria' },
                  { x: 120, y: 180, label: 'Luxor' },
                  { x: 140, y: 230, label: 'Aswan' },
                ].map((c) => (
                  <g key={c.label}>
                    <circle cx={c.x} cy={c.y} r="8" fill="#B9985A" stroke="#fff" strokeWidth="2" />
                    <text x={c.x + 14} y={c.y + 4} fill="#111" fontSize="11" fontFamily="Lato">{c.label}</text>
                  </g>
                ))}
              </svg>
            </div>

            <div style={{ marginTop: 24, textAlign: 'center' }}>
              <Link to="/plan" className="btn-lavender" style={{ width: '100%', justifyContent: 'center' }}>
                Start Planning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-cream fade-up">
        <div className="container" style={{ maxWidth: 700, textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: 26, lineHeight: 1.5, marginBottom: 16 }}>
            &ldquo;{TESTIMONIALS[1].quote}&rdquo;
          </div>
          <div className="stars">★★★★★</div>
          <div style={{ color: '#6b6259', fontSize: 14, marginTop: 8 }}>
            {TESTIMONIALS[1].author}, {TESTIMONIALS[1].location}
          </div>
        </div>
      </section>

      {/* Related journeys */}
      <section className="fade-up" style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, textAlign: 'center', marginBottom: 40 }}>
            You might also like
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }} className="journey-grid">
            {JOURNEYS.filter((j) => j.slug !== slug).slice(0, 3).map((j) => (
              <Link key={j.slug} to={`/journeys/${j.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ borderRadius: 8, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
                  <img src={j.image} alt={j.title} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                  <div style={{ padding: 20 }}>
                    <div style={{ color: '#6b6259', fontSize: 12, marginBottom: 4 }}>{j.days} days · From ${j.price.toLocaleString()} pp</div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22 }}>{j.title}</h3>
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
          .journey-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
