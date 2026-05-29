'use client'
import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'
import { isExternalNav, navHref } from '@/lib/nav'

const NAV = ['Products', 'Work', 'Services', 'About', 'Careers'] as const

export type PageNavActive = (typeof NAV)[number]

export default function PageNav({ active }: { active?: PageNavActive }) {
  return (
    <nav className="page-nav">
      <Link href="/" className="page-nav-logo">
        BPF<span style={{ color: 'var(--accent)' }}>.</span>
      </Link>
      <div className="page-nav-links">
        {NAV.map((n) =>
          isExternalNav(n) ? (
            <a
              key={n}
              href={navHref(n)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {n}
            </a>
          ) : (
            <Link
              key={n}
              href={navHref(n)}
              className={n === active ? 'active' : undefined}
            >
              {n}
            </Link>
          )
        )}
        <Link href="/contact" className="page-nav-cta">
          Contact us
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  )
}
