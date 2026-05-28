import './global.css'
import { SmoothScrollProvider } from '@/lib/lenis'
export const metadata = { title: 'Bipolar Factory', description: 'Dedicated technology partner.' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body><SmoothScrollProvider>{children}</SmoothScrollProvider></body>
    </html>
  )
}