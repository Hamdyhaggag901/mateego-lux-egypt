import { useScrollFade } from '@/hooks/useScrollFade';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyBottomBar from '@/components/StickyBottomBar';
import WhatsAppButton from '@/components/WhatsAppButton';
import { IMAGES, TESTIMONIALS } from '@/data/siteData';

export default function About() {
  useScrollFade();

  return (
    <div style={{ paddingBottom: 60 }}>
      <Navbar />

      <section style={{
        height: 500, position: 'relative', display: 'flex', alignItems: 'flex-end',
        backgroundImage: `url(${IMAGES.temple})`, backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: 48 }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 'clamp(36px, 6vw, 60px)' }}>
            About <em>Mateego Explorers</em>
          </h1>
        </div>
      </section>

      <section className="fade-up" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 40, marginBottom: 24 }}>
            We believe travel should transform
          </h2>
          <p style={{ color: '#6b6259', lineHeight: 1.8, marginBottom: 16 }}>
            Mateego Explorers was founded on a simple belief: that travel to Egypt should be as extraordinary as the destination itself. We are a team of passionate Egyptologists, local insiders, and travel designers dedicated to crafting journeys that go far beyond the ordinary.
          </p>
          <p style={{ color: '#6b6259', lineHeight: 1.8, marginBottom: 16 }}>
            Every itinerary we create is deeply personal. We listen to your dreams, understand your travel style, and design experiences that reveal the real Egypt — from private temple visits at dawn to dinner with a Nubian family under the stars.
          </p>
          <p style={{ color: '#6b6259', lineHeight: 1.8 }}>
            Responsible tourism is at our core. We partner with local communities, support heritage preservation, and ensure that every journey benefits the places and people that make Egypt magical.
          </p>
        </div>
      </section>

      <section className="section-cream fade-up">
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, textAlign: 'center', marginBottom: 48 }}>
            Meet our Travel Designers
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, maxWidth: 700, margin: '0 auto' }}>
            {[{ name: 'Ahmed Hassan', role: 'Senior Travel Designer' }, { name: 'Sara El-Masry', role: 'Travel Designer' }].map((p) => (
              <div key={p.name} style={{ textAlign: 'center' }}>
                <div style={{
                  width: 120, height: 120, borderRadius: '50%', background: '#ddd',
                  margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 48,
                }}>👤</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 24, marginBottom: 4 }}>{p.name}</div>
                <div style={{ color: '#B9985A', fontSize: 12, letterSpacing: 1 }}>{p.role.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark fade-up">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 36, marginBottom: 16 }}>
            Start planning your journey
          </h2>
          <Link to="/plan" className="btn-lavender">Start Planning</Link>
        </div>
      </section>

      <section className="section-cream fade-up">
        <div className="container" style={{ maxWidth: 700, textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: 26, lineHeight: 1.5, marginBottom: 16 }}>
            &ldquo;{TESTIMONIALS[0].quote}&rdquo;
          </div>
          <div className="stars">★★★★★</div>
          <div style={{ color: '#6b6259', fontSize: 14, marginTop: 8 }}>{TESTIMONIALS[0].author}, {TESTIMONIALS[0].location}</div>
        </div>
      </section>

      <Footer />
      <StickyBottomBar />
      <WhatsAppButton />
    </div>
  );
}
