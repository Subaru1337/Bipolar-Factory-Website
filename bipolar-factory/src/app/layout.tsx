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
          Reads localStorage and sets data-theme immediately
          so there's no white flash on page load in light mode.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('bpf-theme');
                if (t === 'light' || t === 'dark') {
                  document.documentElement.setAttribute('data-theme', t);
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