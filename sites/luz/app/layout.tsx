import type { Metadata } from 'next'
import { Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import type { FC, ReactNode } from 'react'
import './globals.css'
import { LuzLogo } from 'shared/components/icons'
import { Barlow_Condensed, Roboto_Slab } from 'next/font/google'
import cn from 'clsx'
import Providers from 'shared/lib/Providers'

// TODO: move to taliwind
import 'shared/components/TurtleEditor/style/turtle.global.css'

const bodyFont = Roboto_Slab({
  subsets: ['latin'],
  weight: '200',
  variable: '--nextfont-body'
})

const headingFont = Barlow_Condensed({
  subsets: ['latin'],
  weight: '700',
  variable: '--nextfont-heading'
})

export const metadata: Metadata = {
  description: 'Logik underer Zeit - ein Wissensmagazin mit Haltung',
  metadataBase: new URL('https://luz.to'),
  keywords: [
    'Politik',
    'Internationale Beziehungen',
    'Gesellschaft',
    'Schweiz',
    'Europa'
  ],
  icons: {
    icon: '/img/logo.svg',
    shortcut: '/img/logo.svg',
    apple: '/img/logo.svg'
  },
  generator: 'Next.js',
  applicationName: 'luz.to',
  appleWebApp: {
    title: 'luz.to'
  },
  title: {
    default: 'luz.to - ein Wissensmagazin mit Haltung',
    template: '%s - luz.to'
  },
  openGraph: {
    url: './',
    siteName: 'luz.to',
    locale: 'de_CH',
    type: 'website'
  },
  other: {
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://luz.to'
  },
  alternates: {
    canonical: './'
  }
}

import { AuthBtn } from 'shared/components'

const navbar = (
  <Navbar
    logo={
      <div className={
        cn(
          'flex',
          'hover:transition-all hover:duration-1000 motion-reduce:hover:transition-none',
          '[mask-image:linear-gradient(60deg,#000_25%,rgba(0,0,0,.2)_50%,#000_75%)] [mask-position:0] [mask-size:400%]',
          'hover:[mask-position:100%]'
        )
      }>
        <LuzLogo />
      </div>
    }
    projectIcon={null}
  >
    {/* <AuthBtn /> */}
  </Navbar>
)

const RootLayout: FC<{
  children: ReactNode
}> = async ({ children }) => {
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" className={cn(bodyFont.variable, headingFont.variable)} suppressHydrationWarning>
      <Head>
        <link rel="icon" type="image/png" href="/img/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/img/favicon.svg" />
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
        <link rel="manifest" href="/img/site.webmanifest" />
      </Head>
      <body>
        <Providers>
          <Layout
            navbar={navbar}
            feedback={{ content: null }}
            pageMap={pageMap}
            docsRepositoryBase="https://github.com/marcchehab/nextras25/tree/main/sites/luz"
            editLink="Verbesserung vorschlagen"
            sidebar={{ defaultMenuCollapseLevel: 1 }}
            footer={<></>}
          >
            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
