import type { Metadata } from 'next'
import './global.css'

export const metadata: Metadata = {
  title: 'Bipolar Factory — Custom Software from Coimbatore',
  description: 'Dedicated technology partner. We build software that matters.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        {/*
          Anti-flash script — runs before React hydrates.
          Applies saved theme from localStorage, or keeps dark as default.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('bpf-theme');
                if (t === 'light' || t === 'dark') {
                  document.documentElement.setAttribute('data-theme', t);
                } else {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}