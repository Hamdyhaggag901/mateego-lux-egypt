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
        <h1 style={{
          fontFamily: 'var(--font-heading)', color: '#fff',
          fontSize: 'clamp(36px, 8vw, 90px)', fontWeight: 300,
          lineHeight: 1.05, marginBottom: 16,
        }}>
          Exceptional Journeys
        </h1>
        <p style={{
          color: 'rgba(255,255,255,0.85)', fontSize: 18,
          fontWeight: 300, marginBottom: 40, maxWidth: 500, margin: '0 auto 40px',
        }}>
          Discover Egypt through bespoke luxury travel, crafted around you
        </p>
        <div style={{
          display: 'flex', gap: 16, justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <div style={{
            display: 'flex', background: 'rgba(0,0,0,0.5)',
            borderRadius: 50, overflow: 'hidden',
          }}>
            <input
              placeholder="Where would you like to go?"
              style={{
                background: 'transparent', border: 'none', color: '#fff',
                padding: '12px 20px', fontSize: 14, width: 260, outline: 'none',
              }}
            />
            <button style={{
              background: 'rgba(255,255,255,0.15)', color: '#fff',
              padding: '12px 24px', fontSize: 13, fontWeight: 600, border: 'none',
              borderRadius: '0 50px 50px 0',
            }}>
              Search
            </button>
          </div>
          <Link to="/plan" className="btn-lavender">
            Use our trip planner
          </Link>
        </div>
      </div>
    </section>
  );
}
