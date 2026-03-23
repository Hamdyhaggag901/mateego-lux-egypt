import { Link } from 'react-router-dom';
import { NAV_LINKS } from '@/data/siteData';

interface Props { onClose: () => void }

export default function MobileMenu({ onClose }: Props) {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 200, background: '#111',
      display: 'flex', flexDirection: 'column', padding: 40,
      animation: 'fadeIn 0.3s ease',
    }}>
      <button onClick={onClose} style={{
        alignSelf: 'flex-end', color: '#fff', fontSize: 28, marginBottom: 40,
      }}>✕</button>
      {NAV_LINKS.map((link) => (
        <Link
          key={link.label}
          to={link.href}
          onClick={onClose}
          style={{
            color: '#fff', fontSize: 24, fontFamily: 'var(--font-heading)',
            padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {link.label}
        </Link>
      ))}
      <Link to="/plan" onClick={onClose} className="btn-lavender" style={{ marginTop: 40, justifyContent: 'center' }}>
        Start Planning
      </Link>
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
      `}</style>
    </div>
  );
}
