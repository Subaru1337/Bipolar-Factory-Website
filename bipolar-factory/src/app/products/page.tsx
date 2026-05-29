'use client'
import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'
import Link from 'next/link'
import PageNav from '@/components/layout/PageNav'

const products = [
  {
    index: '01',
    name: 'OLY Store Sync',
    tag: 'SaaS · Retail Analytics',
    accent: 'var(--brand-blue)',
    website: 'https://www.oly.live/',
    deployedBy: ['Max Stores'],
    description: 'An advanced retail analytics solution designed to unlock the full potential of your existing security cameras, going beyond basic image capture to deliver unparalleled insights.',
    detail: 'Store Sync is exclusively crafted for retail establishments, empowering them to harness the full spectrum of Brick and Mortar Analytics capabilities. With cutting-edge AI and machine learning, Store Sync offers comprehensive insights into customer interactions such as foot traffic, dwell time, demographics, path analysis and conversion rates.',
    features: ['A.I. Automation', 'Heat Mapping', 'Camera Health', 'Theft / Fire Detection', 'Alarm Triggers'],
  },
  {
    index: '02',
    name: 'OLY Control Center',
    tag: 'Video Management System',
    accent: 'var(--brand-blue)',
    website: 'https://www.oly.live/',
    deployedBy: ['Election Commission of India', 'Govt. of Tamil Nadu'],
    description: 'Enterprises can leverage Oly\'s advanced Video Management System for centralised oversight and monitoring of security cameras.',
    detail: 'Control Center, characterised by a data-driven design and a customisable dashboard featuring useful widgets, can seamlessly integrate with Oly Store Sync or operate independently as a standalone software, seamlessly working with your existing retail analytics suite.',
    features: ['Camera Control', 'Live Widgets', 'Recording and Storage', 'Map View'],
  },
  {
    index: '03',
    name: 'Metawood',
    tag: 'Web3 · Creator Economy',
    accent: 'var(--brand-lime)',
    website: 'https://www.themetawood.com/',
    deployedBy: [],
    description: 'A pioneering fusion of a gamified streaming platform and a decentralized creator economy, harnessing the power of the metaverse and virtual reality.',
    detail: 'Production houses can gain complete command over their content by orchestrating live events, screenings, and concerts within its immersive environment. Content Creators can leverage the benefits of the decentralised economy, showcasing their talents and generating revenue effortlessly.',
    features: ['Single-player Story Mode', 'Watch Party', 'Free Roam', 'Virtual Theater'],
  },
]

