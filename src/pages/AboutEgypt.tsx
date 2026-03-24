import { useScrollFade } from '@/hooks/useScrollFade';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyBottomBar from '@/components/StickyBottomBar';
import WhatsAppButton from '@/components/WhatsAppButton';
import { IMAGES, DESTINATIONS } from '@/data/siteData';

export default function AboutEgypt() {
  useScrollFade();

  return (
    <div style={{ paddingBottom: 60 }}>
      <Navbar />

      <section style={{
        height: 500, position: 'relative', display: 'flex', alignItems: 'flex-end',
        backgroundImage: `url(${IMAGES.pyramids})`, backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: 48 }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 'clamp(36px, 6vw, 60px)' }}>
            About <em>Egypt</em>
          </h1>
        </div>
      </section>

      <section className="fade-up" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 40, marginBottom: 24 }}>A Land of Timeless Wonders</h2>
          <p style={{ color: '#6b6259', lineHeight: 1.8, marginBottom: 16 }}>
            Egypt is a country where 5,000 years of civilization unfold before your eyes. From the Great Pyramids — the last surviving wonder of the ancient world — to the vibrant streets of modern Cairo, Egypt offers a depth of experience unlike anywhere else on Earth.
          </p>
          <p style={{ color: '#6b6259', lineHeight: 1.8, marginBottom: 16 }}>
            The Nile River, the lifeblood of Egyptian civilization, flows through a landscape of extraordinary contrasts: lush green valleys flanked by golden desert, ancient temples rising from palm-shaded banks, and colorful Nubian villages where traditions have remained unchanged for centuries.
          </p>
          <p style={{ color: '#6b6259', lineHeight: 1.8 }}>
            Whether you're drawn by the mysteries of the pharaohs, the warmth of Egyptian hospitality, the flavors of its cuisine, or the stark beauty of its deserts, Egypt has a way of getting under your skin and staying there forever.
          </p>
        </div>
      </section>

      <section className="section-cream fade-up">
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, textAlign: 'center', marginBottom: 48 }}>Explore Egypt's Destinations</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }} className="egypt-grid">
            {DESTINATIONS.map((d) => (
              <Link key={d.slug} to={`/destinations/${d.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ borderRadius: 8, overflow: 'hidden', position: 'relative', height: 280 }}>
                  <img src={d.image} alt={d.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.7))', padding: 20 }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 22 }}>{d.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="fade-up" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, marginBottom: 32 }}>Practical Information</h2>
          {[
            { title: 'Getting There', text: 'Cairo International Airport (CAI) is the main gateway, served by major airlines worldwide. Direct flights operate from London, New York, Dubai, and most European capitals. Luxor and Aswan also have international airports with seasonal connections.' },
            { title: 'Currency & Money', text: 'The Egyptian Pound (EGP) is the local currency. US dollars and euros are widely accepted at hotels and tourist shops. ATMs are readily available in cities. Credit cards work in major hotels and restaurants.' },
            { title: 'Language', text: 'Arabic is the official language, but English is widely spoken in tourist areas, hotels, and by guides. Learning a few Arabic phrases — "shukran" (thank you), "ahlan" (welcome) — is always appreciated.' },
            { title: 'Weather', text: 'Egypt enjoys a desert climate with very little rainfall. Winters (Nov–Feb) are mild and pleasant. Summers (Jun–Aug) are hot, especially in Upper Egypt. The Red Sea coast is warm year-round.' },
          ].map((item) => (
            <div key={item.title} style={{ marginBottom: 32 }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, marginBottom: 8 }}>{item.title}</h3>
              <p style={{ color: '#6b6259', lineHeight: 1.8 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-dark fade-up">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 36, marginBottom: 16 }}>
            Start planning your Egypt journey
          </h2>
          <Link to="/plan" className="btn-lavender">Start Planning</Link>
        </div>
      </section>

      <Footer />
      <StickyBottomBar />
      <WhatsAppButton />

      <style>{`
        @media (max-width: 768px) {
          .egypt-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .egypt-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
