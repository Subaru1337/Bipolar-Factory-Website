'use client'
import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import Link from 'next/link'

const NAV = ['Products', 'Work', 'Services', 'About', 'Careers']

const values = [
  { name: 'Innovation', desc: 'Pioneering solutions that redefine industries.' },
  { name: 'Quality', desc: 'Delivering excellence in every product and service.' },
  { name: 'Continuous Learning', desc: 'Adapting and evolving in a dynamic landscape.' },
  { name: 'Commitment to Customers', desc: 'Putting our customers at the heart of everything.' },
  { name: 'Passion', desc: 'Infusing enthusiasm into everything we do.' },
  { name: 'Humility', desc: 'Embracing the learning journey with an open mind.' },
]

const markets = ['Retail', 'Manufacturing', 'Civil Aviation', 'Road Safety', 'Entertainment', 'Content Creation', 'Government', 'Textile Industry']

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
          <Link key={n} href={`/${n.toLowerCase()}`} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: n === 'About' ? '#e8ff47' : 'var(--muted)', textDecoration: 'none' }}>
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

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.page-eyebrow', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out', delay: 0.1 })
      gsap.from('.about-headline', { opacity: 0, y: 60, duration: 1, ease: 'power4.out', delay: 0.2 })
      gsap.from('.about-body', { opacity: 0, y: 30, duration: 0.7, ease: 'power3.out', delay: 0.35 })
      gsap.from('.value-card', {
        opacity: 0, y: 40, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.values-grid', start: 'top 80%', once: true }
      })
      gsap.from('.mission-block', {
        opacity: 0, y: 40, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.mission-block', start: 'top 75%', once: true }
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} style={{ background: '#0a0a0a', minHeight: '100vh', color: '#f0ede6' }}>
      <Nav />

      {/* Hero */}
      <div style={{ padding: '140px 48px 80px', borderBottom: '0.5px solid #1f1f1f', maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
        <div>
          <p className="page-eyebrow" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 500, color: '#e8ff47', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 32 }}>
            <span style={{ display: 'block', width: 24, height: 1, background: '#e8ff47' }} />
            About us
          </p>
          <h1 className="about-headline" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(52px, 8vw, 110px)', lineHeight: 0.88, letterSpacing: '-0.04em' }}>
            We build<br />for<br /><span style={{ color: '#e8ff47' }}>people.</span>
          </h1>
        </div>

        <div className="about-body" style={{ paddingTop: 80 }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 16, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 24 }}>
            We are Bipolar Factory, a dynamic force in the world of innovation, established in 2020. We are not just a company — we are a collective of dreamers, thinkers, and doers.
          </p>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 16, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 24 }}>
            Our journey began with the recognition that seemingly insurmountable challenges are opportunities waiting for the right idea. We strive to be the catalyst for those ideas and transform them into products that not only solve problems but elevate the very essence of everyday living.
          </p>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 16, color: 'var(--muted)', lineHeight: 1.8 }}>
            Innovation is our heartbeat. We breathe life into ideas with a relentless commitment to quality, fueled by a passion for making a difference.
          </p>
        </div>
      </div>

      {/* Stats strip */}
      <div style={{ display: 'flex', borderBottom: '0.5px solid #1f1f1f' }}>
        {[
          { value: '2020', label: 'Founded' },
          { value: '40M+', label: 'Votes counted' },
          { value: '20+', label: 'Projects shipped' },
          { value: '3+', label: 'Countries' },
        ].map((s, i) => (
          <div key={s.label} style={{
            flex: 1, padding: '48px 48px',
            borderRight: i < 3 ? '0.5px solid #1f1f1f' : 'none',
          }}>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 48, color: '#f0ede6', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 8 }}>{s.value}</div>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'var(--muted-dim)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Services summary */}
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '100px 48px', borderBottom: '0.5px solid #1f1f1f', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
        <div>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#e8ff47', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
            <span style={{ display: 'block', width: 24, height: 1, background: '#e8ff47' }} />
            What we do
          </p>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 4vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.0, marginBottom: 24 }}>
            Beyond conventional products.
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 16, color: 'var(--muted)', lineHeight: 1.7 }}>
            We position ourselves as dedicated technology partners. As your ally in technology, we collaborate closely with clients to transform aspirations into reality. Our experienced team navigates the entire development lifecycle, crafting custom solutions that seamlessly align with unique business objectives.
          </p>
        </div>
        <div style={{ paddingTop: 60 }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'var(--muted-faint)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 20 }}>Markets we serve</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {markets.map(m => (
              <span key={m} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: 'var(--muted)', border: '0.5px solid #1f1f1f', padding: '8px 16px', borderRadius: 100 }}>{m}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '100px 48px', borderBottom: '0.5px solid #1f1f1f' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#e8ff47', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
          <span style={{ display: 'block', width: 24, height: 1, background: '#e8ff47' }} />
          Our values
        </p>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 4vw, 56px)', letterSpacing: '-0.03em', marginBottom: 56 }}>What drives us.</h2>
        <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
          {values.map((v, i) => (
            <div key={v.name} className="value-card" style={{
              background: '#111111',
              border: '0.5px solid #1f1f1f',
              borderRadius: i === 0 ? '12px 0 0 0' : i === 2 ? '0 12px 0 0' : i === 3 ? '0 0 0 12px' : i === 5 ? '0 0 12px 0' : 0,
              padding: '40px 32px',
            }}>
              <span style={{ display: 'block', width: 4, height: 4, borderRadius: '50%', background: '#e8ff47', marginBottom: 20 }} />
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 18, letterSpacing: '-0.02em', color: '#f0ede6', marginBottom: 10 }}>{v.name}</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission */}
      <div className="mission-block" style={{ maxWidth: 1400, margin: '0 auto', padding: '100px 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', borderBottom: '0.5px solid #1f1f1f' }}>
        <div>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#e8ff47', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
            <span style={{ display: 'block', width: 24, height: 1, background: '#e8ff47' }} />
            Our mission
          </p>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 4vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.0, marginBottom: 28 }}>
            Change as a<br /><span style={{ color: '#e8ff47' }}>call to action.</span>
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 16, color: 'var(--muted)', lineHeight: 1.75 }}>
            Our mission is a call to action, a commitment to positive change through innovation. We aspire to be the torchbearers of Make in India products on a global scale. With a spirit that combines fun and professionalism, we navigate the path to success as underdogs — creating a captivating yet easily accessible narrative where ideas become reality.
          </p>
        </div>
        <div style={{
          background: '#111111', border: '0.5px solid #1f1f1f', borderRadius: 16,
          padding: '60px 48px', textAlign: 'center',
        }}>
          <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 72, color: '#e8ff47', lineHeight: 1, letterSpacing: '-0.04em', marginBottom: 16, opacity: 0.15 }}>"</div>
          <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 28, color: '#f0ede6', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            For the world.
          </p>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: 'var(--muted-dim)', marginTop: 16, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Our north star</p>
        </div>
      </div>
    </div>
  )
}