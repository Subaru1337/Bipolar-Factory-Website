'use client'
import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { getProductUrl } from '@/lib/products'

const products = [
  {
    name: 'OLY Store Sync',
    tag: 'SaaS · Video Security',
    tagline: 'Unlock the full potential of your video security network.',
    accent: '#4d9fff',
    index: '01',
    shape: (
      <svg viewBox="0 0 300 300" style={{ position: 'absolute', bottom: -40, right: -40, width: 260, opacity: 0.06, pointerEvents: 'none' }}>
        <circle cx="150" cy="150" r="130" stroke="#4d9fff" strokeWidth="0.8" fill="none" />
        <circle cx="150" cy="150" r="90" stroke="#4d9fff" strokeWidth="0.8" fill="none" />
        <circle cx="150" cy="150" r="50" stroke="#4d9fff" strokeWidth="0.8" fill="none" />
        <line x1="20" y1="150" x2="280" y2="150" stroke="#4d9fff" strokeWidth="0.8" />
        <line x1="150" y1="20" x2="150" y2="280" stroke="#4d9fff" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    name: 'OLY Control Center',
    tag: 'Video Management',
    tagline: 'A video management system unlike anything that\'s worked for you.',
    accent: '#4d9fff',
    index: '02',
    shape: (
      <svg viewBox="0 0 300 300" style={{ position: 'absolute', bottom: -40, right: -40, width: 260, opacity: 0.06, pointerEvents: 'none' }}>
        <rect x="30" y="30" width="240" height="240" rx="8" stroke="#4d9fff" strokeWidth="0.8" fill="none" />
        <rect x="70" y="70" width="160" height="160" rx="4" stroke="#4d9fff" strokeWidth="0.8" fill="none" />
        <rect x="110" y="110" width="80" height="80" stroke="#4d9fff" strokeWidth="0.8" fill="none" />
      </svg>
    ),
  },
  {
    name: 'Metawood',
    tag: 'Web3 · Creator Economy',
    tagline: 'Gamified streaming meets decentralised creator economy.',
    accent: '#e8ff47',
    index: '03',
    shape: (
      <svg viewBox="0 0 300 300" style={{ position: 'absolute', bottom: -40, right: -40, width: 260, opacity: 0.06, pointerEvents: 'none' }}>
        <polygon points="150,20 280,240 20,240" stroke="#e8ff47" strokeWidth="0.8" fill="none" />
        <polygon points="150,60 245,220 55,220" stroke="#e8ff47" strokeWidth="0.8" fill="none" />
        <polygon points="150,100 210,200 90,200" stroke="#e8ff47" strokeWidth="0.8" fill="none" />
      </svg>
    ),
  },
]

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = document.querySelector('.products-track') as HTMLElement
      const cards = gsap.utils.toArray('.product-card') as HTMLElement[]

      if (!track || !cards.length) return

      gsap.to('.products-track', {
        x: () => -(track.offsetWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: '.products-section',
          pin: true,
          scrub: 1,
          end: () => '+=' + track.offsetWidth,
        }
      })

      // Heading reveal
      gsap.from(['.products-eyebrow', '.products-headline'], {
        opacity: 0, y: 30,
        duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.products-section', start: 'top 80%', once: true }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="products-section"
      style={{
        background: '#0a0a0a',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {/* Section heading */}
      <div style={{ padding: '80px 48px 48px', borderBottom: '0.5px solid #1f1f1f' }}>
        <p className="products-eyebrow" style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 11, fontWeight: 500,
          color: '#e8ff47', letterSpacing: '0.18em',
          textTransform: 'uppercase',
          display: 'flex', alignItems: 'center', gap: 10,
          marginBottom: 20,
        }}>
          <span style={{ display: 'block', width: 24, height: 1, background: '#e8ff47' }} />
          Products
        </p>
        <h2 className="products-headline" style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(36px, 5vw, 64px)',
          color: '#f0ede6',
          letterSpacing: '-0.03em',
          lineHeight: 1.0,
        }}>
          Three things we ship.
        </h2>
      </div>

      {/* Horizontal track */}
      <div
        className="products-track"
        style={{
          display: 'flex',
          width: `${products.length * 100}vw`,
          height: '100vh',
        }}
      >
        {products.map((product) => (
          <div
            key={product.index}
            className="product-card"
            style={{
              width: '100vw',
              height: '100%',
              background: '#111111',
              borderRight: '0.5px solid #1f1f1f',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '48px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Abstract shape bg */}
            {product.shape}

            {/* Number */}
            <span style={{
              position: 'absolute', top: 48, right: 48,
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800, fontSize: 120,
              color: '#1a1a1a', letterSpacing: '-0.04em',
              lineHeight: 1, userSelect: 'none',
            }}>
              {product.index}
            </span>

            {/* Tag */}
            <div style={{ marginBottom: 24 }}>
              <span style={{
                display: 'inline-block',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 11, fontWeight: 500,
                color: product.accent,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                border: `0.5px solid ${product.accent}`,
                padding: '5px 12px', borderRadius: 100,
                opacity: 0.8,
              }}>
                {product.tag}
              </span>
            </div>

            {/* Name */}
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(36px, 4vw, 56px)',
              color: '#f0ede6',
              letterSpacing: '-0.03em',
              lineHeight: 1.0,
              marginBottom: 24,
            }}>
              {product.name}
            </h3>

            {/* Tagline */}
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 17, lineHeight: 1.6,
              color: 'var(--muted)',
              maxWidth: 440,
              marginBottom: 40,
            }}>
              {product.tagline}
            </p>

            {/* CTA */}
            <a
              href={getProductUrl(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 14, fontWeight: 500,
                color: product.accent,
                textDecoration: 'none',
              }}
            >
              Explore →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
