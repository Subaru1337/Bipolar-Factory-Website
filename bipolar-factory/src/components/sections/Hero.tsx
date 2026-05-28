'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Particle animation (ported directly from approved HTML)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const pts = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.1 + 0.3,
      vy: -(Math.random() * 0.22 + 0.07),
      o: Math.random() * 0.3 + 0.07,
    }))

    let raf: number
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      pts.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(232,255,71,${p.o})`
        ctx.fill()
        p.y += p.vy
        if (p.y < -4) { p.y = canvas.height + 4; p.x = Math.random() * canvas.width }
      })
      raf = requestAnimationFrame(draw)
    }
    draw()

    // Handle resize
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
      background: '#0a0a0a',
      minHeight: '96vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      padding: '0 48px',
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
          'linear-gradient(#1a1a1a 0.5px, transparent 0.5px), linear-gradient(90deg, #1a1a1a 0.5px, transparent 0.5px)',
        backgroundSize: '80px 80px',
        opacity: 0.3,
      }} />

      {/* Nav */}
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '28px 0',
        borderBottom: '0.5px solid #1f1f1f',
        position: 'relative', zIndex: 10,
      }}>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 16, color: '#f0ede6', letterSpacing: '-0.02em' }}>
          BPF<span style={{ color: '#e8ff47' }}>.</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {['Products', 'Work', 'Services', 'About', 'Careers'].map(link => (
            <a key={link} href={`/${link.toLowerCase()}`} style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: 13,
              color: '#6b6b6b', textDecoration: 'none',
            }}>
              {link}
            </a>
          ))}
          <a href="/contact" style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 500,
            color: '#0a0a0a', background: '#e8ff47',
            padding: '8px 18px', borderRadius: 100, textDecoration: 'none',
          }}>
            Contact us
          </a>
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
            color: '#e8ff47', letterSpacing: '0.18em', textTransform: 'uppercase',
            marginBottom: 28, display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ display: 'block', width: 24, height: 1, background: '#e8ff47' }} />
            Bipolar Factory — Est. 2019
          </p>

          <h1 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(40px, 7vw, 88px)',
            lineHeight: 0.92, color: '#f0ede6',
            letterSpacing: '-0.03em', marginBottom: 32,
          }}>
            We built the system<br />
            that counted<br />
            <span style={{ color: '#e8ff47' }}>40 million votes.</span>
          </h1>

          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: 16,
            color: '#6b6b6b', lineHeight: 1.6,
            maxWidth: 360, marginBottom: 40,
          }}>
            Software that matters.<br />Built from Coimbatore.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <a href="/work" style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500,
              color: '#0a0a0a', background: '#e8ff47',
              padding: '13px 26px', borderRadius: 100, textDecoration: 'none',
            }}>
              See our work
            </a>
            <a href="/contact" style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: 14,
              color: '#6b6b6b', background: 'transparent',
              padding: '13px 26px', borderRadius: 100,
              border: '0.5px solid #2a2a2a', textDecoration: 'none',
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
          borderLeft: '0.5px solid #1f1f1f',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#2e2e2e', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Status</span>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 500, color: '#e8ff47', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{
                display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#e8ff47',
                animation: 'pulse 2s ease-in-out infinite',
              }} />
              Taking on projects
            </span>
          </div>
          {[
            { label: 'Based in', value: 'Coimbatore, IN' },
            { label: 'Serving', value: 'Global clients' },
            { label: 'Founded', value: '2019' },
          ].map(({ label, value }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#2e2e2e', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{label}</span>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 500, color: '#f0ede6' }}>{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom stats + scroll hint */}
      <div style={{
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
        padding: '28px 0 36px',
        borderTop: '0.5px solid #1a1a1a',
        position: 'relative', zIndex: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {[
            { value: '40M+', label: 'Votes counted' },
            { value: '3+', label: 'Countries' },
            { value: '8 yrs', label: 'Building' },
            { value: '20+', label: 'Projects shipped' },
          ].map(({ value, label }, i) => (
            <span key={`stat-${label}`} style={{ display: 'contents' }}>
              {i > 0 && <div key={`d${i}`} style={{ width: '0.5px', height: 32, background: '#1f1f1f' }} />}
              <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 24, color: '#f0ede6', letterSpacing: '-0.03em' }}>{value}</span>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#3a3a3a', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</span>
              </div>
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#3a3a3a', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: '0.5px', height: 40, background: '#2a2a2a', position: 'relative', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', top: '-100%', left: 0, width: '100%', height: '100%',
              background: '#e8ff47',
              animation: 'scrollDrop 1.8s ease-in-out infinite',
            }} />
          </div>
        </div>
      </div>

      {/* Keyframe styles */}
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes scrollDrop { 0%{top:-100%} 60%{top:100%} 100%{top:100%} }
      `}</style>
    </section>
  )
}
