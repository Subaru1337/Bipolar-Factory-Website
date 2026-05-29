export default function BiharElectionCaseStudyPage() {
  return (
    <main style={{ background: '#0a0a0a', color: '#f0ede6', minHeight: '100vh', padding: '56px 48px' }}>
      <a href="/work" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
        ← Back to case studies
      </a>
      <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(34px, 5vw, 58px)', margin: '14px 0 14px' }}>
        Automating Vote Counting for Bihar State Election Commission
      </h1>
      <p style={{ color: 'var(--muted)', lineHeight: 1.75, maxWidth: 900 }}>
        The Bihar State Election Commission needed a transparent, reliable, and efficient counting process. Our team designed and delivered an
        automated counting workflow to reduce human error, improve process visibility, and strengthen trust in election operations at scale.
      </p>
    </main>
  )
}
