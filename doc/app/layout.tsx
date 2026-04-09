import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
  title: {
    default: 'PiEEG Documentation',
    template: '%s — PiEEG Docs',
  },
  description:
    'Real-time EEG streaming platform for PiEEG shields. 250 Hz WebSocket streaming, live dashboard, spectral analysis, VRChat OSC, Lab Streaming Layer, and webhook automation.',
  icons: {
    icon: '/favicon.svg',
  },
}

const navbar = (
  <Navbar
    logo={
      <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>
        <span style={{ opacity: 0.6 }}>⚡</span> PiEEG
      </span>
    }
    projectLink="https://github.com/pieeg-club/PiEEG-server"
  />
)

const footer = (
  <Footer>
    <span>
      MIT {new Date().getFullYear()} ©{' '}
      <a href="https://github.com/pieeg-club" target="_blank" rel="noreferrer">
        PiEEG Community
      </a>
    </span>
  </Footer>
)

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/pieeg-club/PiEEG-server/tree/main/doc"
          footer={footer}
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
