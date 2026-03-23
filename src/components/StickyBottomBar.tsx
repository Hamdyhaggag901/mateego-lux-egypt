import { Link } from 'react-router-dom';

export default function StickyBottomBar() {
  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 90,
      background: '#1a1a1a', padding: '14px 40px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <span style={{
        color: '#fff', fontFamily: 'var(--font-heading)', fontStyle: 'italic',
        fontSize: 18,
      }}>
        Where would you like to travel?
      </span>
      <Link to="/plan" className="btn-lavender" style={{ fontSize: 11, padding: '10px 24px' }}>
        Start Planning
      </Link>
    </div>
  );
}
