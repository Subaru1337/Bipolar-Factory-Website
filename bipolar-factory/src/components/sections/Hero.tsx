'use client'
import { useEffect, useRef } from 'react'
import ThemeToggle from '@/components/ThemeToggle'
import { isExternalNav, navHref } from '@/lib/nav'

const HERO_VIDEO_SRC = '/videos/A_cinematic_slow_motion_simula.mp4'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const play = () => {
      video.play().catch(() => {})
    }

    play()
    video.addEventListener('loadeddata', play)
    return () => video.removeEventListener('loadeddata', play)
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

      {/* Background video */}
      <div className="hero-video-wrap" aria-hidden>
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />
      </div>

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        backgroundImage:
          'linear-gradient(var(--border) 0.5px, transparent 0.5px), linear-gradient(90deg, var(--border) 0.5px, transparent 0.5px)',
        backgroundSize: '80px 80px',
        opacity: 0.35,
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
            <a
              key={link}
              href={navHref(link)}
              {...(isExternalNav(link) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: 13,
                color: 'var(--muted)', textDecoration: 'none',
                transition: 'color 0.2s',
              }}
            >
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
            Bipolar Factory — Est. 2020
          </p>

          <h1 className="section-headline section-headline--hero">
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
            <span className="hero-meta-label">Status</span>
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
            { label: 'Founded',  value: '2020' },
          ].map(({ label, value }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <span className="hero-meta-label">{label}</span>
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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes scrollDrop { 0%{top:-100%} 60%{top:100%} 100%{top:100%} }
      `}</style>
    </section>
  )
}
