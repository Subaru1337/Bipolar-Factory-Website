const services = [
  {
    title: 'Technical Consulting',
    text: 'Gain access to practical technical strategy tailored to your real business constraints and growth goals.'
  },
  {
    title: 'Digital Transformation',
    text: 'Redesign operations and delivery workflows with modern technology to improve speed, reliability, and impact.'
  },
  {
    title: 'Research',
    text: 'Stay ahead with dedicated exploration into emerging technologies, industry trends, and product opportunities.'
  },
  {
    title: 'Custom Application Development',
    text: 'Transform ideas into production-grade software with solutions crafted for your exact domain and requirements.'
  }
]

export default function ServicesPage() {
  return (
    <main style={{ background: '#0a0a0a', color: '#f0ede6', minHeight: '100vh', padding: '56px 48px' }}>
      <p style={{ color: '#e8ff47', letterSpacing: '0.12em', fontSize: 12, marginBottom: 12 }}>TECHNOLOGY PARTNERSHIP</p>
      <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(36px, 5vw, 64px)', marginBottom: 16 }}>Elevate Your Tech Game</h1>
      <p style={{ color: '#6b6b6b', maxWidth: 760, lineHeight: 1.7, marginBottom: 32 }}>
        We work as a dedicated technology partner and bring a wellspring of expertise across consulting, transformation, R&D, and custom product execution.
      </p>

      <section style={{ display: 'grid', gap: 12, maxWidth: 980 }}>
        {services.map((service) => (
          <article key={service.title} style={{ background: '#111111', border: '0.5px solid #1f1f1f', borderRadius: 12, padding: '20px 22px' }}>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 28, marginBottom: 8 }}>{service.title}</h2>
            <p style={{ color: '#6b6b6b', lineHeight: 1.7 }}>{service.text}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
