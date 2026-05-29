'use client'

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M9.101 23.277h4.565V14.39h3.132l.395-3.558h-3.527V8.089c0-.988.275-1.66 1.691-1.66h1.888V3.114A24.84 24.84 0 0 0 13.447 3c-2.786 0-4.659 1.7-4.659 4.847v2.885H5.002v3.558h3.786v8.887z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const socials = [
  { id: 'facebook', href: 'https://www.facebook.com/bipolarfactory', label: 'Facebook', Icon: FacebookIcon },
  { id: 'x', href: 'https://x.com/bipolarfactory', label: 'X (Twitter)', Icon: XIcon },
  { id: 'linkedin', href: 'https://www.linkedin.com/company/bipolar-factory/', label: 'LinkedIn', Icon: LinkedInIcon },
] as const

export default function Footer() {
  const navLinks = ['Products', 'Work', 'Services', 'About', 'Careers']

  return (
    <footer style={{
      background: 'var(--bg-alt)',
      borderTop: '0.5px solid var(--border)',
      padding: '80px 48px 0',
    }}>
      <div style={{
        maxWidth: 1400, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
        gap: '48px 64px',
        paddingBottom: 64,
        borderBottom: '0.5px solid var(--border)',
      }}>

        {/* Col 1 — Brand */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 18, color: 'var(--text)', letterSpacing: '-0.02em',
          }}>
            BPF<span style={{ color: 'var(--accent)' }}>.</span>
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
            {socials.map(({ id, href, label, Icon }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 36, height: 36,
                  border: '0.5px solid var(--border-mid)',
                  borderRadius: 8,
                  color: 'var(--muted-dim)',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.color = 'var(--accent)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border-mid)'
                  e.currentTarget.style.color = 'var(--muted-dim)'
                }}
              >
                <Icon />
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
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
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
            color: 'var(--accent)',
            textDecoration: 'none',
            marginBottom: 20,
          }}>
            hello@bipolarfactory.com
          </a>
          <a href="/contact" style={{
            display: 'inline-flex', alignItems: 'center',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 13, fontWeight: 500,
            color: 'var(--accent-text)', background: 'var(--accent)',
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
          Cookie and Privacy Policy
        </a>
      </div>
    </footer>
  )
}
