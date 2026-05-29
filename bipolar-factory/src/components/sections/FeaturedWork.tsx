'use client'
import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

export default function FeaturedWork() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Left column stagger reveal
      gsap.from(['.work-eyebrow', '.work-headline', '.work-body', '.work-cta'], {
        opacity: 0, y: 50,
        duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.work-section',
          start: 'top 70%',
          once: true,
        }
      })

      // Right card slides in
      gsap.from('.work-card', {
        opacity: 0, x: 40,
        duration: 0.9, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.work-section',
          start: 'top 65%',
          once: true,
        }
      })

      // Stats count up (40M votes)
      const votesEl = document.querySelector('.stat-votes')
      if (votesEl) {
        gsap.from(votesEl, {
          textContent: 0,
          duration: 2,
          ease: 'power2.out',
          snap: { textContent: 1 },
          scrollTrigger: { trigger: '.work-card', start: 'top 75%', once: true },
          onUpdate: function () {
            votesEl.textContent = Math.round(Number(votesEl.textContent)) + 'M+'
          }
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="work-section"
      style={{
        background: 'var(--bg)',
        padding: '120px 48px',
        borderBottom: '0.5px solid var(--border)',
      }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: 80,
        alignItems: 'center',
        maxWidth: 1400,
        margin: '0 auto',
      }}>

        {/* Left column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <p className="work-eyebrow" style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 11, fontWeight: 500,
            color: 'var(--accent)', letterSpacing: '0.18em',
            textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', gap: 10,
            marginBottom: 32,
          }}>
            <span style={{ display: 'block', width: 24, height: 1, background: 'var(--accent)' }} />
            Featured work — Case study 01
          </p>

          <h2 className="work-headline" style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(40px, 5vw, 64px)',
            lineHeight: 1.0,
            color: 'var(--text)',
            letterSpacing: '-0.03em',
            marginBottom: 40,
          }}>
            Counting democracy,<br />
            <span style={{ color: 'var(--accent)' }}>one vote at a time.</span>
          </h2>

          <div className="work-body" style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 48 }}>
            {[
              'The Bihar State Election Commission needed a transparent, tamper-proof vote counting system for one of India\'s most complex electoral processes.',
              'We built it. End to end. The system processed over 40 million votes with real-time verification, zero recounts, and full audit trails.',
              'Delivered under a tight deadline. Deployed across multiple counting centres. Worked flawlessly.',
            ].map((para, i) => (
              <p key={i} style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 16, lineHeight: 1.7,
                color: 'var(--muted)',
                maxWidth: 520,
              }}>
                {para}
              </p>
            ))}
          </div>

          <a className="work-cta" href="/work/bihar-election" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 14, fontWeight: 500,
            color: 'var(--accent)',
            textDecoration: 'none',
            letterSpacing: '0.02em',
          }}>
            Read full case study
            <span style={{ display: 'inline-block', transition: 'transform 0.2s' }}>→</span>
          </a>
        </div>

        {/* Right column — stats card */}
        <div className="work-card" style={{
          background: 'var(--surface)',
          border: '0.5px solid var(--border)',
          borderRadius: 16,
          padding: '48px 40px',
          display: 'flex', flexDirection: 'column', gap: 40,
        }}>
          {/* 2×2 stats grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px 24px',
          }}>
            {[
              { valueClass: 'stat-votes', value: '40M+', label: 'Votes processed' },
              { value: '0', label: 'Recounts needed' },
              { value: '100%', label: 'Accuracy rate' },
              { value: 'Bihar', label: 'State, India' },
            ].map(({ valueClass, value, label }, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span
                  className={valueClass}
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(28px, 3vw, 40px)',
                    color: 'var(--text)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  {value}
                </span>
                <span style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 11, color: 'var(--muted-dim)',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                }}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: '0.5px', background: 'var(--border)' }} />

          {/* Quote */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <blockquote style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 15, lineHeight: 1.65,
              color: 'var(--muted)',
              fontStyle: 'italic',
              margin: 0,
              paddingLeft: 20,
              borderLeft: '2px solid var(--accent)',
            }}>
              "The automated vote counting system developed by Bipolar Factory was a testament to their technological prowess and understanding of complex systems."
            </blockquote>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2, paddingLeft: 20 }}>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 500, color: 'var(--text)' }}>
                Gajapathy Chakravarthy
              </span>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: 'var(--muted-dim)', letterSpacing: '0.08em' }}>
                iNET Secure Labs
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
