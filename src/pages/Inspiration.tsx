import { useScrollFade } from '@/hooks/useScrollFade';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyBottomBar from '@/components/StickyBottomBar';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ARTICLES, IMAGES } from '@/data/siteData';

export default function Inspiration() {
  useScrollFade();

  return (
    <div style={{ paddingBottom: 60 }}>
      <Navbar />

      <section style={{
        height: 500, position: 'relative', display: 'flex', alignItems: 'flex-end',
        backgroundImage: `url(${IMAGES.nile})`, backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: 48 }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 'clamp(36px, 6vw, 60px)' }}>
            Travel <em>Inspiration</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 16, maxWidth: 600, marginTop: 16, lineHeight: 1.6 }}>
            Expert guides, insider tips, and stories from the land of the pharaohs to help you plan your perfect Egypt journey.
          </p>
        </div>
      </section>

      <section className="fade-up" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }} className="insp-grid">
            {ARTICLES.map((a) => (
              <Link key={a.slug} to={`/articles/${a.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ borderRadius: 8, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', transition: 'transform 0.3s', cursor: 'pointer' }}>
                  <div style={{ height: 240, overflow: 'hidden' }}>
                    <img src={a.image} alt={a.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} />
                  </div>
                  <div style={{ padding: 24 }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, marginBottom: 8 }}>{a.title}</h3>
                    <span className="btn-lavender" style={{ fontSize: 11, padding: '8px 20px' }}>Read Article →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark fade-up">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 36, marginBottom: 16 }}>
            Ready to start planning?
          </h2>
          <Link to="/plan" className="btn-lavender">Start Planning</Link>
        </div>
      </section>

      <Footer />
      <StickyBottomBar />
      <WhatsAppButton />

      <style>{`
        @media (max-width: 768px) {
          .insp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
