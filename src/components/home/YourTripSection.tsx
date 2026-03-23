import { useRef, useState } from 'react';
import { IMAGES } from '@/data/siteData';

const cards = [
  { title: 'Classic Egypt', image: IMAGES.pyramids },
  { title: 'Nile Cruise', image: IMAGES.nile },
  { title: 'White Desert', image: IMAGES.desert },
  { title: 'Luxor Temples', image: IMAGES.temple },
];

export default function YourTripSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scroll = (dir: number) => {
    if (!scrollRef.current) return;
    const w = 300;
    const next = Math.max(0, Math.min(cards.length - 1, active + dir));
    setActive(next);
    scrollRef.current.scrollTo({ left: next * w, behavior: 'smooth' });
  };

  return (
    <section className="section-cream fade-up">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 52px)',
          marginBottom: 48,
        }}>
          Your trip, <em>your story</em>
        </h2>
      </div>

      <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
        <button onClick={() => scroll(-1)} style={arrowStyle('left')}>‹</button>
        <button onClick={() => scroll(1)} style={arrowStyle('right')}>›</button>

        <div ref={scrollRef} style={{
          display: 'flex', gap: 20, overflowX: 'auto',
          scrollSnapType: 'x mandatory', scrollbarWidth: 'none',
          padding: '20px 0',
        }}>
          {cards.map((card, i) => (
            <div key={card.title} style={{
              flex: '0 0 280px', height: 380, borderRadius: 8,
              position: 'relative', overflow: 'hidden', scrollSnapAlign: 'center',
              transform: i === active ? 'scale(1.05)' : 'scale(1)',
              boxShadow: i === active ? '0 12px 40px rgba(0,0,0,0.2)' : '0 4px 16px rgba(0,0,0,0.1)',
              transition: 'transform 0.4s ease, box-shadow 0.4s ease',
            }}>
              <img src={card.image} alt={card.title} style={{
                width: '100%', height: '100%', objectFit: 'cover',
              }} />
              <div style={{
                position: 'absolute', inset: 0,
                border: '8px solid rgba(255,255,255,0.3)',
                borderRadius: 8, pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                padding: 24,
              }}>
                <div style={{ color: '#B9985A', fontSize: 16, marginBottom: 4 }}>📍</div>
                <div style={{
                  color: '#fff', fontFamily: 'var(--font-heading)',
                  fontSize: 22, fontWeight: 400,
                }}>
                  {card.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-dots">
          {cards.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === active ? 'active' : ''}`}
              onClick={() => { setActive(i); scrollRef.current?.scrollTo({ left: i * 300, behavior: 'smooth' }); }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const arrowStyle = (side: 'left' | 'right'): React.CSSProperties => ({
  position: 'absolute', top: '50%', transform: 'translateY(-50%)',
  [side]: 0, zIndex: 2, width: 40, height: 40, borderRadius: '50%',
  background: 'rgba(255,255,255,0.9)', border: 'none', fontSize: 24,
  cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
});
