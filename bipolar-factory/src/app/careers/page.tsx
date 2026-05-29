export default function CareersPage() {
  return (
    <main style={{ background: '#0a0a0a', color: '#f0ede6', minHeight: '100vh', padding: '56px 48px' }}>
      <p style={{ color: '#e8ff47', letterSpacing: '0.12em', fontSize: 12, marginBottom: 12 }}>CAREERS</p>
      <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(36px, 5vw, 64px)', marginBottom: 14 }}>Come Build With Us</h1>
      <p style={{ color: 'var(--muted)', maxWidth: 760, lineHeight: 1.75, marginBottom: 26 }}>
        We are building technology that creates measurable real-world impact. If you care about quality, ownership, and solving hard problems,
        we would love to hear from you.
      </p>
      <a href="mailto:hello@bipolarfactory.com?subject=Careers%20at%20Bipolar%20Factory" style={{ color: '#0a0a0a', background: '#e8ff47', padding: '12px 20px', borderRadius: 999, textDecoration: 'none' }}>
        Send your profile
      </a>
    </main>
  )
}
