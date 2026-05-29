'use client'
import { useLayoutEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { gsap } from '@/lib/gsap'

const services = [
  {
    number: '01',
    name: 'Technical Consulting',
    description: 'Strategy tailored to your actual business problems, not generic frameworks.',
  },
  {
    number: '02',
    name: 'Digital Transformation',
    description: 'Redefine how you operate and deliver value. End to end.',
  },
  {
    number: '03',
    name: 'Research & Development',
    description: 'Deep dives into emerging tech so you stay ahead, not catch up.',
  },
  {
    number: '04',
    name: 'Custom Application Development',
    description: 'Your vision, built precisely. Web, mobile, or platform — we ship it.',
  },
]

function ServiceItem({ number, name, description }: {
  number: string
  name: string
  description: string
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="service-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '56px 1fr',
        gap: 24,
        padding: '32px 0',
        borderBottom: '0.5px solid var(--border)',
        cursor: 'default',
        transition: 'all 0.25s ease',
      }}
    >
      <span
        className="service-number"
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 12,
          fontWeight: 500,
          color: hovered ? 'var(--accent)' : 'var(--muted-faint)',
          letterSpacing: '0.1em',
          paddingTop: 3,
          transition: 'color 0.25s ease',
        }}
      >
        {number}
      </span>
      <div
        style={{
          transform: hovered ? 'translateX(6px)' : 'translateX(0)',
          transition: 'transform 0.25s ease',
        }}
      >
        <h3
          className="service-name"
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: 22,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            marginBottom: 10,
            lineHeight: 1.2,
          }}
        >
          {name}
        </h3>
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 14,
            lineHeight: 1.65,
            color: 'var(--muted)',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      const intro = section.querySelectorAll('.services-eyebrow, .services-headline, .services-intro')
      const items = section.querySelectorAll('.service-item')

      gsap.from(intro, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          once: true,
        },
      })

      if (items.length) {
        gsap.from(items, {
          y: 20,
          duration: 0.55,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            once: true,
          },
        })
      }
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="services-section"
      style={{
        background: 'var(--bg)',
        padding: '120px 48px',
        borderBottom: '0.5px solid var(--border)',
      }}
    >
      <div className="services-layout">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p
            className="services-eyebrow"
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
              marginBottom: 32,
            }}
          >
            <span style={{ display: 'block', width: 24, height: 1, background: 'var(--accent)' }} />
            What we do
          </p>

          <h2 className="section-headline section-headline--md services-headline" style={{ marginBottom: 28 }}>
            We don&apos;t do everything.
          </h2>

          <p
            className="services-intro"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 17,
              lineHeight: 1.65,
              color: 'var(--muted)',
              maxWidth: 360,
              marginBottom: 24,
            }}
          >
            We do a few things exceptionally well.
          </p>

          <Link
            href="/services"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 14,
              fontWeight: 500,
              color: 'var(--accent)',
              textDecoration: 'none',
            }}
          >
            View all services →
          </Link>
        </div>

        <div className="services-list">
          <div style={{ height: '0.5px', background: 'var(--border)' }} />
          {services.map((service) => (
            <ServiceItem key={service.number} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
