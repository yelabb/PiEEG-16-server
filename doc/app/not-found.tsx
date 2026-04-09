export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>404</h1>
      <p>Page not found.</p>
      <a href="/" style={{ color: 'var(--color-primary-500)' }}>
        Back to docs
      </a>
    </div>
  )
}
