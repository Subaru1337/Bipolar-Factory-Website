'use client'
import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'

const NAV = ['Products', 'Work', 'Services', 'About', 'Careers'] as const

export type PageNavActive = (typeof NAV)[number]

export default function PageNav({ active }: { active?: PageNavActive }) {
  return (
    <nav className="page-nav">
      <Link href="/" className="page-nav-logo">
        BPF<span style={{ color: 'var(--accent)' }}>.</span>
      </Link>
      <div className="page-nav-links">
        {NAV.map((n) => (
          <Link
            key={n}
            href={`/${n.toLowerCase()}`}
            className={n === active ? 'active' : undefined}
          >
            {n}
          </Link>
        ))}
        <Link href="/contact" className="page-nav-cta">
          Contact us
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  )
}
