import nextra from 'nextra'

const withNextra = nextra({
  // Search is enabled by default (Pagefind)
})

export default withNextra({
  reactStrictMode: true,
  images: { unoptimized: true },
})
