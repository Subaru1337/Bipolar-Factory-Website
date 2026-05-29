'use client'
import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

export default function Careers() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(['.careers-eyebrow', '.careers-headline', '.careers-sub', '.careers-cta'], {
        opacity: 0, y: 40,
        duration: 0.7, stagger: 0.14, ease: 'power3.out',
        scrollTrigger: { trigger: '.careers-section', start: 'top 70%', once: true }
      })

      // Subtle background glow pulse
      gsap.to('.careers-glow', {
        opacity: 0.15,
        scale: 1.1,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="careers-section"
      style={{
        background: '#080808',
        padding: '160px 48px',
        borderBottom: '0.5px solid #1f1f1f',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div className="careers-glow" style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600, height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, #e8ff4720 0%, transparent 70%)',
        opacity: 0.08,
        pointerEvents: 'none',
      }} />

      {/* Grid lines overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(#1a1a1a 0.5px, transparent 0.5px), linear-gradient(90deg, #1a1a1a 0.5px, transparent 0.5px)',
        backgroundSize: '80px 80px',
        opacity: 0.15,
      }} />

      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: 800, margin: '0 auto',
        textAlign: 'center',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0,
      }}>
        <p className="careers-eyebrow" style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 11, fontWeight: 500,
          color: '#e8ff47', letterSpacing: '0.18em',
          textTransform: 'uppercase',
          display: 'flex', alignItems: 'center', gap: 10,
          marginBottom: 32,
        }}>
          <span style={{ display: 'block', width: 24, height: 1, background: '#e8ff47' }} />
          Join the team
          <span style={{ display: 'block', width: 24, height: 1, background: '#e8ff47' }} />
        </p>

        <h2 className="careers-headline" style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(40px, 6vw, 72px)',
          color: '#f0ede6',
          letterSpacing: '-0.03em',
          lineHeight: 1.0,
          marginBottom: 28,
          textAlign: 'center',
        }}>
          We're building things that matter.{' '}
          <span style={{ color: '#e8ff47' }}>Come build with us.</span>
        </h2>

        <p className="careers-sub" style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 17, lineHeight: 1.65,
          color: 'var(--muted)',
          marginBottom: 56,
          textAlign: 'center',
        }}>
          Coimbatore-based. Globally minded. Always hiring sharp people.
        </p>

        <a className="careers-cta" href="/careers" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 15, fontWeight: 500,
          color: '#0a0a0a', background: '#e8ff47',
          padding: '16px 36px', borderRadius: 100,
          textDecoration: 'none',
          transition: 'opacity 0.2s ease',
        }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          See open roles →
        </a>
      </div>
    </section>
  )
}
