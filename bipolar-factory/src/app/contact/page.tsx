export default function ContactPage() {
  return (
    <main style={{ background: '#0a0a0a', color: '#f0ede6', minHeight: '100vh', padding: '56px 48px' }}>
      <p style={{ color: '#e8ff47', letterSpacing: '0.12em', fontSize: 12, marginBottom: 12 }}>CONTACT US</p>
      <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(36px, 5vw, 64px)', marginBottom: 16 }}>Drop us a Line</h1>
      <p style={{ color: '#6b6b6b', marginBottom: 24 }}>Feel free to ask us more about the company and its products.</p>

      <section style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 20, maxWidth: 980 }}>
        <div style={{ background: '#111111', border: '0.5px solid #1f1f1f', borderRadius: 12, padding: 20 }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 26, marginBottom: 12 }}>Contact details</h2>
          <p style={{ color: '#6b6b6b', marginBottom: 8 }}>439, Kamarajar Rd, Peelamedu, Chitra Nagar, Hope College, Coimbatore, Tamil Nadu 641004</p>
          <p style={{ color: '#6b6b6b', marginBottom: 8 }}>Monday - Friday: 10AM - 5PM</p>
          <p style={{ color: '#6b6b6b', marginBottom: 8 }}>
            Email:{' '}
            <a href="mailto:hello@bipolarfactory.com" style={{ color: '#e8ff47', textDecoration: 'none' }}>
              hello@bipolarfactory.com
            </a>
          </p>
          <p style={{ color: '#6b6b6b' }}>Phone: +91 7676412669</p>
        </div>

        <div style={{ background: '#111111', border: '0.5px solid #1f1f1f', borderRadius: 12, padding: 20 }}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 26, marginBottom: 12 }}>Quick note</h2>
          <p style={{ color: '#6b6b6b', lineHeight: 1.7 }}>
            If you want, I can wire this to a real form endpoint next (Resend, Formspree, or custom API route) so this page collects submissions.
          </p>
        </div>
      </section>
    </main>
  )
}
