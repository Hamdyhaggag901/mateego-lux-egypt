import { useState } from 'react';
import { useScrollFade } from '@/hooks/useScrollFade';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyBottomBar from '@/components/StickyBottomBar';
import WhatsAppButton from '@/components/WhatsAppButton';
import { IMAGES } from '@/data/siteData';

export default function Contact() {
  useScrollFade();
  const [sent, setSent] = useState(false);

  return (
    <div style={{ paddingBottom: 60 }}>
      <Navbar />

      <section style={{
        height: 400, position: 'relative', display: 'flex', alignItems: 'flex-end',
        backgroundImage: `url(${IMAGES.nile})`, backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: 48 }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: 'clamp(36px, 6vw, 56px)' }}>
            Get in <em>touch</em>
          </h1>
        </div>
      </section>

      <section className="fade-up" style={{ padding: '80px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, maxWidth: 1000 }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, marginBottom: 24 }}>Contact us</h2>
            <div style={{ color: '#6b6259', lineHeight: 2, fontSize: 15 }}>
              <div><strong>Phone:</strong> +201121012676</div>
              <div><strong>Email:</strong> enquire@mateegoexplorers.com</div>
              <div><strong>Press:</strong> press@mateegoexplorers.com</div>
            </div>
            <div style={{ marginTop: 32 }}>
              <div className="gold-label" style={{ marginBottom: 12 }}>OFFICE HOURS</div>
              <div style={{ color: '#6b6259', fontSize: 14, lineHeight: 2 }}>
                Monday – Friday: 9am – 6pm EST<br />
                Saturday: 10am – 4pm EST<br />
                Sunday: Closed
              </div>
            </div>
          </div>

          {!sent ? (
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, marginBottom: 24 }}>Send us a message</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <input placeholder="Full Name" style={inputStyle} />
                <input placeholder="Email" type="email" style={inputStyle} />
                <input placeholder="Phone (optional)" style={inputStyle} />
                <textarea placeholder="Tell us about your dream trip..." rows={5} style={{ ...inputStyle, borderRadius: 12 }} />
                <button className="btn-lavender" onClick={() => setSent(true)} style={{ alignSelf: 'flex-start' }}>
                  Send Message
                </button>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✉️</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, marginBottom: 8 }}>Message sent!</h3>
              <p style={{ color: '#6b6259' }}>We'll get back to you within 24 hours.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <StickyBottomBar />
      <WhatsAppButton />
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  padding: '12px 20px', borderRadius: 50, border: '1px solid #ccc',
  fontSize: 15, outline: 'none', background: '#fff',
};