export default function ProductsPage() {
  const pageRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.page-eyebrow', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out', delay: 0.1 })
      gsap.from('.page-headline', { opacity: 0, y: 40, duration: 0.8, ease: 'power3.out', delay: 0.2 })
      gsap.from('.page-sub', { opacity: 0, y: 30, duration: 0.6, ease: 'power3.out', delay: 0.35 })
      gsap.from('.product-row', {
        opacity: 0, y: 60,
        duration: 0.8, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.products-list', start: 'top 80%', once: true }
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} style={{ background: 'var(--bg)', minHeight: '100vh', color: 'var(--text)' }}>
      <PageNav active="Products" />

      {/* Hero */}
      <div style={{ padding: '140px 48px 80px', borderBottom: '0.5px solid var(--border)', maxWidth: 1400, margin: '0 auto' }}>
        <p className="page-eyebrow" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 500, color: 'var(--accent)', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
          <span style={{ display: 'block', width: 24, height: 1, background: 'var(--accent)' }} />
          Products
        </p>
        <h1 className="page-headline" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(48px, 8vw, 110px)', lineHeight: 0.9, letterSpacing: '-0.04em', marginBottom: 32, maxWidth: 900 }}>
          Our tech,<br /><span style={{ color: 'var(--accent)' }}>your odyssey.</span>
        </h1>
        <p className="page-sub" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 18, color: 'var(--muted)', lineHeight: 1.6, maxWidth: 520 }}>
          Each product is crafted to not only meet current market demands but to propel users into the forefront of their industries.
        </p>
      </div>

      {/* Products list */}
      <div className="products-list" style={{ maxWidth: 1400, margin: '0 auto' }}>
        {products.map((p, i) => (
          <div key={p.index} className="product-row" style={{
            display: 'grid',
            gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
            borderBottom: '0.5px solid var(--border)',
          }}>
            {/* Left panel */}
            <div style={{
              padding: '80px 48px',
              borderRight: '0.5px solid var(--border)',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              background: i % 2 === 1 ? 'var(--surface-stripe)' : 'var(--bg)',
              position: 'relative', overflow: 'hidden',
            }}>
              {/* Big index number */}
              <span style={{
                position: 'absolute', top: 24, right: 32,
                fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 120,
                color: 'var(--number-watermark)', letterSpacing: '-0.04em', lineHeight: 1,
                userSelect: 'none',
              }}>{p.index}</span>

              <div>
                <span style={{
                  display: 'inline-block',
                  fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 500,
                  color: p.accent, letterSpacing: '0.12em', textTransform: 'uppercase',
                  border: `0.5px solid ${p.accent}40`, padding: '5px 12px', borderRadius: 100,
                  marginBottom: 28,
                }}>{p.tag}</span>

                <h2 style={{
                  fontFamily: 'Syne, sans-serif', fontWeight: 800,
                  fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.0,
                  letterSpacing: '-0.03em', marginBottom: 24, maxWidth: 400,
                }}>{p.name}</h2>

                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 16, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 420, marginBottom: 32 }}>
                  {p.description}
                </p>
              </div>

              <div style={{ display: 'flex', gap: 12 }}>
                {p.website && (
                  <a href={p.website} target="_blank" rel="noopener noreferrer" style={{
                    fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 500,
                    color: 'var(--accent-text)', background: p.accent,
                    padding: '10px 22px', borderRadius: 100, textDecoration: 'none',
                  }}>Visit Website →</a>
                )}
                <Link href="/contact" style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: 13,
                  color: 'var(--muted)', border: '0.5px solid var(--border-mid)',
                  padding: '10px 22px', borderRadius: 100, textDecoration: 'none',
                }}>Contact Us</Link>
              </div>
            </div>

            {/* Right panel */}
            <div style={{
              padding: '80px 48px',
              background: 'var(--surface)',
              display: 'flex', flexDirection: 'column', gap: 40,
            }}>
              <div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: 'var(--muted)', lineHeight: 1.75 }}>
                  {p.detail}
                </p>
              </div>

              <div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, fontWeight: 500, color: 'var(--muted-faint)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 16 }}>
                  Features
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {p.features.map((f, fi) => (
                    <div key={fi} style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      padding: '12px 0',
                      borderBottom: fi < p.features.length - 1 ? '0.5px solid var(--border)' : 'none',
                    }}>
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: p.accent, flexShrink: 0 }} />
                      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: 'var(--text)' }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {p.deployedBy.length > 0 && (
                <div>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, fontWeight: 500, color: 'var(--muted-faint)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 12 }}>
                    Deployed by
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {p.deployedBy.map(d => (
                      <span key={d} style={{
                        fontFamily: 'DM Sans, sans-serif', fontSize: 12,
                        color: 'var(--muted)', border: '0.5px solid var(--border)',
                        padding: '4px 12px', borderRadius: 100,
                      }}>{d}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', padding: '100px 48px', borderTop: '0.5px solid var(--border)' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 20 }}>Ready to start?</p>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '-0.03em', marginBottom: 40 }}>
          Let's build something<br /><span style={{ color: 'var(--accent)' }}>that matters.</span>
        </h2>
        <Link href="/contact" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 500, color: 'var(--accent-text)', background: 'var(--accent)', padding: '16px 36px', borderRadius: 100, textDecoration: 'none' }}>
          Get in touch →
        </Link>
      </div>
    </div>
  )
}