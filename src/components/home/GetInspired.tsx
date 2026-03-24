import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ARTICLES } from '@/data/siteData';

export default function GetInspired() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(2);

  const scroll = (dir: number) => {
    const next = Math.max(0, Math.min(ARTICLES.length - 1, active + dir));
    setActive(next);
    scrollRef.current?.scrollTo({ left: next * 280, behavior: 'smooth' });
  };

  return (
    <section className="section-cream fade-up">
      <div className="container" style={{ textAlign: 'center', marginBottom: 40 }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 44px)',
        }}>
          Get inspired
        </h2>
      </div>

      <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
        <button onClick={() => scroll(-1)} style={arrowBtn('left')}>‹</button>
        <button onClick={() => scroll(1)} style={arrowBtn('right')}>›</button>

        <div ref={scrollRef} style={{
          display: 'flex', gap: 20, overflowX: 'auto',
          scrollSnapType: 'x mandatory', scrollbarWidth: 'none',
          padding: '20px 0',
        }}>
          {ARTICLES.map((a, i) => (
            <Link to={`/articles/${a.slug}`} key={a.title} style={{ textDecoration: 'none', flex: '0 0 260px' }}>
              <div style={{
                borderRadius: 8, overflow: 'hidden',
                position: 'relative', height: 360, scrollSnapAlign: 'center',
                transform: i === active ? 'scale(1.05)' : 'scale(1)',
                boxShadow: i === active ? '0 12px 40px rgba(0,0,0,0.2)' : '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.4s, box-shadow 0.4s',
                cursor: 'pointer',
              }}>
                <img src={a.image} alt={a.title} style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                }} />
                {i === active && (
                  <div style={{
                    position: 'absolute', inset: 0,
                    border: '6px solid rgba(255,255,255,0.4)',
                    borderRadius: 8, pointerEvents: 'none',
                  }} />
                )}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  padding: 24,
                }}>
                  <div style={{
                    color: '#fff', fontFamily: 'var(--font-heading)',
                    fontSize: 20, marginBottom: 12,
                  }}>
                    {a.title}
                  </div>
                  <span className="btn-lavender" style={{ fontSize: 10, padding: '6px 16px' }}>
                    Read more
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="carousel-dots">
          {ARTICLES.map((_, i) => (
            <button key={i} className={`carousel-dot ${i === active ? 'active' : ''}`}
              onClick={() => { setActive(i); scrollRef.current?.scrollTo({ left: i * 280, behavior: 'smooth' }); }} />
          ))}
        </div>
      </div>
    </section>
  );
}

const arrowBtn = (side: 'left' | 'right'): React.CSSProperties => ({
  position: 'absolute', top: '45%', transform: 'translateY(-50%)',
  [side]: 0, zIndex: 2, width: 40, height: 40, borderRadius: '50%',
  background: 'rgba(255,255,255,0.9)', border: 'none', fontSize: 24,
  cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
});
