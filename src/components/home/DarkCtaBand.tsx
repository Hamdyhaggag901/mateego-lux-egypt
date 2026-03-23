import { Link } from 'react-router-dom';

export default function DarkCtaBand() {
  return (
    <section className="section-dark fade-up">
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 40, flexWrap: 'wrap', textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)', color: '#fff',
          fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 300,
        }}>
          Your adventure starts <em>now</em>
        </h2>
        <Link to="/plan" className="btn-lavender">Start Planning</Link>
      </div>
    </section>
  );
}
