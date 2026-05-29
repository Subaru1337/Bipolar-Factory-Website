'use client'
import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'
import Link from 'next/link'
import PageNav from '@/components/layout/PageNav'

const pillars = [
  'Dedicated Development Team',
  'Agile Methodology',
  'Research Partnerships',
  'Scalable Training',
  'Quality Software',
  'IP Security',
]

const services = [
  {
    number: '01',
    name: 'Technical Consulting',
    description:
      'Our consulting services offer expert guidance, efficiently aligning your business goals with impactful and innovative technological strategies.',
    detail:
      'Our technical consulting process starts with understanding your unique business needs and challenges. We conduct a thorough assessment of your current tech landscape and identify areas for improvement, then collaborate to develop a tailored strategy.',
  },
  {
    number: '02',
    name: 'Digital Transformation',
    description:
      'As your technology partner we empower you to modernize operations, uphold efficiency and strategically prepare your business to meet the challenges of tomorrow.',
    detail:
      'We help businesses redefine how they operate and deliver value. End to end digital transformation — from strategy through implementation and beyond.',
  },
  {
    number: '03',
    name: 'Custom Software Development',
    description:
      'Budding entrepreneur or established player, unique businesses need unique solutions. We specialise in developing bespoke software that fits your specific needs.',
    detail:
      'We specialize in enterprise applications, CRM systems, e-commerce platforms, mobile apps, enterprise AI solutions and cloud-based solutions. Whether improving operational efficiency or enhancing customer engagement, we build software that meets your exact needs.',
  },
  {
    number: '04',
    name: 'Research Assist',
    description:
      'Stay at the forefront of industry trends with our research services, providing invaluable insights into the latest technological advancements.',
    detail:
      'Ensure your business consistently operates at the cutting edge of progress. We conduct deep dives into emerging technologies so you stay ahead, not catch up.',
  },
  {
    number: '05',
    name: 'Design Services',
    description:
      'Harmony of aesthetics and functionality defines our design services. Whether crafting an efficient UI or delivering an enriching UX, we guarantee your digital presence is both functional and visually captivating.',
    detail:
      'From wireframes to polished interfaces, our design team creates experiences that users love and businesses trust.',
  },
  {
    number: '06',
    name: 'Rapid Prototyping',
    description:
      'Swiftly visualize, test, and refine your concepts, expediting the journey from ideation to implementation in record time.',
    detail:
      'Turn ideas into tangible products quickly. Our prototyping process lets you validate concepts before full investment.',
  },
  {
    number: '07',
    name: 'Management Information Services',
    description:
      'Optimize your decision-making with robust systems developed to seamlessly collect, process, and analyze data, delivering actionable insights.',
    detail:
      'MIS solutions that give your leadership team the real-time visibility they need to make confident decisions.',
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

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '0.5px solid var(--border)' }}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: 24,
        }}
      >
        <span
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: 17,
            color: 'var(--text)',
            letterSpacing: '-0.01em',
          }}
        >
          {q}
        </span>
        <span
          style={{
            color: 'var(--accent)',
            fontSize: 20,
            fontWeight: 300,
            transition: 'transform 0.3s',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
            flexShrink: 0,
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          overflow: 'hidden',
          maxHeight: open ? 400 : 0,
          transition: 'max-height 0.4s ease',
        }}
      >
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 15,
            color: 'var(--muted)',
            lineHeight: 1.7,
            paddingBottom: 24,
            maxWidth: 900,
          }}
        >
          {a}
        </p>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const pageRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const root = pageRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      gsap.from(root.querySelectorAll('.page-eyebrow, .page-headline, .services-hero-copy'), {
        opacity: 0,
        y: 32,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.1,
      })

      const rows = root.querySelectorAll('.service-page-row')
      if (rows.length) {
        gsap.from(rows, {
          y: 28,
          duration: 0.55,
          stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: root.querySelector('.services-page-list'),
            start: 'top 85%',
            once: true,
          },
        })
      }
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} className="services-page">
      <PageNav active="Services" />

      <header className="page-section services-hero">
        <p className="page-eyebrow">
          <span className="eyebrow-line" />
          Technology Partnership
        </p>
        <div className="services-hero-grid">
          <h1 className="page-headline">
            Tech solutions.
            <br />
            <span style={{ color: 'var(--accent)' }}>Human understanding.</span>
          </h1>
          <div className="services-hero-copy">
            <p>
              Whether you&apos;re a budding entrepreneur, a startup, or a large corporation — our Technology
              Partnership Program is your ultimate resource.
            </p>
            <p style={{ color: 'var(--muted-dim)' }}>
              At its core, every business concept demands resilient, dependable, and revolutionary technology. Our
              program is more than a service — it is a partnership that understands and delivers on your vision.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in touch →
            </Link>
          </div>
        </div>
      </header>

      <section className="service-pillars-wrap">
        <div className="service-pillars page-section-inner">
          {pillars.map((p) => (
            <div key={p} className="service-pillar">
              {p}
            </div>
          ))}
        </div>
      </section>

      <section className="services-page-list page-section-inner">
        <div style={{ height: '0.5px', background: 'var(--border)' }} />
        {services.map((s) => (
          <article key={s.number} className="service-page-row">
            <span className="service-page-num">{s.number}</span>
            <div className="service-page-main">
              <h3>{s.name}</h3>
              <p>{s.description}</p>
            </div>
            <p className="service-page-detail">{s.detail}</p>
          </article>
        ))}
      </section>

      <section className="faq-section page-section page-section-inner">
        <p className="page-eyebrow" style={{ marginBottom: 24 }}>
          <span className="eyebrow-line" />
          FAQs
        </p>
        <h2 className="faq-title">Common questions.</h2>
        <div style={{ height: '0.5px', background: 'var(--border)' }} />
        {faqs.map((f, i) => (
          <FAQItem key={i} q={f.q} a={f.a} />
        ))}
      </section>

      <section className="page-cta">
        <h2>
          Your path to excellence
          <br />
          <span style={{ color: 'var(--accent)' }}>begins here.</span>
        </h2>
        <p>Discover a partnership that transcends the ordinary.</p>
        <Link href="/contact" className="btn-primary">
          Get in touch →
        </Link>
      </section>
    </div>
  )
}
