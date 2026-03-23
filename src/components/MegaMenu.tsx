import { Link } from 'react-router-dom';
import { DESTINATIONS, JOURNEYS } from '@/data/siteData';

const megaData: Record<string, { heading: string; links: { label: string; href: string }[] }[]> = {
  JOURNEYS: [
    { heading: 'BY STYLE', links: JOURNEYS.slice(0, 3).map(j => ({ label: j.title, href: `/journeys/${j.slug}` })) },
    { heading: 'BY INTEREST', links: [{ label: 'Ancient History', href: '/journeys' }, { label: 'River Cruises', href: '/journeys' }, { label: 'Desert Expeditions', href: '/journeys' }] },
    { heading: 'BY DURATION', links: [{ label: '7–8 Days', href: '/journeys' }, { label: '10–12 Days', href: '/journeys' }, { label: '14+ Days', href: '/journeys' }] },
    { heading: 'POPULAR', links: JOURNEYS.slice(3, 6).map(j => ({ label: j.title, href: `/journeys/${j.slug}` })) },
    { heading: 'PLAN YOUR TRIP', links: [{ label: 'Trip Planner', href: '/plan' }, { label: 'Contact Us', href: '/contact' }, { label: 'When to Visit', href: '/journeys' }] },
  ],
  EXPERIENCES: [
    { heading: 'CULTURE', links: [{ label: 'Private Temple Tours', href: '/journeys' }, { label: 'Cooking Classes', href: '/journeys' }, { label: 'Nubian Villages', href: '/journeys' }] },
    { heading: 'ADVENTURE', links: [{ label: 'Desert Camping', href: '/journeys' }, { label: 'Hot Air Balloons', href: '/journeys' }, { label: 'Diving & Snorkeling', href: '/journeys' }] },
    { heading: 'RELAXATION', links: [{ label: 'Nile Cruises', href: '/journeys' }, { label: 'Spa & Wellness', href: '/journeys' }, { label: 'Beach Retreats', href: '/journeys' }] },
    { heading: 'FAMILY', links: [{ label: 'Kid-Friendly Tours', href: '/journeys' }, { label: 'Archaeology Workshops', href: '/journeys' }] },
    { heading: 'LUXURY', links: [{ label: 'Heritage Hotels', href: '/journeys' }, { label: 'Private Yacht', href: '/journeys' }] },
  ],
  INSPIRATION: [
    { heading: 'GUIDES', links: [{ label: 'Best Time to Visit', href: '/journeys' }, { label: 'First Timer\'s Guide', href: '/journeys' }, { label: 'Packing Tips', href: '/journeys' }] },
    { heading: 'STORIES', links: [{ label: 'Hidden Gems of Luxor', href: '/journeys' }, { label: 'Nile Cruise Guide', href: '/journeys' }] },
    { heading: 'HOTELS', links: [{ label: '19 Top Hotels', href: '/journeys' }, { label: 'Boutique Stays', href: '/journeys' }] },
    { heading: 'TRAVEL TIPS', links: [{ label: 'Visa Information', href: '/journeys' }, { label: 'Health & Safety', href: '/journeys' }] },
    { heading: 'MORE', links: [{ label: 'Photo Gallery', href: '/journeys' }, { label: 'Travel Blog', href: '/journeys' }] },
  ],
  'ABOUT EGYPT': [
    { heading: 'OVERVIEW', links: [{ label: 'History', href: '/about' }, { label: 'Culture', href: '/about' }, { label: 'Geography', href: '/about' }] },
    { heading: 'DESTINATIONS', links: DESTINATIONS.slice(0, 4).map(d => ({ label: d.name, href: `/destinations/${d.slug}` })) },
    { heading: 'MORE DESTINATIONS', links: DESTINATIONS.slice(4).map(d => ({ label: d.name, href: `/destinations/${d.slug}` })) },
    { heading: 'PRACTICAL', links: [{ label: 'Currency', href: '/about' }, { label: 'Language', href: '/about' }, { label: 'Weather', href: '/about' }] },
    { heading: 'GETTING THERE', links: [{ label: 'Flights', href: '/about' }, { label: 'Visas', href: '/about' }] },
  ],
  'ABOUT US': [
    { heading: 'OUR STORY', links: [{ label: 'About Mateego', href: '/about' }, { label: 'Our Team', href: '/about' }, { label: 'Our Values', href: '/about' }] },
    { heading: 'WHY US', links: [{ label: 'Tailor-Made Travel', href: '/about' }, { label: 'Responsible Tourism', href: '/about' }] },
    { heading: 'PRESS', links: [{ label: 'In the Media', href: '/about' }, { label: 'Awards', href: '/about' }] },
    { heading: 'CONTACT', links: [{ label: 'Get in Touch', href: '/contact' }, { label: 'Careers', href: '/about' }] },
    { heading: 'LEGAL', links: [{ label: 'Privacy Policy', href: '/about' }, { label: 'Terms', href: '/about' }] },
  ],
};

interface Props {
  activeSection: string;
  onClose: () => void;
}

export default function MegaMenu({ activeSection, onClose }: Props) {
  const cols = megaData[activeSection] || [];

  return (
    <>
      <div onClick={onClose} style={{
        position: 'fixed', inset: 0, zIndex: 98, background: 'transparent',
      }} />
      <div style={{
        position: 'fixed', top: 100, left: 0, right: 0, zIndex: 99,
        background: '#1a1a1a', padding: '40px 60px',
        animation: 'megaSlide 0.3s ease',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols.length}, 1fr)`, gap: 40 }}>
          {cols.map((col) => (
            <div key={col.heading}>
              <div style={{
                color: '#B9985A', fontSize: 11, fontWeight: 700, letterSpacing: 2,
                marginBottom: 16, textTransform: 'uppercase',
              }}>
                {col.heading}
              </div>
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={onClose}
                  style={{
                    display: 'block', color: '#fff', fontSize: 14, padding: '6px 0',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#B9985A')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes megaSlide {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
