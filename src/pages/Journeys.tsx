import { useScrollFade } from '@/hooks/useScrollFade';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyBottomBar from '@/components/StickyBottomBar';
import WhatsAppButton from '@/components/WhatsAppButton';
import { IMAGES, HOTELS, TESTIMONIALS } from '@/data/siteData';
import { getTours, getDestinations } from '@/lib/wordpress';

const highlights = [
  { icon: '🏛️', label: 'Ancient history' },
  { icon: '🍽️', label: 'Cuisine' },
  { icon: '🏜️', label: 'Sahara' },
  { icon: '🚢', label: 'River Nile' },
  { icon: '🏛️', label: 'Museums' },
];

const tabs = ['HIGHLIGHTS', 'WHERE TO STAY', 'TRIP INSPIRATION', 'WHERE TO GO', 'WHEN TO VISIT', 'TRAVEL GUIDES'];

export default function Journeys() {
  useScrollFade();

  const [tours, setTours] = useState<any[]>([]);
  const [destinations, setDestinations] = useState<any[]>([]);

  useEffect(() => {
    getTours().then(setTours);
    getDestinations().then(setDestinations);
  }, []);

  return (
    <div style={{ paddingBottom: 60 }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        height: 500, position: 'relative', display: 'flex', alignItems: 'flex-end',
        backgroundImage: `url(${IMAGES.pyramids})`, backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: 48 }}>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, marginBottom: 8 }}>
            Home / Journeys
          </div>
          <h1 style={{
            fontFamily: 'var(--font-heading)', color: '#fff',
            fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 300,
          }}>
            Egypt Journeys <em>made for you</em>
          </h1>
        </div>
      </section>

      {/* Sub-nav tabs */}
      <div style={{
        position: 'sticky', top: 64, zIndex: 50, background: '#fff',
        borderBottom: '1px solid #eee', overflowX: 'auto',
      }}>
        <div className="container" style={{ display: 'flex', gap: 32 }}>
          {tabs.map((tab) => (
            <button key={tab} style={{
              padding: '16px 0', fontSize: 11, letterSpacing: 2,
              color: '#6b6259', borderBottom: '2px solid transparent',
              whiteSpace: 'nowrap', background: 'none', border: 'none', cursor: 'pointer',
            }}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Highlights row */}
      <section className="section-cream fade-up">
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
          {highlights.map((h) => (
            <div key={h.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 32, color: '#B9985A', marginBottom: 8 }}>{h.icon}</div>
              <div style={{ fontSize: 12, letterSpacing: 1, color: '#6b6259' }}>{h.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial 2-col */}
      <section className="fade-up" style={{ padding: '80px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 40, marginBottom: 24 }}>
              Rich in ancient history and timeless wonders
            </h2>
            <p style={{ color: '#6b6259', lineHeight: 1.8, marginBottom: 16 }}>
              Egypt is a land where the past and present intertwine in the most extraordinary ways. From the moment you set foot on this ancient soil, you are transported into a world of pharaohs, pyramids, and timeless Nile sunsets.
            </p>
            <p style={{ color: '#6b6259', lineHeight: 1.8, marginBottom: 16 }}>
              Our expertly crafted journeys take you beyond the tourist trail, revealing hidden temples, vibrant souks, and the warm hospitality of the Egyptian people. Every itinerary is designed to immerse you in the country's rich tapestry of culture, history, and natural beauty.
            </p>
            <p style={{ color: '#6b6259', lineHeight: 1.8 }}>
              Whether you dream of sailing the Nile on a traditional dahabiya, exploring the Valley of the Kings at dawn, or camping under the stars in the White Desert, our Travel Designers will create the perfect journey for you.
            </p>
          </div>
          <div>
            <div style={{
              background: '#F5F0E8', padding: 32, borderRadius: 8, marginBottom: 24,
            }}>
              <div className="gold-label" style={{ marginBottom: 16 }}>HIGHLIGHTS</div>
              {['Private Egyptologist guides', 'Luxury Nile cruises', 'Desert camping experiences', 'Access to restricted sites', 'Authentic culinary journeys'].map((h) => (
                <div key={h} style={{ padding: '6px 0', color: '#111', fontSize: 14 }}>• {h}</div>
              ))}
            </div>
            <div style={{
              border: '1px solid #eee', padding: 24, borderRadius: 8, textAlign: 'center',
            }}>
              <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#eee', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32 }}>👤</div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 20, marginBottom: 4 }}>Ahmed Hassan</div>
              <div style={{ color: '#B9985A', fontSize: 12, letterSpacing: 1 }}>EGYPT TRAVEL DESIGNER</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="section-dark fade-up">
        <div className="container" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 24,
        }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 32 }}>
            Ready to plan your adventure?
          </h2>
          <Link to="/plan" className="btn-lavender">Start Planning</Link>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-cream fade-up">
        <div className="container" style={{ maxWidth: 700, textAlign: 'center' }}>
          <div style={{
            fontFamily: 'var(--font-heading)', fontStyle: 'italic',
            fontSize: 26, lineHeight: 1.5, marginBottom: 16,
          }}>
            &ldquo;{TESTIMONIALS[0].quote}&rdquo;
          </div>
          <div className="stars">★★★★★</div>
          <div style={{ color: '#6b6259', fontSize: 14, marginTop: 8 }}>
            {TESTIMONIALS[0].author}, {TESTIMONIALS[0].location}
          </div>
        </div>
      </section>

      {/* Trip Inspiration grid - من WordPress */}
      <section className="fade-up" style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 40, textAlign: 'center', marginBottom: 48 }}>
            Trip Inspiration
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }} className="journey-grid">
            {tours.length > 0 ? tours.map((j: any) => (
              <Link key={j.slug} to={`/journeys/${j.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ borderRadius: 8, overflow: 'hidden', background: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
                  <div style={{ height: 220, overflow: 'hidden' }}>
                    <img
                      src={j._embedded?.['wp:featuredmedia']?.[0]?.source_url || IMAGES.pyramids}
                      alt={j.title?.rendered}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                    />
                  </div>
                  <div style={{ padding: 24 }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, marginBottom: 8 }}
                      dangerouslySetInnerHTML={{ __html: j.title?.rendered }}
                    />
                    <div style={{ color: '#6b6259', fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}
                      dangerouslySetInnerHTML={{ __html: j.excerpt?.rendered }}
                    />
                    <span className="btn-lavender" style={{ fontSize: 11, padding: '8px 20px' }}>Enquire →</span>
                  </div>
                </div>
              </Link>
            )) : (
              <div style={{ color: '#6b6259', gridColumn: '1/-1', textAlign: 'center' }}>Loading tours...</div>
            )}
          </div>
        </div>
      </section>

      {/* Where to Stay */}
      <section className="section-cream fade-up">
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 40, textAlign: 'center', marginBottom: 48 }}>
            Where to Stay
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }} className="journey-grid">
            {HOTELS.map((h) => (
              <div key={h.name} style={{ borderRadius: 8, overflow: 'hidden', background: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <div style={{ height: 200, overflow: 'hidden' }}>
                  <img src={h.image} alt={h.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 24 }}>
                  <div className="gold-label" style={{ marginBottom: 8 }}>{h.location}</div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, marginBottom: 8 }}>{h.name}</h3>
                  <p style={{ color: '#6b6259', fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>{h.description}</p>
                  <span className="btn-lavender" style={{ fontSize: 11, padding: '8px 20px' }}>Discover hotel →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where to Go - من WordPress */}
      <section className="fade-up" style={{ padding: '80px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <div style={{ background: '#F5F0E8', borderRadius: 12, padding: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="300" height="400" viewBox="0 0 300 400" fill="#F5F0E8" stroke="#B9985A" strokeWidth="1.5">
              <path d="M150 20 L200 60 L220 120 L240 200 L200 300 L180 350 L160 380 L140 380 L120 360 L100 300 L80 240 L60 180 L80 120 L100 80 Z" fill="#e8e0d0" />
              {[{ x: 150, y: 80, label: 'Cairo' }, { x: 120, y: 120, label: 'Alexandria' }, { x: 200, y: 200, label: 'Luxor' }, { x: 180, y: 280, label: 'Aswan' }].map((c) => (
                <g key={c.label}>
                  <circle cx={c.x} cy={c.y} r="6" fill="#B9985A" />
                  <text x={c.x + 12} y={c.y + 4} fill="#111" fontSize="12" fontFamily="var(--font-body)">{c.label}</text>
                </g>
              ))}
            </svg>
          </div>
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, marginBottom: 32 }}>Where to Go</h2>
            {destinations.slice(0, 6).map((d: any) => (
              <Link key={d.slug} to={`/destinations/${d.slug}`} style={{
                display: 'flex', gap: 16, padding: '16px 0', borderBottom: '1px solid #eee', alignItems: 'center',
              }}>
                <img
                  src={d._embedded?.['wp:featuredmedia']?.[0]?.source_url || IMAGES.pyramids}
                  alt={d.title?.rendered}
                  style={{ width: 80, height: 60, objectFit: 'cover', borderRadius: 4 }}
                />
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: 20 }}
                    dangerouslySetInnerHTML={{ __html: d.title?.rendered }}
                  />
                  <div style={{ color: '#6b6259', fontSize: 13 }}
                    dangerouslySetInnerHTML={{ __html: d.excerpt?.rendered }}
                  />
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
