'use client'
import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'
import Link from 'next/link'

const NAV = ['Products', 'Work', 'Services', 'About', 'Careers']

const services = [
  {
    number: '01',
    name: 'Technical Consulting',
    description: 'Our consulting services offer expert guidance, efficiently aligning your business goals with impactful and innovative technological strategies.',
    detail: 'Our technical consulting process starts with understanding your unique business needs and challenges. We conduct a thorough assessment of your current tech landscape and identify areas for improvement, then collaborate to develop a tailored strategy.',
  },
  {
    number: '02',
    name: 'Digital Transformation',
    description: 'As your technology partner we empower you to modernize operations, uphold efficiency and strategically prepare your business to meet the challenges of tomorrow.',
    detail: 'We help businesses redefine how they operate and deliver value. End to end digital transformation — from strategy through implementation and beyond.',
  },
  {
    number: '03',
    name: 'Custom Software Development',
    description: 'Budding entrepreneur or established player, unique businesses need unique solutions. We specialise in developing bespoke software that fits your specific needs.',
    detail: 'We specialize in enterprise applications, CRM systems, e-commerce platforms, mobile apps, enterprise AI solutions and cloud-based solutions. Whether improving operational efficiency or enhancing customer engagement, we build software that meets your exact needs.',
  },
  {
    number: '04',
    name: 'Research Assist',
    description: 'Stay at the forefront of industry trends with our research services, providing invaluable insights into the latest technological advancements.',
    detail: 'Ensure your business consistently operates at the cutting edge of progress. We conduct deep dives into emerging technologies so you stay ahead, not catch up.',
  },
  {
    number: '05',
    name: 'Design Services',
    description: 'Harmony of aesthetics and functionality defines our design services. Whether crafting an efficient UI or delivering an enriching UX, we guarantee your digital presence is both functional and visually captivating.',
    detail: 'From wireframes to polished interfaces, our design team creates experiences that users love and businesses trust.',
  },
  {
    number: '06',
    name: 'Rapid Prototyping',
    description: 'Swiftly visualize, test, and refine your concepts, expediting the journey from ideation to implementation in record time.',
    detail: 'Turn ideas into tangible products quickly. Our prototyping process lets you validate concepts before full investment.',
  },
  {
    number: '07',
    name: 'Management Information Services',
    description: 'Optimize your decision-making with robust systems developed to seamlessly collect, process, and analyze data, delivering actionable insights.',
    detail: 'MIS solutions that give your leadership team the real-time visibility they need to make confident decisions.',
  },
]

const faqs = [
  {
    q: 'What exactly is Technology Partnership, and how does it differ from traditional tech services?',
    a: 'TPaaS, or Technology Partner as a Service, is a holistic approach to technology services. Unlike traditional tech services which focus on specific aspects, TPaaS offers a comprehensive package integrating consulting, software development, digital transformation, and more under one umbrella — focusing on long-term business growth rather than short-term solutions.',
  },
  {
    q: 'How does the technical consulting process work?',
    a: 'We start with understanding your unique business needs. We conduct a thorough assessment of your current tech landscape, identify areas for improvement, then collaborate to develop a tailored tech strategy aligned with your business objectives.',
  },
  {
    q: 'What kind of custom software solutions can you develop?',
    a: 'We specialize in enterprise applications, CRM systems, e-commerce platforms, mobile apps, enterprise AI solutions and cloud-based solutions. If you need a solution for improving operational efficiency, enhancing customer engagement, or managing data — we build it.',
  },
  {
    q: 'How do you ensure quality and reliability?',
    a: 'Quality and reliability are paramount. We employ rigorous QA processes including unit testing, integration testing, and user acceptance testing (UAT). Our teams adhere to best practices in software engineering and stay updated with the latest trends.',
  },
  {
    q: 'Who owns the intellectual property?',
    a: 'The ownership of intellectual property created during our engagement belongs to the client. We believe in empowering clients by ensuring complete ownership and control over IP developed for them — always outlined clearly in our service agreements.',
  },
]

