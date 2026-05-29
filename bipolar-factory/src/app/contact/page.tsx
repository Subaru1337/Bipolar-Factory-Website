'use client'
import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'
import Link from 'next/link'

const NAV = ['Products', 'Work', 'Services', 'About', 'Careers']

function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 48px', height: 64,
      background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(12px)',
      borderBottom: '0.5px solid #1f1f1f',
    }}>
      <Link href="/" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 16, color: '#f0ede6', textDecoration: 'none', letterSpacing: '-0.02em' }}>
        BPF<span style={{ color: '#e8ff47' }}>.</span>
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        {NAV.map(n => (
          <Link key={n} href={`/${n.toLowerCase()}`} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: 'var(--muted)', textDecoration: 'none' }}>
            {n}
          </Link>
        ))}
        <Link href="/contact" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 500, color: '#0a0a0a', background: '#e8ff47', padding: '8px 18px', borderRadius: 100, textDecoration: 'none' }}>
          Contact us
        </Link>
      </div>
    </nav>
  )
}

const inputStyle = {
  width: '100%',
  background: '#111111',
  border: '0.5px solid #1f1f1f',
  borderRadius: 8,
  padding: '14px 16px',
  fontFamily: 'DM Sans, sans-serif',
  fontSize: 14,
  color: '#f0ede6',
  outline: 'none',
  transition: 'border-color 0.2s',
}

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ first: '', last: '', email: '', phone: '', company: '', subject: '', message: '' })

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.page-eyebrow', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out', delay: 0.1 })
      gsap.from('.page-headline', { opacity: 0, y: 40, duration: 0.8, ease: 'power3.out', delay: 0.2 })
      gsap.from('.contact-form', { opacity: 0, y: 40, duration: 0.7, ease: 'power3.out', delay: 0.3 })
      gsap.from('.contact-info', { opacity: 0, x: 40, duration: 0.7, ease: 'power3.out', delay: 0.35 })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div ref={pageRef} style={{ background: '#0a0a0a', minHeight: '100vh', color: '#f0ede6' }}>
      <Nav />

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '140px 48px 100px' }}>
        <p className="page-eyebrow" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 500, color: '#e8ff47', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
          <span style={{ display: 'block', width: 24, height: 1, background: '#e8ff47' }} />
          Contact us
        </p>
        <h1 className="page-headline" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(48px, 8vw, 100px)', lineHeight: 0.9, letterSpacing: '-0.04em', marginBottom: 72 }}>
          Drop us<br /><span style={{ color: '#e8ff47' }}>a line.</span>
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: 80, alignItems: 'start' }}>
          {/* Form */}
          <div className="contact-form">
            {submitted ? (
              <div style={{ padding: '80px 0', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 48, color: '#e8ff47', marginBottom: 20 }}>✓</div>
                <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 32, letterSpacing: '-0.02em', marginBottom: 16 }}>Message received.</h2>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 16, color: 'var(--muted)' }}>We'll get back to you within one business day.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'var(--muted-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>First name *</label>
                    <input style={inputStyle} value={form.first} onChange={e => setForm({ ...form, first: e.target.value })}
                      onFocus={e => (e.target.style.borderColor = '#e8ff47')}
                      onBlur={e => (e.target.style.borderColor = '#1f1f1f')} />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'var(--muted-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Last name *</label>
                    <input style={inputStyle} value={form.last} onChange={e => setForm({ ...form, last: e.target.value })}
                      onFocus={e => (e.target.style.borderColor = '#e8ff47')}
                      onBlur={e => (e.target.style.borderColor = '#1f1f1f')} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'var(--muted-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Email *</label>
                    <input type="email" style={inputStyle} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      onFocus={e => (e.target.style.borderColor = '#e8ff47')}
                      onBlur={e => (e.target.style.borderColor = '#1f1f1f')} />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'var(--muted-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Phone</label>
                    <input type="tel" style={inputStyle} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                      onFocus={e => (e.target.style.borderColor = '#e8ff47')}
                      onBlur={e => (e.target.style.borderColor = '#1f1f1f')} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'var(--muted-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Company</label>
                    <input style={inputStyle} value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}
                      onFocus={e => (e.target.style.borderColor = '#e8ff47')}
                      onBlur={e => (e.target.style.borderColor = '#1f1f1f')} />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'var(--muted-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Subject *</label>
                    <input style={inputStyle} value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                      onFocus={e => (e.target.style.borderColor = '#e8ff47')}
                      onBlur={e => (e.target.style.borderColor = '#1f1f1f')} />
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'var(--muted-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Message *</label>
                  <textarea rows={5} style={{ ...inputStyle, resize: 'none' } as React.CSSProperties}
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    onFocus={e => (e.target.style.borderColor = '#e8ff47')}
                    onBlur={e => (e.target.style.borderColor = '#1f1f1f')} />
                </div>
                <button onClick={handleSubmit} style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 500,
                  color: '#0a0a0a', background: '#e8ff47',
                  padding: '16px 36px', borderRadius: 100, border: 'none', cursor: 'pointer',
                  width: 'fit-content', marginTop: 8,
                }}>
                  Send message →
                </button>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', gap: 40, paddingTop: 8 }}>
            {[
              { label: 'Address', value: 'Bipolar Factory Pvt Ltd\n2/118, First Floor, Nehru Nagar\nKoundampalayam Road\nEdayarpalayam, Coimbatore\nTamil Nadu 641025' },
              { label: 'Email', value: 'hello@bipolarfactory.com' },
              { label: 'Phone', value: '+91 7676412669' },
              { label: 'Office Hours', value: 'Monday – Friday\n10AM – 5PM IST' },
            ].map(({ label, value }) => (
              <div key={label} style={{ paddingBottom: 32, borderBottom: '0.5px solid #1f1f1f' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: 'var(--muted-faint)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 10 }}>{label}</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: 'var(--muted)', lineHeight: 1.8, whiteSpace: 'pre-line' }}>{value}</p>
              </div>
            ))}

            <div>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: 'var(--muted-faint)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 12 }}>Socials</p>
              <div style={{ display: 'flex', gap: 8 }}>
                {[
                  { label: 'FB', href: 'https://www.facebook.com/bipolarfactory' },
                  { label: 'TW', href: 'https://twitter.com/bipolarfactory' },
                  { label: 'LI', href: 'https://www.linkedin.com/company/31221841/' },
                ].map(({ label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: 40, height: 40, border: '0.5px solid #2a2a2a', borderRadius: 8,
                    fontFamily: 'Syne, sans-serif', fontSize: 11, fontWeight: 700,
                    color: 'var(--muted-dim)', textDecoration: 'none',
                  }}>{label}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}