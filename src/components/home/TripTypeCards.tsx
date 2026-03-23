import { Link } from 'react-router-dom';
import { IMAGES } from '@/data/siteData';

export default function TripTypeCards() {
  return (
    <section className="fade-up" style={{ display: 'flex', minHeight: 500 }}>
      <Link to="/journeys" style={{
        flex: 1, position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'flex-end',
      }}>
        <img src={IMAGES.pyramids} alt="Private Journeys" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
        }} />
        <div style={{
          position: 'relative', zIndex: 1, background: 'rgba(196,181,212,0.85)',
          padding: '32px 40px', margin: 24, borderRadius: 4,
        }}>
          <div style={{ color: '#fff', fontSize: 13, letterSpacing: 1, marginBottom: 4 }}>Tailor-made</div>
          <div style={{
            color: '#fff', fontFamily: 'var(--font-heading)',
            fontSize: 32, fontWeight: 400,
          }}>
            Private Journeys
          </div>
        </div>
      </Link>

      <Link to="/journeys/family-adventure" style={{
        flex: 1, position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end',
      }}>
        <img src={IMAGES.family} alt="Family Adventures" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
        }} />
        <div style={{
          position: 'relative', zIndex: 1, background: 'rgba(61,56,48,0.85)',
          padding: '32px 40px', margin: 24, borderRadius: 4,
        }}>
          <div style={{ color: '#ccc', fontSize: 13, letterSpacing: 1, marginBottom: 4 }}>Lasting memories</div>
          <div style={{
            color: '#fff', fontFamily: 'var(--font-heading)',
            fontSize: 32, fontWeight: 400,
          }}>
            Family Adventures
          </div>
        </div>
      </Link>

      <style>{`
        @media (max-width: 768px) {
          section.fade-up { flex-direction: column !important; }
        }
      `}</style>
    </section>
  );
}
