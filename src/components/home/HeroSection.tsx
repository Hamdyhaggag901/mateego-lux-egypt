import { Link } from 'react-router-dom';
import { IMAGES } from '@/data/siteData';

export default function HeroSection() {
  return (
    <section style={{
      height: '100vh', position: 'relative', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      backgroundImage: `url(${IMAGES.hero})`,
      backgroundSize: 'cover', backgroundPosition: 'center',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,0,0,0.45)',
      }} />
      <div style={{
        position: 'relative', zIndex: 1, textAlign: 'center',
        maxWidth: 800, padding: '0 20px',
      }}>
        <p style={{
          color: '#fff', fontSize: 12, letterSpacing: 4,
          textTransform: 'uppercase', marginBottom: 32, fontWeight: 400,
        }}>
          EGYPT SPECIALISTS · EST. 2010
        </p>

        <h1 style={{
          fontFamily: 'var(--font-heading)', color: '#fff',
          fontSize: 'clamp(48px, 8vw, 90px)', fontWeight: 400,
          lineHeight: 1.1, marginBottom: 20,
        }}>
          Exceptional<br />
          <span style={{ fontStyle: 'italic' }}>Journeys</span>
        </h1>

        <p style={{
          color: 'rgba(255,255,255,0.9)', fontSize: 16,
          fontWeight: 300, maxWidth: 500, margin: '0 auto 48px',
          lineHeight: 1.6,
        }}>
          Set off on remarkable, deeply personal trips planned by Egypt specialists
        </p>

        <div style={{
          display: 'flex', gap: 40, justifyContent: 'center',
          alignItems: 'flex-start', flexWrap: 'wrap',
        }}>
          {/* Left CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <span style={{ color: '#fff', fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, fontWeight: 400 }}>
              Take me to Egypt
            </span>
            <div style={{
              display: 'flex', background: 'rgba(0,0,0,0.5)',
              borderRadius: 50, overflow: 'hidden',
            }}>
              <input
                placeholder="Search destinations..."
                style={{
                  background: 'transparent', border: 'none', color: '#fff',
                  padding: '12px 20px', fontSize: 14, width: 240, outline: 'none',
                }}
              />
              <button style={{
                background: 'var(--gold)', color: '#fff',
                padding: '12px 20px', fontSize: 11, fontWeight: 700, border: 'none',
                borderRadius: '0 50px 50px 0', letterSpacing: 1.5, textTransform: 'uppercase',
              }}>
                SEARCH
              </button>
            </div>
          </div>

          {/* Right CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <span style={{ color: '#fff', fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, fontWeight: 400 }}>
              Not sure where?
            </span>
            <Link to="/plan" style={{
              border: '1px solid var(--gold)', color: '#fff',
              borderRadius: 50, padding: '12px 28px', fontSize: 11,
              fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase',
              display: 'inline-flex', alignItems: 'center',
              transition: 'background 0.2s',
            }}>
              USE OUR TRIP PLANNER
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}