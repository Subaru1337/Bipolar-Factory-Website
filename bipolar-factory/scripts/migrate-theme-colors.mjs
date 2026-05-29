import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'src')

const replacements = [
  [/color:\s*'#0a0a0a',\s*background:\s*'#e8ff47'/g, "color: 'var(--accent-text)', background: 'var(--accent)'"],
  [/color:\s*'#0a0a0a',\s*background:\s*p\.accent/g, "color: 'var(--accent-text)', background: p.accent"],
  [/\?\s*'#e8ff47'\s*:/g, "? 'var(--accent)' :"],
  [/lit\s*\?\s*'#f0ede6'/g, "lit ? 'var(--text)'"],
  [/hovered\s*\?\s*'#e8ff47'/g, "hovered ? 'var(--accent)'"],
  [/i\s*%\s*2\s*===\s*1\s*\?\s*'#0d0d0d'\s*:\s*'#0a0a0a'/g, "i % 2 === 1 ? 'var(--surface-stripe)' : 'var(--bg)'"],
  [/linear-gradient\(to right,\s*#0a0a0a,\s*transparent\)/g, 'linear-gradient(to right, var(--bg), transparent)'],
  [/linear-gradient\(to left,\s*#0a0a0a,\s*transparent\)/g, 'linear-gradient(to left, var(--bg), transparent)'],
  [/linear-gradient\(#1a1a1a/g, 'linear-gradient(var(--grid-line)'],
  [/radial-gradient\(circle,\s*#e8ff4720/g, 'radial-gradient(circle, var(--accent-glow)'],
  [/borderBottom:\s*fi\s*<\s*p\.features\.length\s*-\s*1\s*\?\s*'0\.5px solid #1a1a1a'/g, "borderBottom: fi < p.features.length - 1 ? '0.5px solid var(--border)'"],
  [/borderLeft:\s*'2px solid #e8ff47'/g, "borderLeft: '2px solid var(--accent)'"],
  [/borderBottom:\s*'0\.5px solid #1f1f1f'/g, "borderBottom: '0.5px solid var(--border)'"],
  [/borderTop:\s*'0\.5px solid #1f1f1f'/g, "borderTop: '0.5px solid var(--border)'"],
  [/borderRight:\s*'0\.5px solid #1f1f1f'/g, "borderRight: '0.5px solid var(--border)'"],
  [/border:\s*'0\.5px solid #1f1f1f'/g, "border: '0.5px solid var(--border)'"],
  [/border:\s*'0\.5px solid #2a2a2a'/g, "border: '0.5px solid var(--border-mid)'"],
  [/background:\s*'#0a0a0a'/g, "background: 'var(--bg)'"],
  [/background:\s*'#080808'/g, "background: 'var(--bg-alt)'"],
  [/background:\s*'#050505'/g, "background: 'var(--section-alt)'"],
  [/background:\s*'#0d0d0d'/g, "background: 'var(--surface-stripe)'"],
  [/background:\s*'#111111'/g, "background: 'var(--surface)'"],
  [/background:\s*'#161616'/g, "background: 'var(--surface-hover)'"],
  [/background:\s*'#1f1f1f'/g, "background: 'var(--border)'"],
  [/background:\s*'#e8ff47'/g, "background: 'var(--accent)'"],
  [/color:\s*'#f0ede6'/g, "color: 'var(--text)'"],
  [/color:\s*'#e8ff47'/g, "color: 'var(--accent)'"],
  [/color:\s*'#141414'/g, "color: 'var(--number-watermark)'"],
  [/color:\s*'#161616'/g, "color: 'var(--number-watermark)'"],
  [/color:\s*'#1a1a1a'/g, "color: 'var(--number-watermark)'"],
  [/e\.currentTarget\.style\.background\s*=\s*'#161616'/g, "e.currentTarget.style.background = 'var(--surface-hover)'"],
  [/e\.currentTarget\.style\.background\s*=\s*'#111111'/g, "e.currentTarget.style.background = 'var(--surface)'"],
  [/e\.currentTarget\.style\.borderColor\s*=\s*'#e8ff47'/g, "e.currentTarget.style.borderColor = 'var(--accent)'"],
  [/e\.currentTarget\.style\.color\s*=\s*'#e8ff47'/g, "e.currentTarget.style.color = 'var(--accent)'"],
  [/e\.currentTarget\.style\.borderColor\s*=\s*'#2a2a2a'/g, "e.currentTarget.style.borderColor = 'var(--border-mid)'"],
  [/e\.currentTarget\.style\.color\s*=\s*'var\(--muted\)'\s*}/g, "e.currentTarget.style.color = 'var(--muted)' }"],
  [/onMouseEnter=\{e\s*=>\s*\(e\.currentTarget\.style\.color\s*=\s*'#f0ede6'\)\}/g, "onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}"],
  [/minHeight:\s*'100vh',\s*color:\s*'#f0ede6'/g, "minHeight: '100vh', color: 'var(--text)'"],
  [/background:\s*'#0a0a0a',\s*minHeight:\s*'100vh',\s*color:\s*'var\(--text\)'/g, "background: 'var(--bg)', minHeight: '100vh', color: 'var(--text)'"],
]

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name)
    const st = fs.statSync(p)
    if (st.isDirectory()) walk(p)
    else if (/\.tsx?$/.test(name)) {
      let s = fs.readFileSync(p, 'utf8')
      const before = s
      for (const [re, rep] of replacements) s = s.replace(re, rep)
      if (s !== before) {
        fs.writeFileSync(p, s)
        console.log('updated', path.relative(root, p))
      }
    }
  }
}

walk(root)
console.log('done')
