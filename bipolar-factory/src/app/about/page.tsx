const values = [
  'Innovation',
  'Quality',
  'Continuous Learning',
  'Commitment to Customers',
  'Passion',
  'Humility'
]

export default function AboutPage() {
  return (
    <main style={{ background: '#0a0a0a', color: '#f0ede6', minHeight: '100vh', padding: '56px 48px' }}>
      <p style={{ color: '#e8ff47', letterSpacing: '0.12em', fontSize: 12, marginBottom: 12 }}>ABOUT US</p>
      <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(36px, 5vw, 64px)', marginBottom: 20 }}>We Build For People</h1>

      <p style={{ color: '#6b6b6b', maxWidth: 920, lineHeight: 1.75, marginBottom: 18 }}>
        Bipolar Factory is a technology team founded in 2020 to transform difficult, real-world challenges into practical software products that improve everyday systems.
      </p>
      <p style={{ color: '#6b6b6b', maxWidth: 920, lineHeight: 1.75, marginBottom: 18 }}>
        We serve industries including retail, manufacturing, civil aviation, road safety, entertainment, and content creation with solutions built for long-term value.
      </p>
      <p style={{ color: '#6b6b6b', maxWidth: 920, lineHeight: 1.75, marginBottom: 30 }}>
        Our mission is to create positive change through innovation and build globally relevant, make-in-India technology with a strong customer-first partnership model.
      </p>

      <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 30, marginBottom: 12 }}>Our Values</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12, maxWidth: 980 }}>
        {values.map((value) => (
          <div key={value} style={{ background: '#111111', border: '0.5px solid #1f1f1f', borderRadius: 10, padding: '14px 16px' }}>
            {value}
          </div>
        ))}
      </div>
    </main>
  )
}
