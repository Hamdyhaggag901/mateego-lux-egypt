import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '@/data/siteData';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const [megaOpen, setMegaOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div style={{
        background: '#B9985A', height: 36, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '0 40px', fontSize: 12, color: '#fff',
        fontWeight: 400, letterSpacing: 1,
      }}>
        <span>+1 (800) MATEEGO</span>
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <button style={{ color: '#fff', fontSize: 12, letterSpacing: 1 }}>SEARCH</button>
          <button onClick={() => setMobileOpen(true)} style={{ color: '#fff', fontSize: 12, letterSpacing: 1 }}>
            MENU ☰
          </button>
        </div>
      </div>

      {/* Main nav */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: scrolled ? '#fff' : '#111111',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
        transition: 'background 0.2s, box-shadow 0.2s',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 40px', height: 64,
      }}>
        <Link to="/" style={{
          fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: 28,
          color: scrolled ? '#111' : '#fff', fontWeight: 500, letterSpacing: 1,
          transition: 'color 0.2s',
        }}>
          Mateego
        </Link>

        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="nav-center">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => setMegaOpen(megaOpen === link.label ? null : link.label)}
              style={{
                color: scrolled ? '#111' : '#fff', fontSize: 11, letterSpacing: 2,
                textTransform: 'uppercase', fontWeight: 400, transition: 'color 0.2s',
                background: 'none', border: 'none', cursor: 'pointer',
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        <Link to="/plan" className="btn-lavender" style={{ fontSize: 11, padding: '10px 24px' }}>
          Start Planning
        </Link>
      </nav>

      {megaOpen && <MegaMenu activeSection={megaOpen} onClose={() => setMegaOpen(null)} />}
      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}

      <style>{`
        @media (max-width: 768px) {
          .nav-center { display: none !important; }
        }
      `}</style>
    </>
  );
}
