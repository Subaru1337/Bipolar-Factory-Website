const productData: Record<string, { title: string; description: string; features: string[] }> = {
  'oly-store-sync': {
    title: 'OLY Store Sync',
    description:
      'Store Sync is built for retail teams to generate actionable intelligence from existing camera infrastructure using AI and ML.',
    features: ['A.I. automation', 'Heat mapping', 'Camera health', 'Theft/fire detection', 'Alarm triggers']
  },
  'oly-control-center': {
    title: 'OLY Control Center',
    description:
      'Control Center helps enterprises monitor, manage, and control video networks with centralized operations and data-first dashboards.',
    features: ['Camera control', 'Live widgets', 'Recording and storage', 'Map view']
  },
  metawood: {
    title: 'Metawood',
    description:
      'Metawood combines immersive social streaming with creator-first monetization in a virtual, interactive entertainment experience.',
    features: ['Single-player story mode', 'Watch party', 'Free roam', 'Virtual theater']
  }
}

export function generateStaticParams() {
  return Object.keys(productData).map((slug) => ({ slug }))
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = productData[params.slug]

  if (!product) {
    return (
      <main style={{ background: '#0a0a0a', color: '#f0ede6', minHeight: '100vh', padding: '56px 48px' }}>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 40, marginBottom: 12 }}>Product not found</h1>
        <a href="/products" style={{ color: '#e8ff47', textDecoration: 'none' }}>
          Back to products
        </a>
      </main>
    )
  }

  return (
    <main style={{ background: '#0a0a0a', color: '#f0ede6', minHeight: '100vh', padding: '56px 48px' }}>
      <a href="/products" style={{ color: '#6b6b6b', textDecoration: 'none' }}>
        ← All products
      </a>
      <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(34px, 5vw, 60px)', margin: '16px 0 16px' }}>{product.title}</h1>
      <p style={{ color: '#6b6b6b', maxWidth: 860, lineHeight: 1.7, marginBottom: 28 }}>{product.description}</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12, maxWidth: 480 }}>
        {product.features.map((feature) => (
          <li key={feature} style={{ border: '0.5px solid #1f1f1f', borderRadius: 10, padding: '12px 14px', background: '#111111' }}>
            {feature}
          </li>
        ))}
      </ul>
    </main>
  )
}
