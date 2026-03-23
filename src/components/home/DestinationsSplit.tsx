import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DESTINATIONS } from '@/data/siteData';

export default function DestinationsSplit() {
  const [hovered, setHovered] = useState(0);

  return (
    <section className="fade-up" style={{ display: 'flex', minHeight: 600 }}>
      <div style={{
        flex: '1 1 50%', position: 'relative', overflow: 'hidden',
      }}>
        {DESTINATIONS.map((d, i) => (
          <img key={d.slug} src={d.image} alt={d.name} style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover',
            opacity: i === hovered ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }} />
        ))}
      </div>

      <div style={{
        flex: '1 1 50%', background: '#F5F0E8', padding: '64px 60px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}>
        <div className="gold-label">OUR DESTINATIONS</div>
        <div className="gold-divider" />
        <div style={{ marginTop: 24 }}>
          {DESTINATIONS.map((d, i) => (
            <Link
              key={d.slug}
              to={`/destinations/${d.slug}`}
              onMouseEnter={() => setHovered(i)}
              style={{
                display: 'block', fontFamily: 'var(--font-heading)',
                fontSize: 28, padding: '8px 0', color: '#111',
                fontWeight: i === hovered ? 600 : 400,
                transition: 'font-weight 0.2s',
              }}
            >
              {d.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
