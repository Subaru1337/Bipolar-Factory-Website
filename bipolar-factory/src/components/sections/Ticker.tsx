const items = [
  { text: 'Election tech', lit: true },
  { text: 'Custom software', lit: false },
  { text: 'Bihar 2024', lit: true },
  { text: 'Digital transformation', lit: false },
  { text: 'Industrial GPS', lit: true },
  { text: 'Video intelligence', lit: false },
  { text: 'SaaS products', lit: true },
  { text: 'Technical consulting', lit: false },
  { text: 'Metawood', lit: true },
  { text: 'Creator economy', lit: false },
  { text: 'OLY platform', lit: true },
  { text: 'Research & dev', lit: false },
]

function TickerInner({ hidden }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden} style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
      {items.map(({ text, lit }, i) => (
        <span key={`ticker-${i}`} style={{ display: 'contents' }}>
          <span style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 12, fontWeight: 500,
            color: lit ? '#f0ede6' : '#3a3a3a',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '0 28px',
          }}>
            {text}
          </span>
          <span style={{
            width: 3, height: 3, borderRadius: '50%',
            background: '#e8ff47', flexShrink: 0,
            display: 'inline-block',
          }} />
        </span>
      ))}
    </div>
  )
}

export default function Ticker() {
  return (
    <div style={{
      background: '#0a0a0a',
      borderTop: '0.5px solid #1f1f1f',
      borderBottom: '0.5px solid #1f1f1f',
      padding: '18px 0',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Fade edges */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right, #0a0a0a, transparent)', zIndex: 2 }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left, #0a0a0a, transparent)', zIndex: 2 }} />

      <div style={{ display: 'flex', width: 'max-content', animation: 'ticker 28s linear infinite' }}>
        <TickerInner />
        <TickerInner hidden />
      </div>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
