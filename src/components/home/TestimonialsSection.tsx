import { useState } from 'react';
import { TESTIMONIALS } from '@/data/siteData';

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];

  return (
    <section className="section-cream fade-up">
      <div className="container" style={{ maxWidth: 800, textAlign: 'center' }}>
        <div style={{
          fontFamily: 'var(--font-heading)', fontStyle: 'italic',
          fontSize: 'clamp(22px, 3vw, 32px)', lineHeight: 1.5,
          color: '#111', marginBottom: 24,
        }}>
          &ldquo;{t.quote}&rdquo;
        </div>
        <div className="stars" style={{ marginBottom: 12 }}>
          {'★'.repeat(t.rating)}
        </div>
        <div style={{ color: '#6b6259', fontSize: 14, fontWeight: 700 }}>
          {t.author}, {t.location}
        </div>
        <div style={{ color: '#00B67A', fontSize: 12, marginTop: 4 }}>via Trustpilot</div>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 32, alignItems: 'center' }}>
          <button onClick={() => setIdx((idx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
            style={navBtn}>‹</button>
          <div className="carousel-dots" style={{ marginTop: 0 }}>
            {TESTIMONIALS.map((_, i) => (
              <button key={i} className={`carousel-dot ${i === idx ? 'active' : ''}`}
                onClick={() => setIdx(i)} />
            ))}
          </div>
          <button onClick={() => setIdx((idx + 1) % TESTIMONIALS.length)}
            style={navBtn}>›</button>
        </div>
      </div>
    </section>
  );
}

const navBtn: React.CSSProperties = {
  width: 36, height: 36, borderRadius: '50%', border: '1px solid #ccc',
  background: '#fff', fontSize: 20, cursor: 'pointer',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
};
