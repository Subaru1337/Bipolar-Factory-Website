'use client'
import { useLayoutEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from '@/lib/gsap'
import { getProductUrl } from '@/lib/products'

const products = [
  {
    name: 'OLY Store Sync',
    tag: 'SaaS · Video Security',
    tagline: 'Unlock the full potential of your video security network.',
    accent: 'var(--brand-blue)',
    index: '01',
    shape: (
      <svg viewBox="0 0 300 300" style={{ position: 'absolute', bottom: -40, right: -40, width: 260, opacity: 0.06, pointerEvents: 'none', color: 'var(--brand-blue)' }}>
        <circle cx="150" cy="150" r="130" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <circle cx="150" cy="150" r="90" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <circle cx="150" cy="150" r="50" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <line x1="20" y1="150" x2="280" y2="150" stroke="currentColor" strokeWidth="0.8" />
        <line x1="150" y1="20" x2="150" y2="280" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    name: 'OLY Control Center',
    tag: 'Video Management',
    tagline: "A video management system unlike anything that's worked for you.",
    accent: 'var(--brand-blue)',
    index: '02',
    shape: (
      <svg viewBox="0 0 300 300" style={{ position: 'absolute', bottom: -40, right: -40, width: 260, opacity: 0.06, pointerEvents: 'none', color: 'var(--brand-blue)' }}>
        <rect x="30" y="30" width="240" height="240" rx="8" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <rect x="70" y="70" width="160" height="160" rx="4" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <rect x="110" y="110" width="80" height="80" stroke="currentColor" strokeWidth="0.8" fill="none" />
      </svg>
    ),
  },
  {
    name: 'Metawood',
    tag: 'Web3 · Creator Economy',
    tagline: 'Gamified streaming meets decentralised creator economy.',
    accent: 'var(--brand-lime)',
    index: '03',
    shape: (
      <svg viewBox="0 0 300 300" style={{ position: 'absolute', bottom: -40, right: -40, width: 260, opacity: 0.06, pointerEvents: 'none', color: 'var(--brand-lime)' }}>
        <polygon points="150,20 280,240 20,240" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <polygon points="150,60 245,220 55,220" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <polygon points="150,100 210,200 90,200" stroke="currentColor" strokeWidth="0.8" fill="none" />
      </svg>
    ),
  },
]

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(['.products-eyebrow', '.products-headline'], {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.products-section', start: 'top 80%', once: true },
      })

      gsap.from('.product-card', {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.products-grid', start: 'top 85%', once: true },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="products-section"
      style={{
        background: 'var(--bg)',
        width: '100%',
        borderBottom: '0.5px solid var(--border)',
      }}
    >
      <div style={{ padding: '80px 48px 40px', borderBottom: '0.5px solid var(--border)' }}>
        <p
          className="products-eyebrow"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 11,
            fontWeight: 500,
            color: 'var(--accent)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 20,
          }}
        >
          <span style={{ display: 'block', width: 24, height: 1, background: 'var(--accent)' }} />
          Products
        </p>
        <h2 className="section-headline section-headline--products products-headline">
          Three things we ship.
        </h2>
        <Link
          href="/products"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 14,
            color: 'var(--muted)',
            textDecoration: 'none',
          }}
        >
          View all products →
        </Link>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <article
            key={product.index}
            className="product-card"
            style={{
              background: 'var(--surface)',
              border: '0.5px solid var(--border)',
              borderRadius: 12,
              minHeight: 420,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              padding: 40,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {product.shape}

            <div
              style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                height: '100%',
              }}
            >
              {/* Tag + index row — keeps title below the number on all cards */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  alignItems: 'start',
                  gap: 16,
                  minHeight: 88,
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: 11,
                    fontWeight: 500,
                    color: product.accent,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    border: `0.5px solid ${product.accent}`,
                    padding: '5px 12px',
                    borderRadius: 100,
                    opacity: 0.8,
                    lineHeight: 1.3,
                    maxWidth: '100%',
                  }}
                >
                  {product.tag}
                </span>
                <span
                  aria-hidden
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 800,
                    fontSize: 72,
                    color: 'var(--number-watermark)',
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    userSelect: 'none',
                    flexShrink: 0,
                  }}
                >
                  {product.index}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(28px, 3vw, 40px)',
                  color: 'var(--text)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  margin: 0,
                  marginBottom: 16,
                  minHeight: 132,
                  paddingRight: 8,
                }}
              >
                {product.name}
              </h3>

              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: 'var(--muted)',
                  margin: 0,
                  flex: 1,
                  minHeight: 76,
                }}
              >
                {product.tagline}
              </p>

              <a
                href={getProductUrl(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 14,
                  fontWeight: 500,
                  color: product.accent,
                  textDecoration: 'none',
                  marginTop: 28,
                }}
              >
                Explore →
              </a>
            </div>
          </article>
        ))}
      </div>

    </section>
  )
}
