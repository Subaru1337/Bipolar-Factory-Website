'use client'

export default function Footer() {
  const navLinks = ['Products', 'Work', 'Services', 'About', 'Careers']

  return (
    <footer style={{
      background: '#080808',
      borderTop: '0.5px solid #1f1f1f',
      padding: '80px 48px 0',
    }}>
      <div style={{
        maxWidth: 1400, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
        gap: '48px 64px',
        paddingBottom: 64,
        borderBottom: '0.5px solid #1f1f1f',
      }}>

        {/* Col 1 — Brand */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 18, color: '#f0ede6', letterSpacing: '-0.02em',
          }}>
            BPF<span style={{ color: '#e8ff47' }}>.</span>
          </div>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 14, lineHeight: 1.65,
            color: 'var(--muted)',
            maxWidth: 260,
          }}>
            Dedicated technology partner. Custom software built from Coimbatore for the world.
          </p>
          {/* Socials */}
          <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
            {[
              { label: 'FB', href: '#' },
              { label: 'TW', href: '#' },
              { label: 'LI', href: '#' },
            ].map(({ label, href }) => (
              <a key={label} href={href} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 36, height: 36,
                border: '0.5px solid #2a2a2a',
                borderRadius: 8,
                fontFamily: 'Syne, sans-serif',
                fontSize: 11, fontWeight: 700,
                color: 'var(--muted-dim)',
                textDecoration: 'none',
                transition: 'border-color 0.2s, color 0.2s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#e8ff47'
                  e.currentTarget.style.color = '#e8ff47'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#2a2a2a'
                  e.currentTarget.style.color = 'var(--muted-dim)'
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Nav */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <span style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 10, fontWeight: 500,
            color: 'var(--muted-faint)', letterSpacing: '0.16em',
            textTransform: 'uppercase',
            marginBottom: 20,
          }}>
            Navigation
          </span>
          {navLinks.map(link => (
            <a key={link} href={`/${link.toLowerCase()}`} style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 14, color: 'var(--muted)',
              textDecoration: 'none',
              padding: '7px 0',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f0ede6')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Col 3 — Address */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <span style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 10, fontWeight: 500,
            color: 'var(--muted-faint)', letterSpacing: '0.16em',
            textTransform: 'uppercase',
            marginBottom: 20,
          }}>
            Find us
          </span>
          <address style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 14, lineHeight: 2,
            color: 'var(--muted)',
            fontStyle: 'normal',
          }}>
            Bipolar Factory Pvt Ltd<br />
            Coimbatore, Tamil Nadu<br />
            India — 641 001
          </address>
        </div>

        {/* Col 4 — Contact CTA */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <span style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 10, fontWeight: 500,
            color: 'var(--muted-faint)', letterSpacing: '0.16em',
            textTransform: 'uppercase',
            marginBottom: 20,
          }}>
            Get in touch
          </span>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 14, lineHeight: 1.65,
            color: 'var(--muted)',
            marginBottom: 20,
          }}>
            Have a project in mind? We'd love to hear about it.
          </p>
          <a href="mailto:hello@bipolarfactory.com" style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 14, fontWeight: 500,
            color: '#e8ff47',
            textDecoration: 'none',
            marginBottom: 20,
          }}>
            hello@bipolarfactory.com
          </a>
          <a href="/contact" style={{
            display: 'inline-flex', alignItems: 'center',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 13, fontWeight: 500,
            color: '#0a0a0a', background: '#e8ff47',
            padding: '10px 20px', borderRadius: 100,
            textDecoration: 'none',
            width: 'fit-content',
            marginTop: 4,
            transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Start a project →
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 0',
      }}>
        <span style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 12, color: 'var(--muted-faint)',
        }}>
          © 2024 Bipolar Factory Pvt Ltd
        </span>
        <a href="/privacy" style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 12, color: 'var(--muted-faint)',
          textDecoration: 'none',
          transition: 'color 0.2s',
        }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--muted)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted-faint)')}
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  )
}
