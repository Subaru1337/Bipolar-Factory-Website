const studies = [
  {
    href: '/work/bihar-election',
    title: 'Automated Vote Counting',
    summary:
      'How we helped the Bihar State Election Commission improve transparency and efficiency by automating vote counting workflows.'
  }
]

export default function WorkPage() {
  return (
    <main style={{ background: '#0a0a0a', color: '#f0ede6', minHeight: '100vh', padding: '56px 48px' }}>
      <p style={{ color: '#e8ff47', letterSpacing: '0.12em', fontSize: 12, marginBottom: 12 }}>CASE STUDIES</p>
      <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(36px, 5vw, 64px)', marginBottom: 16 }}>Spotlight on Success</h1>
      <section style={{ display: 'grid', gap: 14, maxWidth: 860 }}>
        {studies.map((study) => (
          <article key={study.title} style={{ background: '#111111', border: '0.5px solid #1f1f1f', borderRadius: 12, padding: 22 }}>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 30, marginBottom: 10 }}>{study.title}</h2>
            <p style={{ color: '#6b6b6b', lineHeight: 1.7, marginBottom: 14 }}>{study.summary}</p>
            <a href={study.href} style={{ color: '#e8ff47', textDecoration: 'none' }}>
              Read case study →
            </a>
          </article>
        ))}
      </section>
    </main>
  )
}
