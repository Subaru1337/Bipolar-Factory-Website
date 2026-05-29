'use client'
import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import Link from 'next/link'
import PageNav from '@/components/layout/PageNav'

const cases = [
  {
    index: '01',
    client: 'Bihar State Election Commission',
    title: 'Automating The Counting Process for Bihar State Election',
    tag: 'Government · Election Technology',
    accent: 'var(--brand-lime)',
    stats: [{ v: '40M+', l: 'Votes processed' }, { v: '0', l: 'Recounts needed' }, { v: '100%', l: 'Accuracy rate' }],
    description: 'The Bihar State Election Commission aimed to boost transparency in India\'s democracy by automating the election counting process, eliminating human errors, and ensuring an efficient and transparent procedure.',
    detail: 'This project serves as a powerful example of technology\'s role in upholding the integrity of democracy, promoting fair representation, and influencing the future of elections. Delivered under a tight deadline, deployed across multiple counting centres — worked flawlessly.',
  },
  {
    index: '02',
    client: 'Election Commission of India',
    title: 'Live Streaming Software for Kerala Legislative Assembly Elections 2021',
    tag: 'Government · Live Streaming',
    accent: 'var(--brand-blue)',
    stats: [{ v: '20,000+', l: 'Booths covered' }, { v: '150,000+', l: 'Streaming hours' }, { v: '0', l: 'Lag incidents' }],
    description: 'Bipolar Factory created a cross-platform desktop application for the Election Commissioner of India\'s office for live video streaming during the 2021 Kerala Legislative Assembly elections.',
    detail: 'The application facilitated surveillance to ensure compliance with the Model Code of Conduct across over 20,000 booths, successfully streaming for over 150,000 hours without lag, showcasing its reliability in challenging CCTV installation scenarios.',
  },
  {
    index: '03',
    client: 'WoTA',
    title: 'Worker Operations and Tracking Application',
    tag: 'Textile Industry · IoT · AI',
    accent: 'var(--brand-red)',
    stats: [{ v: 'Real-time', l: 'Activity tracking' }, { v: 'IoT + AI', l: 'Powered' }, { v: 'Gamified', l: 'Incentive system' }],
    description: 'Bipolar Factory developed WOTA which simplifies workforce management by creating a gamified environment that connects the shop floor with IoT and AI algorithms.',
    detail: 'Using proprietary hardware and software, it accurately tracks workers\' activities in real-time, incentivizing them instantly through a leaderboard. The mobile application enables supervisors to monitor and receive alerts during critical events, while WOTA\'s performance incentivizing system forms a core part of the solution.',
  },
  {
    index: '04',
    client: 'Landmark Group — Max Stores',
    title: 'Real-time Footfall Analytics for Max Stores',
    tag: 'Retail · Analytics · AI',
    accent: 'var(--brand-blue)',
    stats: [{ v: 'CCTV', l: 'Leveraged existing' }, { v: 'Real-time', l: 'Customer insights' }, { v: 'AI-powered', l: 'Analytics' }],
    description: 'Bipolar Factory transformed Max stores\' in-store experience by creating a cutting-edge footfall analytics solution leveraging existing CCTV cameras.',
    detail: 'The system captures and analyzes real-time customer movements, offering valuable insights into shopper behavior and store hotspots. This technology optimizes store layouts, refines marketing strategies, and enhances the overall customer experience, ensuring Max stores maintains a competitive edge.',
  },
  {
    index: '05',
    client: 'Zigma Global Environ Solutions',
    title: 'EPR Portal for Streamlining Waste Management',
    tag: 'Waste Management · Web Platform',
    accent: 'var(--brand-lime)',
    stats: [{ v: '85L tons', l: 'MSW processed' }, { v: '15L tons', l: 'RDF recovered' }, { v: 'Digital', l: 'EPR credits' }],
    description: 'Bipolar Factory enhanced Zigma\'s Extended Producer Responsibility (EPR) solutions by developing a web portal, streamlining their waste management process.',
    detail: 'The digital transformation enabled customers to instantly purchase EPR credits, and Zigma successfully processed around 85 lakh tons of municipal solid waste (MSW), recovering 15 lakh tons of Refuse-Derived Fuel (RDF). The project also upgraded Zigma\'s digitization strategy, enhancing transparency in tracking material movement.',
  },
]

