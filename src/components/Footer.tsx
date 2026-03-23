import { Link } from 'react-router-dom';
import { DESTINATIONS, JOURNEYS, PRESS } from '@/data/siteData';

export default function Footer() {
  return (
    <footer>
      <div style={{ background: '#1a1a1a', padding: '64px 40px 40px' }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40,
        }} className="footer-grid">
          {/* Newsletter */}
          <div>
            <div className="gold-label" style={{ marginBottom: 20 }}>STAY INSPIRED</div>
            <input placeholder="First Name" style={inputStyle} />
            <input placeholder="Last Name" style={inputStyle} />
            <input placeholder="Email Address" type="email" style={inputStyle} />
            <label style={{ display: 'flex', gap: 8, color: '#999', fontSize: 12, margin: '12px 0' }}>
              <input type="checkbox" />
              I agree to receive marketing emails
            </label>
            <button className="btn-lavender" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
              Sign Up
            </button>
            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              <div style={badgeStyle}>Condé Nast<br/>2026</div>
              <div style={badgeStyle}>Condé Nast<br/>2025</div>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <div className="gold-label" style={{ marginBottom: 20 }}>DESTINATIONS</div>
            {DESTINATIONS.map((d) => (
              <Link key={d.slug} to={`/destinations/${d.slug}`} style={footerLink}>
                {d.name}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div className="gold-label" style={{ marginBottom: 20 }}>GET IN TOUCH</div>
            <div style={{ color: '#ccc', fontSize: 14, lineHeight: 2 }}>
              +1 (800) MATEEGO<br/>
              enquire@mateegoexplorers.com<br/>
              press@mateegoexplorers.com
            </div>
            <div style={{ display: 'flex', gap: 16, marginTop: 16 }}>
              {['FB', 'IG', 'TW', 'YT'].map((s) => (
                <span key={s} style={{
                  width: 32, height: 32, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#ccc', fontSize: 11,
                }}>{s}</span>
              ))}
            </div>
            <div style={{ marginTop: 16, color: '#00B67A', fontSize: 14 }}>★★★★★ Trustpilot</div>
          </div>

          {/* Journeys */}
          <div>
            <div className="gold-label" style={{ marginBottom: 20 }}>JOURNEYS</div>
            {JOURNEYS.map((j) => (
              <Link key={j.slug} to={`/journeys/${j.slug}`} style={footerLink}>
                {j.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        background: '#111', padding: '16px 40px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 12,
      }}>
        <span style={{
          fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: '#fff', fontSize: 20,
        }}>
          Mateego
        </span>
        <span style={{ color: '#666', fontSize: 12 }}>
          Privacy · Terms · © 2026 Mateego Explorers
        </span>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '10px 16px', borderRadius: 50,
  border: '1px solid rgba(255,255,255,0.2)', background: 'transparent',
  color: '#fff', fontSize: 13, marginBottom: 8, outline: 'none',
};

const footerLink: React.CSSProperties = {
  display: 'block', color: '#ccc', fontSize: 14, padding: '4px 0',
  transition: 'color 0.2s',
};

const badgeStyle: React.CSSProperties = {
  width: 56, height: 56, borderRadius: '50%', background: '#C41E3A',
  color: '#fff', fontSize: 9, fontWeight: 700, textAlign: 'center',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  lineHeight: 1.3,
};