function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 48px', height: 64,
      background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(12px)',
      borderBottom: '0.5px solid #1f1f1f',
    }}>
      <Link href="/" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 16, color: '#f0ede6', textDecoration: 'none', letterSpacing: '-0.02em' }}>
        BPF<span style={{ color: '#e8ff47' }}>.</span>
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        {NAV.map(n => (
          <Link key={n} href={`/${n.toLowerCase()}`} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: n === 'Services' ? '#e8ff47' : 'var(--muted)', textDecoration: 'none' }}>
            {n}
          </Link>
        ))}
        <Link href="/contact" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 500, color: '#0a0a0a', background: '#e8ff47', padding: '8px 18px', borderRadius: 100, textDecoration: 'none' }}>
          Contact us
        </Link>
      </div>
    </nav>
  )
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '0.5px solid #1f1f1f' }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '24px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
      }}>
        <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 17, color: '#f0ede6', letterSpacing: '-0.01em', maxWidth: '85%' }}>{q}</span>
        <span style={{ color: '#e8ff47', fontSize: 20, fontWeight: 300, transition: 'transform 0.3s', transform: open ? 'rotate(45deg)' : 'rotate(0deg)', flexShrink: 0 }}>+</span>
      </button>
      <div style={{
        overflow: 'hidden', maxHeight: open ? 300 : 0,
        transition: 'max-height 0.4s ease',
      }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, paddingBottom: 24 }}>{a}</p>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const pageRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.page-eyebrow', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out', delay: 0.1 })
      gsap.from('.page-headline', { opacity: 0, y: 40, duration: 0.8, ease: 'power3.out', delay: 0.2 })
      gsap.from('.service-row', {
        opacity: 0, y: 40,
        duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.services-list', start: 'top 75%', once: true }
      })
      gsap.from('.faq-section', {
        opacity: 0, y: 40, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.faq-section', start: 'top 80%', once: true }
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} style={{ background: '#0a0a0a', minHeight: '100vh', color: '#f0ede6' }}>
      <Nav />

      {/* Hero */}
      <div style={{ padding: '140px 48px 80px', borderBottom: '0.5px solid #1f1f1f', maxWidth: 1400, margin: '0 auto' }}>
        <p className="page-eyebrow" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 500, color: '#e8ff47', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
          <span style={{ display: 'block', width: 24, height: 1, background: '#e8ff47' }} />
          Technology Partnership
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end' }}>
          <h1 className="page-headline" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 0.92, letterSpacing: '-0.04em' }}>
            Tech solutions.<br /><span style={{ color: '#e8ff47' }}>Human understanding.</span>
          </h1>
          <div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 17, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 24 }}>
              Whether you're a budding entrepreneur, a startup, or a large corporation — our Technology Partnership Program is your ultimate resource.
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: 'var(--muted-dim)', lineHeight: 1.7, marginBottom: 32 }}>
              At its core, every business concept demands resilient, dependable, and revolutionary technology. Our program is more than a service — it is a partnership that understands and delivers on your vision.
            </p>
            <Link href="/contact" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#0a0a0a', background: '#e8ff47', padding: '12px 28px', borderRadius: 100, textDecoration: 'none' }}>
              Get in touch →
            </Link>
          </div>
        </div>
      </div>

      {/* Pillars */}
      <div style={{ padding: '24px 0 0', borderBottom: '0.5px solid #1f1f1f' }}>
        <div style={{ display: 'flex', borderBottom: '0.5px solid #1f1f1f' }}>
          {['Dedicated Development Team', 'Agile Methodology', 'Research Partnerships', 'Scalable Training', 'Quality Software', 'IP Security'].map((p, i) => (
            <div key={p} style={{
              flex: 1, padding: '20px 24px',
              borderRight: i < 5 ? '0.5px solid #1f1f1f' : 'none',
              fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 500,
              color: 'var(--muted-dim)', letterSpacing: '0.02em',
            }}>{p}</div>
          ))}
        </div>
      </div>

      {/* Services list */}
      <div className="services-list" style={{ maxWidth: 1400, margin: '0 auto', padding: '0 48px' }}>
        <div style={{ height: '0.5px', background: '#1f1f1f' }} />
        {services.map((s, i) => (
          <div key={s.number} className="service-row" style={{
            display: 'grid', gridTemplateColumns: '80px 1fr 1fr',
            gap: '0 48px', padding: '40px 0',
            borderBottom: '0.5px solid #1f1f1f',
            alignItems: 'start',
          }}>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'var(--muted-faint)', letterSpacing: '0.1em', paddingTop: 4 }}>{s.number}</span>
            <div>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 22, letterSpacing: '-0.02em', color: '#f0ede6', marginBottom: 12 }}>{s.name}</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: 'var(--muted)', lineHeight: 1.65 }}>{s.description}</p>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: 'var(--muted-dim)', lineHeight: 1.65, paddingTop: 4 }}>{s.detail}</p>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="faq-section" style={{ maxWidth: 1400, margin: '0 auto', padding: '100px 48px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#e8ff47', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
          <span style={{ display: 'block', width: 24, height: 1, background: '#e8ff47' }} />
          FAQs
        </p>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 56px)', letterSpacing: '-0.03em', marginBottom: 56 }}>Common questions.</h2>
        <div style={{ height: '0.5px', background: '#1f1f1f' }} />
        {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', padding: '100px 48px', borderTop: '0.5px solid #1f1f1f', background: '#080808' }}>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '-0.03em', marginBottom: 16 }}>
          Your path to excellence<br /><span style={{ color: '#e8ff47' }}>begins here.</span>
        </h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 16, color: 'var(--muted)', marginBottom: 40 }}>Discover a partnership that transcends the ordinary.</p>
        <Link href="/contact" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 500, color: '#0a0a0a', background: '#e8ff47', padding: '16px 36px', borderRadius: 100, textDecoration: 'none' }}>
          Get in touch →
        </Link>
      </div>
    </div>
  )
}