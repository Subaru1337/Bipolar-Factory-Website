'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const el = canvasRef.current
    if (!el) return
    const ctx = el.getContext('2d')!
    el.width = el.offsetWidth
    el.height = el.offsetHeight
    const canvas = el

    const pts = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.1 + 0.3,
      vy: -(Math.random() * 0.22 + 0.07),
      o: Math.random() * 0.3 + 0.07,
    }))

    function getAccentRgb() {
      const raw = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()
      if (!raw) return '232,255,71'
      const hex = raw.startsWith('#') ? raw.slice(1) : raw
      if (hex.length !== 6) return '232,255,71'
      const r = parseInt(hex.slice(0, 2), 16)
      const g = parseInt(hex.slice(2, 4), 16)
      const b = parseInt(hex.slice(4, 6), 16)
      return `${r},${g},${b}`
    }

    let raf: number
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const rgb = getAccentRgb()
      pts.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${rgb},${p.o})`
        ctx.fill()
        p.y += p.vy
        if (p.y < -4) { p.y = canvas.height + 4; p.x = Math.random() * canvas.width }
      })
      raf = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section style={{
      background: 'var(--bg)',
      minHeight: '96vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      padding: '0 48px',
      transition: 'background 0.3s ease',
    }}>

      {/* Canvas — particles */}
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, zIndex: 1, width: '100%', height: '100%' }}
      />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        backgroundImage:
          'linear-gradient(var(--border) 0.5px, transparent 0.5px), linear-gradient(90deg, var(--border) 0.5px, transparent 0.5px)',
        backgroundSize: '80px 80px',
        opacity: 0.4,
      }} />

      {/* Nav */}
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '28px 0',
        borderBottom: '0.5px solid var(--border)',
        position: 'relative', zIndex: 10,
      }}>
        <div style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800,
          fontSize: 16, color: 'var(--text)', letterSpacing: '-0.02em',
        }}>
          BPF<span style={{ color: 'var(--accent)' }}>.</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {['Products', 'Work', 'Services', 'About', 'Careers'].map(link => (
            <a key={link} href={`/${link.toLowerCase()}`} style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: 13,
              color: 'var(--muted)', textDecoration: 'none',
              transition: 'color 0.2s',
            }}>
              {link}
            </a>
          ))}
          <a href="/contact" style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 500,
            color: 'var(--accent-text)', background: 'var(--accent)',
            padding: '8px 18px', borderRadius: 100, textDecoration: 'none',
            transition: 'opacity 0.2s',
          }}>
            Contact us
          </a>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero body */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 200px',
        gap: 40,
        alignItems: 'center',
        padding: '60px 0 40px',
        position: 'relative', zIndex: 10,
      }}>

        {/* Left */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 500,
            color: 'var(--accent)', letterSpacing: '0.18em', textTransform: 'uppercase',
            marginBottom: 28, display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ display: 'block', width: 24, height: 1, background: 'var(--accent)' }} />
            Bipolar Factory — Est. 2019
          </p>

          <h1 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(40px, 7vw, 88px)',
            lineHeight: 0.92, color: 'var(--text)',
            letterSpacing: '-0.03em', marginBottom: 32,
          }}>
            We built the system<br />
            that counted<br />
            <span style={{ color: 'var(--accent)' }}>40 million votes.</span>
          </h1>

          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: 16,
            color: 'var(--muted)', lineHeight: 1.6,
            maxWidth: 360, marginBottom: 40,
          }}>
            Software that matters.<br />Built from Coimbatore.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <a href="/work" style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500,
              color: 'var(--accent-text)', background: 'var(--accent)',
              padding: '13px 26px', borderRadius: 100, textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}>
              See our work
            </a>
            <a href="/contact" style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: 14,
              color: 'var(--muted)', background: 'transparent',
              padding: '13px 26px', borderRadius: 100,
              border: '0.5px solid var(--border-mid)', textDecoration: 'none',
              transition: 'border-color 0.2s, color 0.2s',
            }}>
              Work with us
            </a>
          </div>
        </div>

        {/* Right — identity panel */}
        <div style={{
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', gap: 28,
          paddingLeft: 24,
          borderLeft: '0.5px solid var(--border)',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <span style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: 10,
              color: 'var(--muted-faint)', letterSpacing: '0.12em', textTransform: 'uppercase',
            }}>
              Status
            </span>
            <span style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 500,
              color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <span style={{
                display: 'inline-block', width: 6, height: 6,
                borderRadius: '50%', background: 'var(--accent)',
                animation: 'pulse 2s ease-in-out infinite',
              }} />
              Taking on projects
            </span>
          </div>

          {[
            { label: 'Based in', value: 'Coimbatore, IN' },
            { label: 'Serving',  value: 'Global clients' },
            { label: 'Founded',  value: '2019' },
          ].map(({ label, value }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <span style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: 10,
                color: 'var(--muted-faint)', letterSpacing: '0.12em', textTransform: 'uppercase',
              }}>
                {label}
              </span>
              <span style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 500,
                color: 'var(--text)',
              }}>
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom stats + scroll hint */}
      <div style={{
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
        padding: '28px 0 36px',
        borderTop: '0.5px solid var(--border)',
        position: 'relative', zIndex: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {[
            { value: '40M+', label: 'Votes counted' },
            { value: '3+',   label: 'Countries' },
            { value: '8 yrs',label: 'Building' },
            { value: '20+',  label: 'Projects shipped' },
          ].map(({ value, label }, i) => (
            <span key={`stat-${label}`} style={{ display: 'contents' }}>
              {i > 0 && (
                <div style={{ width: '0.5px', height: 32, background: 'var(--border)', flexShrink: 0 }} />
              )}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{
                  fontFamily: 'Syne, sans-serif', fontWeight: 700,
                  fontSize: 24, color: 'var(--text)', letterSpacing: '-0.03em',
                }}>
                  {value}
                </span>
                <span style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: 10,
                  color: 'var(--muted-dim)', letterSpacing: '0.08em', textTransform: 'uppercase',
                }}>
                  {label}
                </span>
              </div>
            </span>
          ))}
        </div>

        {/* Scroll hint */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <span style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: 10,
            color: 'var(--muted-dim)', letterSpacing: '0.15em', textTransform: 'uppercase',
          }}>
            Scroll
          </span>
          <div style={{
            width: '0.5px', height: 40,
            background: 'var(--border-mid)',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: '-100%', left: 0,
              width: '100%', height: '100%',
              background: 'var(--accent)',
              animation: 'scrollDrop 1.8s ease-in-out infinite',
            }} />
          </div>
        </div>
      </div>

      {/* Cookie & privacy link */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        padding: '20px 0 28px',
        position: 'relative',
        zIndex: 10,
      }}>
        <Link
          href="/privacy"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--text)',
            textDecoration: 'underline',
            textUnderlineOffset: 4,
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}
        >
          Cookie and Privacy Policy
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M7 17L17 7M17 7H9M17 7V15" />
          </svg>
        </Link>
        <span style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 12,
          color: 'var(--muted-dim)',
        }}>
          © 2024 Bipolar Factory. All Rights Reserved.
        </span>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes scrollDrop { 0%{top:-100%} 60%{top:100%} 100%{top:100%} }
      `}</style>
    </section>
  )
}