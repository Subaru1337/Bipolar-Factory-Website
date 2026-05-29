'use client'
import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

const testimonials = [
  {
    quote: "Bipolar Factory's development of the EPR portal has been a cornerstone in modernizing our waste management services.",
    name: 'Boopathy Dharmaraj',
    company: 'Zigma',
    context: 'Waste Management · EPR Portal',
  },
  {
    quote: "The indoor GPS solution has been a game-changer for weaving units in Coimbatore. New level of precision to our operations.",
    name: 'Elavarasu Arumugham',
    company: 'WoTA',
    context: 'Textile Industry · Indoor GPS',
  },
  {
    quote: "The automated vote counting system was a testament to their technological prowess and understanding of complex systems.",
    name: 'Gajapathy Chakravarthy',
    company: 'iNET Secure Labs',
    context: 'Election Technology',
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(['.testimonials-eyebrow', '.testimonials-headline'], {
        opacity: 0, y: 30,
        duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.testimonials-section', start: 'top 72%', once: true }
      })

      gsap.from('.testimonial-card', {
        opacity: 0, y: 40,
        duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.testimonials-grid', start: 'top 78%', once: true }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="testimonials-section"
      style={{
        background: 'var(--section-alt)',
        padding: '120px 48px',
        borderBottom: '0.5px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 64, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div>
            <p className="testimonials-eyebrow" style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 11, fontWeight: 500,
              color: 'var(--accent)', letterSpacing: '0.18em',
              textTransform: 'uppercase',
              display: 'flex', alignItems: 'center', gap: 10,
              marginBottom: 20,
            }}>
              <span style={{ display: 'block', width: 24, height: 1, background: 'var(--accent)' }} />
              What clients say
            </p>
            <h2 className="section-headline section-headline--md testimonials-headline">
              Results that speak.
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="testimonials-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 2,
        }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card"
              style={{
                background: 'var(--surface)',
                border: '0.5px solid var(--border)',
                borderRadius: i === 0 ? '12px 0 0 12px' : i === 2 ? '0 12px 12px 0' : 0,
                padding: '40px 36px',
                display: 'flex', flexDirection: 'column', gap: 32,
              }}
            >
              {/* Quote mark */}
              <span style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 64, lineHeight: 1,
                color: 'var(--accent)', opacity: 0.3,
                fontWeight: 800,
                display: 'block',
                marginBottom: -16,
              }}>
                "
              </span>

              <blockquote style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 15, lineHeight: 1.7,
                color: 'var(--muted)',
                margin: 0, flex: 1,
              }}>
                {t.quote}
              </blockquote>

              {/* Divider */}
              <div style={{ height: '0.5px', background: 'var(--border)' }} />

              {/* Attribution */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 14, fontWeight: 500,
                  color: 'var(--text)',
                }}>
                  {t.name}
                </span>
                <span style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 12,
                  color: 'var(--muted-dim)',
                  letterSpacing: '0.06em',
                }}>
                  {t.company} · {t.context}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
