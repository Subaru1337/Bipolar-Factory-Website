const products = [
  {
    slug: 'oly-store-sync',
    name: 'OLY Store Sync',
    blurb:
      'Advanced retail analytics that unlocks insights from existing security cameras, including footfall, dwell time, conversion, and path behavior.'
  },
  {
    slug: 'oly-control-center',
    name: 'OLY Control Center',
    blurb:
      'A centralized video management system with live widgets, map views, and customizable dashboards for enterprise monitoring.'
  },
  {
    slug: 'metawood',
    name: 'Metawood',
    blurb:
      'A gamified streaming platform and decentralized creator economy blending immersive virtual experiences with creator monetization.'
  }
]

export default function ProductsPage() {
  return (
    <main style={{ background: '#0a0a0a', color: '#f0ede6', minHeight: '100vh', padding: '56px 48px' }}>
      <p style={{ color: '#e8ff47', letterSpacing: '0.12em', fontSize: 12, marginBottom: 12 }}>PRODUCTS</p>
      <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(36px, 5vw, 64px)', marginBottom: 16 }}>Our Tech, Your Odyssey</h1>
      <p style={{ color: '#6b6b6b', maxWidth: 760, lineHeight: 1.7, marginBottom: 32 }}>
        Each product is designed to meet current market demands while helping teams move to the frontier of their industries.
      </p>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 16 }}>
        {products.map((product) => (
          <article key={product.slug} style={{ background: '#111111', border: '0.5px solid #1f1f1f', borderRadius: 14, padding: 24 }}>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 28, marginBottom: 12 }}>{product.name}</h2>
            <p style={{ color: '#6b6b6b', lineHeight: 1.7, marginBottom: 20 }}>{product.blurb}</p>
            <a href={`/products/${product.slug}`} style={{ color: '#e8ff47', textDecoration: 'none' }}>
              Explore product →
            </a>
          </article>
        ))}
      </section>
    </main>
  )
}