export default function WorkPage() {
  const pageRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.page-eyebrow', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out', delay: 0.1 })
      gsap.from('.page-headline', { opacity: 0, y: 40, duration: 0.8, ease: 'power3.out', delay: 0.2 })
      gsap.from('.case-block', {
        opacity: 0, y: 60,
        duration: 0.8, stagger: 0.18, ease: 'power3.out',
        scrollTrigger: { trigger: '.cases-list', start: 'top 80%', once: true }
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} style={{ background: 'var(--bg)', minHeight: '100vh', color: 'var(--text)' }}>
      <PageNav active="Work" />

      {/* Hero */}
      <div style={{ padding: '140px 48px 80px', borderBottom: '0.5px solid var(--border)', maxWidth: 1400, margin: '0 auto' }}>
        <p className="page-eyebrow" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 500, color: 'var(--accent)', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
          <span style={{ display: 'block', width: 24, height: 1, background: 'var(--accent)' }} />
          Case Studies
        </p>
        <h1 className="section-headline section-headline--page page-headline" style={{ maxWidth: 800 }}>
          Spotlight on<br /><span style={{ color: 'var(--accent)' }}>success.</span>
        </h1>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 18, color: 'var(--muted)', lineHeight: 1.6, maxWidth: 480 }}>
          Real projects. Real stakes. Real results. Here's what we've built that matters.
        </p>
      </div>

      {/* Cases */}
      <div className="cases-list" style={{ maxWidth: 1400, margin: '0 auto' }}>
        {cases.map((c, i) => (
          <div key={c.index} className="case-block" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            borderBottom: '0.5px solid var(--border)',
            minHeight: 480,
          }}>
            {/* Left */}
            <div style={{
              padding: '72px 48px',
              borderRight: '0.5px solid var(--border)',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              background: i % 2 === 1 ? 'var(--surface-stripe)' : 'var(--bg)',
              position: 'relative', overflow: 'hidden',
            }}>
              <span style={{
                position: 'absolute', bottom: 16, right: 24,
                fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 140,
                color: 'var(--number-watermark)', letterSpacing: '-0.04em', lineHeight: 1, userSelect: 'none',
              }}>{c.index}</span>

              <div>
                <span style={{
                  display: 'inline-block', fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 500,
                  color: c.accent, letterSpacing: '0.12em', textTransform: 'uppercase',
                  border: `0.5px solid ${c.accent}40`, padding: '5px 12px', borderRadius: 100, marginBottom: 24,
                }}>{c.tag}</span>

                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'var(--muted-faint)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>{c.client}</p>

                <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 24, maxWidth: 420 }}>{c.title}</h2>

                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 420 }}>{c.description}</p>
              </div>
            </div>

            {/* Right */}
            <div style={{ padding: '72px 48px', background: 'var(--surface)', display: 'flex', flexDirection: 'column', gap: 40 }}>
              {/* Stats */}
              <div style={{ display: 'flex', gap: 40 }}>
                {c.stats.map((s, si) => (
                  <div key={si} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(20px, 2.5vw, 32px)', color: c.accent, letterSpacing: '-0.02em', lineHeight: 1 }}>{s.v}</span>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: 'var(--muted-dim)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.l}</span>
                  </div>
                ))}
              </div>

              <div style={{ height: '0.5px', background: 'var(--border)' }} />

              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: 'var(--muted)', lineHeight: 1.75 }}>{c.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', padding: '100px 48px', borderTop: '0.5px solid var(--border)' }}>
        <h2 className="section-headline section-headline--cta">
          Your project could be<br /><span style={{ color: 'var(--accent)' }}>next.</span>
        </h2>
        <Link href="/contact" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 500, color: 'var(--accent-text)', background: 'var(--accent)', padding: '16px 36px', borderRadius: 100, textDecoration: 'none' }}>
          Start a project →
        </Link>
      </div>
    </div>
  )
}