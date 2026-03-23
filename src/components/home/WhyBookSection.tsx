const items = [
  {
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="1.5">
        <path d="M12 52c4-8 12-12 20-12s16 4 20 12" />
        <circle cx="32" cy="24" r="10" />
        <path d="M20 28c-4 2-8 6-8 12" />
        <path d="M44 28c4 2 8 6 8 12" />
        <path d="M28 18c0-4 2-8 4-10" />
        <path d="M36 18c0-4-2-8-4-10" />
      </svg>
    ),
    title: 'Original experiences',
    text: 'We go beyond the guidebook to craft moments that reveal the real Egypt — private temple openings, dinner with a Nubian family, or stargazing in the White Desert.',
  },
  {
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="1.5">
        <rect x="8" y="12" width="32" height="40" rx="2" />
        <path d="M16 20h16M16 28h12M16 36h14" />
        <circle cx="48" cy="36" r="12" />
        <path d="M48 28v8l4 4" />
        <path d="M44 24l8 0" />
      </svg>
    ),
    title: 'The personal touch',
    text: 'Your dedicated Travel Designer knows Egypt intimately. Every itinerary is built from scratch around your interests, pace, and travel style.',
  },
  {
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#111" strokeWidth="1.5">
        <path d="M32 8c-8 0-16 8-16 20s16 28 16 28 16-16 16-28S40 8 32 8z" />
        <circle cx="32" cy="28" r="6" />
        <path d="M24 44c-2 2-4 6-4 8h24c0-2-2-6-4-8" />
      </svg>
    ),
    title: 'Responsible travel',
    text: 'We support local communities, protect heritage sites, and partner with eco-conscious lodges to ensure tourism benefits the places we love.',
  },
];

export default function WhyBookSection() {
  return (
    <section className="section-cream fade-up">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 44px)',
          marginBottom: 56,
        }}>
          Why book with Mateego?
        </h2>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48,
        }} className="why-grid">
          {items.map((item) => (
            <div key={item.title} style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: 20, display: 'flex', justifyContent: 'center' }}>
                {item.icon}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-heading)', fontSize: 24,
                marginBottom: 12,
              }}>
                {item.title}
              </h3>
              <p style={{ color: '#6b6259', fontSize: 15, lineHeight: 1.7 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
