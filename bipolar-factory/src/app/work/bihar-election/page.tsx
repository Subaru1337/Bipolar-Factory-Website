import Link from 'next/link'
import PageNav from '@/components/layout/PageNav'

export default function BiharElectionCaseStudyPage() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh' }}>
      <PageNav active="Work" />

      <main style={{ maxWidth: 900, margin: '0 auto', padding: '120px 48px 80px' }}>
        <Link
          href="/work"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 13,
            color: 'var(--muted)',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
        >
          ← Back to case studies
        </Link>

        <p
          className="page-eyebrow"
          style={{ marginTop: 32, marginBottom: 20 }}
        >
          <span className="eyebrow-line" />
          Case study
        </p>

        <h1
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(34px, 5vw, 58px)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: 24,
          }}
        >
          Automating Vote Counting for Bihar State Election Commission
        </h1>

        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 16,
            color: 'var(--muted)',
            lineHeight: 1.75,
            marginBottom: 36,
          }}
        >
          The Bihar State Election Commission needed a transparent, reliable, and efficient counting
          process. Our team designed and delivered an automated counting workflow to reduce human
          error, improve process visibility, and strengthen trust in election operations at scale.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
          <button type="button" className="btn-primary" style={{ border: 'none', cursor: 'pointer', fontSize: 14 }}>
            Read More
          </button>
          <button
            type="button"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 14,
              fontWeight: 500,
              color: 'var(--text)',
              background: 'transparent',
              padding: '12px 28px',
              borderRadius: 100,
              border: '0.5px solid var(--border-mid)',
              cursor: 'pointer',
              transition: 'border-color 0.2s, color 0.2s',
            }}
          >
            Download PDF
          </button>
        </div>
      </main>
    </div>
  )
}
