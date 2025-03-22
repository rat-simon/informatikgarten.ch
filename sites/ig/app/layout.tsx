import { } from '@components/icons'
import type { Metadata } from 'next'
import { Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import type { FC, ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  description: 'Das offene Informatiklehrmittel.',
  metadataBase: new URL('https://informatikgarten.ch'),
  keywords: [
    'Informatik',
    'Lehrmittel',
    'Programmieren',
    'Informatikunterricht',
    'Informatiklehrmittel',
    'Informatikgarten'
  ],
  generator: 'Next.js',
  applicationName: 'informatikgarten.ch',
  appleWebApp: {
    title: 'informatikgarten.ch'
  },
  title: {
    default: 'informatikgarten.ch - Das offene Informatiklehrmittel',
    template: '%s - informatikgarten.ch'
  },
  openGraph: {
    url: './',
    siteName: 'informatikgarten.ch',
    locale: 'de_CH',
    type: 'website'
  },
  other: {
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://informatikgarten.ch'
  },
  alternates: {
    canonical: './'
  }
}

const navbar = (
  <Navbar
    logo={
      <></>
    }
    projectLink="https://github.com/marcchehab/nextras25"
  />
)

const RootLayout: FC<{
  children: ReactNode
}> = async ({ children }) => {
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="shortcut icon" href="/img/logo.svg" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          feedback={{ content: null }}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/marcchehab/nextras25/tree/main/docs"
          editLink="Verbesserung vorschlagen"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={<></>}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}

export default RootLayout
