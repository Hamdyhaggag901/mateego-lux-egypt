import { useState, useEffect, useCallback } from 'react';
import { IMAGES } from '@/data/siteData';

const cards = [
  { title: 'Classic Egypt', image: IMAGES.pyramids },
  { title: 'Nile Cruise', image: IMAGES.nile },
  { title: 'White Desert', image: IMAGES.desert },
  { title: 'Luxor Temples', image: IMAGES.temple },
];

export default function YourTripSection() {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning || index === active) return;
    setIsTransitioning(true);
    setActive(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [active, isTransitioning]);

  const next = useCallback(() => goTo((active + 1) % cards.length), [active, goTo]);
  const prev = useCallback(() => goTo((active - 1 + cards.length) % cards.length), [active, goTo]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="section-cream fade-up">
      <div className="container" style={{ textAlign: 'center', marginBottom: 48 }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 52px)',
          marginBottom: 16,
        }}>
          Your Journey. Your Egypt. <em>Your Story.</em>
        </h2>
        <p style={{ color: '#6b6259', maxWidth: 800, margin: '0 auto', lineHeight: 1.8, fontSize: 16 }}>
          Every Egypt travel experience we craft is uniquely yours. Our expert Egypt tour specialists combine first-hand knowledge, honest advice, and deep local connections to design private Egypt trips that go beyond the ordinary — from the pyramids of Giza to the silence of the White Desert.
        </p>
      </div>

      {/* Slider viewport */}
      <div
        style={{ position: 'relative', overflow: 'hidden', cursor: 'grab' }}
        onPointerDown={(e) => {
          const startX = e.clientX;
          const onUp = (ev: PointerEvent) => {
            const diff = ev.clientX - startX;
            if (diff > 60) prev();
            else if (diff < -60) next();
            window.removeEventListener('pointerup', onUp);
          };
          window.addEventListener('pointerup', onUp);
        }}
      >
        <div style={{
          display: 'flex',
          transition: 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)',
          transform: `translateX(calc(50% - ${active * 60}vw - 30vw))`,
        }}>
          {cards.map((card, i) => {
            const isActive = i === active;
            return (
              <div
                key={card.title}
                onClick={() => goTo(i)}
                style={{
                  flex: '0 0 60vw',
                  height: 520,
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 4,
                  opacity: isActive ? 1 : 0.7,
                  transform: isActive ? 'scale(1.03)' : 'scale(0.95)',
                  boxShadow: isActive ? '0 30px 80px rgba(0,0,0,0.4)' : '0 8px 30px rgba(0,0,0,0.15)',
                  transition: 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 500ms ease, box-shadow 500ms ease',
                  cursor: isActive ? 'default' : 'pointer',
                  zIndex: isActive ? 2 : 1,
                }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  draggable={false}
                />
                {/* Inset outline */}
                <div style={{
                  position: 'absolute', inset: 0, borderRadius: 4,
                  boxShadow: 'inset 0 0 0 12px rgba(255,255,255,0.15)',
                  pointerEvents: 'none',
                }} />
                {/* Bottom gradient */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  height: '50%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                  pointerEvents: 'none',
                }} />
                {/* Content */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '28px 28px',
                  display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 14, color: '#fff' }}>📍</span>
                    <span style={{
                      fontFamily: 'var(--font-heading)', fontSize: 26,
                      color: '#fff', fontStyle: 'italic', fontWeight: 400,
                    }}>
                      {card.title}
                    </span>
                  </div>
                  <button style={{
                    width: 32, height: 32, borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.5)',
                    background: 'rgba(255,255,255,0.15)',
                    color: '#fff', fontSize: 16,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', transition: 'background 0.2s',
                  }}>
                    →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress bar + dots */}
      <div style={{ maxWidth: 600, margin: '32px auto 0', padding: '0 40px' }}>
        {/* Progress bar */}
        <div style={{
          width: '100%', height: 2, background: '#ddd',
          borderRadius: 1, overflow: 'hidden', marginBottom: 16,
        }}>
          <div style={{
            height: '100%',
            width: `${((active + 1) / cards.length) * 100}%`,
            background: 'var(--gold)',
            borderRadius: 1,
            transition: 'width 500ms cubic-bezier(0.16, 1, 0.3, 1)',
          }} />
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: 8, height: 8, borderRadius: '50%', border: 'none',
                background: i === active ? 'var(--gold)' : '#ddd',
                cursor: 'pointer', padding: 0,
                transition: 'background 0.3s',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
