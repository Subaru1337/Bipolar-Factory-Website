'use client'
import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

const clients = [
  {
    name: 'Zigma',
    context: 'Waste Management',
    initials: 'ZG',
    accent: '#4d9fff',
  },
  {
    name: 'WoTA',
    context: 'Textile Industry',
    initials: 'WT',
    accent: '#e8ff47',
  },
  {
    name: 'iNET Secure Labs',
    context: 'Election Technology',
    initials: 'iN',
    accent: '#ff4d4d',
  },
  {
    name: 'Bihar Election Commission',
    context: 'Government · India',
    initials: 'BEC',
    accent: '#e8ff47',
  },
]

export default function Clients() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(['.clients-eyebrow', '.clients-headline', '.clients-sub'], {
        opacity: 0, y: 30,
        duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.clients-section', start: 'top 72%', once: true }
      })

      gsap.from('.client-tile', {
        opacity: 0, y: 24,
        duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.clients-grid', start: 'top 78%', once: true }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="clients-section"
      style={{
        background: '#0a0a0a',
        padding: '120px 48px',
        borderBottom: '0.5px solid #1f1f1f',
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 72 }}>
          <p className="clients-eyebrow" style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 11, fontWeight: 500,
            color: '#e8ff47', letterSpacing: '0.18em',
            textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', gap: 10,
            marginBottom: 20,
          }}>
            <span style={{ display: 'block', width: 24, height: 1, background: '#e8ff47' }} />
            Clients
          </p>
          <h2 className="clients-headline" style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(36px, 4vw, 56px)',
            color: '#f0ede6',
            letterSpacing: '-0.03em',
            lineHeight: 1.0,
            marginBottom: 16,
          }}>
            Every client is a long-term partner.
          </h2>
          <p className="clients-sub" style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 16, lineHeight: 1.65,
            color: '#6b6b6b',
            maxWidth: 440,
          }}>
            We don't do one-off projects. We build relationships that last.
          </p>
        </div>

        {/* Client grid */}
        <div className="clients-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 2,
        }}>
          {clients.map((client, i) => (
            <div
              key={client.name}
              className="client-tile"
              style={{
                background: '#111111',
                border: '0.5px solid #1f1f1f',
                borderRadius: i === 0 ? '12px 0 0 12px' : i === clients.length - 1 ? '0 12px 12px 0' : 0,
                padding: '40px 32px',
                display: 'flex', flexDirection: 'column', gap: 24,
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#161616')}
              onMouseLeave={e => (e.currentTarget.style.background = '#111111')}
            >
              {/* Logo placeholder — initials in accent */}
              <div style={{
                width: 56, height: 56,
                borderRadius: 12,
                border: `0.5px solid ${client.accent}22`,
                background: `${client.accent}0d`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800, fontSize: 14,
                  color: client.accent,
                  letterSpacing: '-0.01em',
                }}>
                  {client.initials}
                </span>
              </div>

              {/* Name + context */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700, fontSize: 18,
                  color: '#f0ede6', letterSpacing: '-0.02em',
                }}>
                  {client.name}
                </span>
                <span style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 12, color: '#3a3a3a',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                }}>
                  {client.context}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
