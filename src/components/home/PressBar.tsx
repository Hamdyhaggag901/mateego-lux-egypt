import { PRESS } from '@/data/siteData';

export default function PressBar() {
  return (
    <section className="section-black fade-up">
      <div className="container" style={{ textAlign: 'center' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 24,
          justifyContent: 'center', marginBottom: 32,
        }}>
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.2)' }} />
          <span style={{
            color: 'rgba(255,255,255,0.5)', fontSize: 12, letterSpacing: 2,
            textTransform: 'uppercase', whiteSpace: 'nowrap',
          }}>
            As seen in
          </span>
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.2)' }} />
        </div>
        <div className="press-logos">
          {PRESS.map((name) => (
            <span key={name} className="press-logo">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
