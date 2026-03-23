import { useState } from 'react';
import { useScrollFade } from '@/hooks/useScrollFade';
import Navbar from '@/components/Navbar';

const interests = [
  'Seeing the Pyramids', 'Sailing the Nile', 'Sleeping under stars',
  'Exploring temples', 'Nubian village', 'Hot air balloon',
  'Hidden oases', 'Private Egyptologist', 'Local food & culture',
];

const budgetMarks = ['$3,500', '$5,000', '$7,500', '$10,000', '$15,000', '$20,000', '$35,000', '$50,000+'];
const travellerTypes = ['Couple', 'Family', 'Group of Friends', 'Solo', '2+ Families', 'Other'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function TripPlanner() {
  useScrollFade();
  const [step, setStep] = useState(1);
  const [destinations, setDestinations] = useState<string[]>([]);
  const [destInput, setDestInput] = useState('');
  const [year, setYear] = useState(2026);
  const [selectedMonths, setSelectedMonths] = useState<number[]>([]);
  const [travelType, setTravelType] = useState('');
  const [travellers, setTravellers] = useState(2);
  const [under18, setUnder18] = useState(0);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [budgetIdx, setBudgetIdx] = useState(3);
  const [form, setForm] = useState({ first: '', last: '', phone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const addDest = () => {
    if (destInput.trim() && !destinations.includes(destInput.trim())) {
      setDestinations([...destinations, destInput.trim()]);
      setDestInput('');
    }
  };

  const toggleMonth = (i: number) => {
    setSelectedMonths((prev) => prev.includes(i) ? prev.filter((m) => m !== i) : [...prev, i]);
  };

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) => {
      if (prev.includes(interest)) return prev.filter((i) => i !== interest);
      if (prev.length >= 3) return prev;
      return [...prev, interest];
    });
  };

  const next = () => setStep((s) => Math.min(7, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  return (
    <div style={{ minHeight: '100vh', background: '#F5F0E8' }}>
      <Navbar />

      {/* Progress dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 12, padding: '40px 0 20px' }}>
        {Array.from({ length: 7 }, (_, i) => (
          <div key={i} style={{
            width: 10, height: 10, borderRadius: '50%',
            background: i + 1 <= step ? '#B9985A' : '#ddd',
            transition: 'background 0.3s',
          }} />
        ))}
      </div>

      <div className="container" style={{ maxWidth: 700, paddingBottom: 80 }}>
        {/* Step 1 */}
        {step === 1 && (
          <div className="fade-up visible" style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 52px)', marginBottom: 32 }}>
              <em>Where</em> would you like to travel?
            </h2>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 24 }}>
              <input
                value={destInput}
                onChange={(e) => setDestInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addDest()}
                placeholder="e.g. Cairo, Luxor, Aswan..."
                style={{
                  padding: '12px 24px', borderRadius: 50, border: '1px solid #ccc',
                  fontSize: 15, width: 300, outline: 'none', background: '#fff',
                }}
              />
              <button className="btn-lavender" onClick={addDest}>Add</button>
            </div>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
              {destinations.map((d) => (
                <span key={d} className="pill-gold active" style={{ cursor: 'pointer' }}
                  onClick={() => setDestinations(destinations.filter((x) => x !== d))}>
                  {d} ✕
                </span>
              ))}
            </div>
            <button className="btn-lavender" onClick={next} disabled={destinations.length === 0}>
              Next Step
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="fade-up visible" style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 52px)', marginBottom: 32 }}>
              <em>When</em> would you like to travel?
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, marginBottom: 32 }}>
              <button onClick={() => setYear(year - 1)} style={yearBtn}>‹</button>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: 32 }}>{year}</span>
              <button onClick={() => setYear(year + 1)} style={yearBtn}>›</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, maxWidth: 400, margin: '0 auto 32px' }}>
              {months.map((m, i) => (
                <button key={m} onClick={() => toggleMonth(i)} style={{
                  padding: '12px 0', borderRadius: 8, fontSize: 14,
                  border: selectedMonths.includes(i) ? '2px solid #B9985A' : '1px solid #ccc',
                  background: selectedMonths.includes(i) ? 'rgba(185,152,90,0.1)' : '#fff',
                  cursor: 'pointer', transition: 'all 0.2s',
                }}>
                  {m}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button onClick={prev} style={backBtn}>Back</button>
              <button className="btn-lavender" onClick={next} disabled={selectedMonths.length === 0}>Next Step</button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="fade-up visible" style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 52px)', marginBottom: 32 }}>
              Who are you travelling <em>to Egypt</em> with?
            </h2>
            <div style={{ maxWidth: 400, margin: '0 auto 32px' }}>
              {travellerTypes.map((t) => (
                <button key={t} onClick={() => setTravelType(t)} style={{
                  display: 'block', width: '100%', padding: '16px 24px',
                  border: '1px solid #ccc', borderLeft: travelType === t ? '4px solid #B9985A' : '1px solid #ccc',
                  background: '#fff', textAlign: 'left', fontSize: 16,
                  marginBottom: -1, cursor: 'pointer',
                  fontWeight: travelType === t ? 600 : 400,
                }}>
                  {t}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button onClick={prev} style={backBtn}>Back</button>
              <button className="btn-lavender" onClick={next} disabled={!travelType}>Next Step</button>
            </div>
          </div>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <div className="fade-up visible" style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 48px)', marginBottom: 32 }}>
              How many travellers?
            </h2>
            <div style={{ display: 'flex', gap: 24, justifyContent: 'center', marginBottom: 32 }}>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontSize: 14, color: '#6b6259' }}>Total travellers</span>
                <select value={travellers} onChange={(e) => setTravellers(+e.target.value)}
                  style={selectStyle}>
                  {Array.from({ length: 21 }, (_, i) => <option key={i} value={i}>{i}</option>)}
                </select>
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontSize: 14, color: '#6b6259' }}>Under 18</span>
                <select value={under18} onChange={(e) => setUnder18(+e.target.value)}
                  style={selectStyle}>
                  {Array.from({ length: 11 }, (_, i) => <option key={i} value={i}>{i}</option>)}
                </select>
              </label>
            </div>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button onClick={prev} style={backBtn}>Back</button>
              <button className="btn-lavender" onClick={next}>Next Step</button>
            </div>
          </div>
        )}

        {/* Step 5 */}
        {step === 5 && (
          <div className="fade-up visible" style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 48px)', marginBottom: 12 }}>
              Which of these are most <em>appealing?</em>
            </h2>
            <p style={{ color: '#6b6259', marginBottom: 32 }}>Select up to 3</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginBottom: 32 }}>
              {interests.map((interest) => (
                <button key={interest} onClick={() => toggleInterest(interest)}
                  className={`pill-gold ${selectedInterests.includes(interest) ? 'active' : ''}`}
                  style={{
                    fontSize: 14, padding: '10px 20px',
                    color: selectedInterests.includes(interest) ? '#B9985A' : '#6b6259',
                    borderColor: selectedInterests.includes(interest) ? '#B9985A' : '#ccc',
                    cursor: 'pointer',
                  }}>
                  {interest}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button onClick={prev} style={backBtn}>Back</button>
              <button className="btn-lavender" onClick={next}>Next Step</button>
            </div>
          </div>
        )}

        {/* Step 6 */}
        {step === 6 && (
          <div className="fade-up visible" style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 48px)', marginBottom: 32 }}>
              What is your <em>budget?</em>
            </h2>
            <div style={{ maxWidth: 500, margin: '0 auto 16px' }}>
              <input
                type="range" min={0} max={budgetMarks.length - 1} value={budgetIdx}
                onChange={(e) => setBudgetIdx(+e.target.value)}
                style={{ width: '100%', accentColor: '#B9985A' }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 500, margin: '0 auto 32px' }}>
              {budgetMarks.map((m, i) => (
                <span key={m} style={{ fontSize: 11, color: i === budgetIdx ? '#B9985A' : '#999', fontWeight: i === budgetIdx ? 700 : 400 }}>{m}</span>
              ))}
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: 36, marginBottom: 32, color: '#B9985A' }}>
              {budgetMarks[budgetIdx]} per person
            </div>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button onClick={prev} style={backBtn}>Back</button>
              <button className="btn-lavender" onClick={next}>Next Step</button>
            </div>
          </div>
        )}

        {/* Step 7 */}
        {step === 7 && !submitted && (
          <div className="fade-up visible" style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 48px)', marginBottom: 32 }}>
              <em>Finally,</em> how should we contact you?
            </h2>
            <div style={{ maxWidth: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
              <input placeholder="First Name" value={form.first} onChange={(e) => setForm({ ...form, first: e.target.value })} style={formInput} />
              <input placeholder="Last Name" value={form.last} onChange={(e) => setForm({ ...form, last: e.target.value })} style={formInput} />
              <div style={{ display: 'flex', gap: 8 }}>
                <span style={{ ...formInput, width: 80, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🇪🇬 +20</span>
                <input placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} style={{ ...formInput, flex: 1 }} />
              </div>
              <input placeholder="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={formInput} />
            </div>
            <div style={{ maxWidth: 400, margin: '0 auto 24px', textAlign: 'left' }}>
              {['I consent to receive emails', 'I consent to receive SMS', 'I consent to receive phone calls'].map((c) => (
                <label key={c} style={{ display: 'flex', gap: 8, fontSize: 13, color: '#6b6259', marginBottom: 8 }}>
                  <input type="checkbox" /> {c}
                </label>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button onClick={prev} style={backBtn}>Back</button>
              <button className="btn-lavender" onClick={() => setSubmitted(true)}
                disabled={!form.first || !form.email}>
                Submit
              </button>
            </div>
          </div>
        )}

        {step === 7 && submitted && (
          <div className="fade-up visible" style={{ textAlign: 'center', padding: '80px 0' }}>
            <div style={{ fontSize: 48, marginBottom: 24 }}>✨</div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 40, marginBottom: 16 }}>
              Thank you, {form.first}!
            </h2>
            <p style={{ color: '#6b6259', fontSize: 16, lineHeight: 1.7 }}>
              Your Travel Designer will be in touch within 24 hours to begin crafting your perfect Egyptian adventure.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const yearBtn: React.CSSProperties = {
  width: 40, height: 40, borderRadius: '50%', border: '1px solid #ccc',
  background: '#fff', fontSize: 20, cursor: 'pointer',
};

const backBtn: React.CSSProperties = {
  padding: '12px 32px', borderRadius: 50, border: '1px solid #ccc',
  background: '#fff', fontSize: 13, fontWeight: 700, letterSpacing: 1,
  cursor: 'pointer',
};

const selectStyle: React.CSSProperties = {
  padding: '12px 16px', borderRadius: 8, border: '1px solid #ccc',
  background: '#fff', fontSize: 16, minWidth: 140,
};

const formInput: React.CSSProperties = {
  padding: '12px 20px', borderRadius: 50, border: '1px solid #ccc',
  fontSize: 15, background: '#fff', outline: 'none',
};
