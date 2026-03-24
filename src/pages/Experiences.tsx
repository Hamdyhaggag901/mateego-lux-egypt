import { useScrollFade } from '@/hooks/useScrollFade';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyBottomBar from '@/components/StickyBottomBar';
import WhatsAppButton from '@/components/WhatsAppButton';
import { IMAGES, JOURNEYS } from '@/data/siteData';

const experiences = [
  { title: 'Private Temple Tours', description: 'Explore Egypt\'s greatest temples with a dedicated Egyptologist guide, enjoying exclusive access and in-depth knowledge that brings the ancient world to life.', image: IMAGES.temple, icon: '🏛️' },
  { title: 'Nile Cruises & Sailing', description: 'Sail the Nile on a luxury dahabiya or boutique vessel, stopping at ancient temples and riverside villages unreachable by road.', image: IMAGES.nile, icon: '⛵' },
  { title: 'Desert Camping & Safari', description: 'Sleep under star-filled skies in the White Desert, explore Siwa Oasis, and traverse Egypt\'s vast Western Desert with experienced Bedouin guides.', image: IMAGES.desert, icon: '🏜️' },
  { title: 'Hot Air Balloon Rides', description: 'Float silently over Luxor\'s West Bank at dawn, watching the sun rise over the Valley of the Kings and the temples below.', image: IMAGES.luxor, icon: '🎈' },
  { title: 'Culinary Experiences', description: 'From cooking classes in Cairo to street food tours and private dining in historic settings — taste the authentic flavors of Egypt.', image: IMAGES.cairo, icon: '🍽️' },
  { title: 'Diving & Snorkeling', description: 'Discover the Red Sea\'s world-class coral reefs, from the Blue Hole in Dahab to the marine parks of Sharm El Sheikh.', image: IMAGES.redSea, icon: '🤿' },
];

export default function Experiences() {
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
            Unforgettable <em>Experiences</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 16, maxWidth: 600, marginTop: 16, lineHeight: 1.6 }}>
            From private temple tours with expert Egyptologists to desert safaris under starlit skies — every experience is crafted to create lasting memories.
          </p>
        </div>
      </section>

      <section className="fade-up" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 40 }} className="exp-grid">
            {experiences.map((exp) => (
              <div key={exp.title} style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
                <div style={{ flex: '0 0 200px', height: 160, borderRadius: 8, overflow: 'hidden' }}>
                  <img src={exp.image} alt={exp.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{exp.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, marginBottom: 8 }}>{exp.title}</h3>
                  <p style={{ color: '#6b6259', fontSize: 14, lineHeight: 1.7 }}>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark fade-up">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 36, marginBottom: 16 }}>
            Create your perfect experience
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24, maxWidth: 600, margin: '0 auto 24px' }}>
            Every trip is fully customizable. Tell us what excites you and we'll design the perfect Egypt experience.
          </p>
          <Link to="/plan" className="btn-lavender">Start Planning</Link>
        </div>
      </section>

      <section className="section-cream fade-up">
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, textAlign: 'center', marginBottom: 40 }}>Related Journeys</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }} className="exp-grid">
            {JOURNEYS.slice(0, 3).map((j) => (
              <Link key={j.slug} to={`/journeys/${j.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ borderRadius: 8, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
                  <img src={j.image} alt={j.title} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                  <div style={{ padding: 20 }}>
                    <div style={{ color: '#6b6259', fontSize: 12 }}>{j.days} days · From ${j.price.toLocaleString()} pp</div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, marginTop: 8 }}>{j.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <StickyBottomBar />
      <WhatsAppButton />

      <style>{`
        @media (max-width: 768px) {
          .exp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
