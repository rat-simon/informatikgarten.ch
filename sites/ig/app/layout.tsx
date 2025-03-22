import type { Metadata } from 'next'
import { Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import type { FC, ReactNode } from 'react'
import './globals.css'
import { IgLogo } from '@shared/components/icons'
import { Barlow_Condensed, Roboto_Slab } from 'next/font/google'
import cn from 'clsx'

const mainFont = Roboto_Slab({
  subsets: ['latin'],
  weight: '200',
  variable: '--main-font'
})

const titleFont = Barlow_Condensed({
  subsets: ['latin'],
  weight: '700',
  variable: '--title-font'
})

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
  icons: {
    icon: './img/logo.svg',
    shortcut: './img/logo.svg',
    apple: './img/logo.svg'
  },
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
      <div className={
        cn(
          'flex',
          'hover:transition-all hover:duration-1000 motion-reduce:hover:transition-none',
          '[mask-image:linear-gradient(60deg,#000_25%,rgba(0,0,0,.2)_50%,#000_75%)] [mask-position:0] [mask-size:400%]',
          'hover:[mask-position:100%]'
        )
      }>
        <IgLogo height="32" />
        <span className={cn(titleFont.className, "text-3xl text-slate-900 dark:text-white self-center")}>
          informatikgarten.ch
        </span>
      </div>
    }
    projectLink="https://github.com/marcchehab/nextras25"
  />
)

const RootLayout: FC<{
  children: ReactNode
}> = async ({ children }) => {
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className={cn(mainFont.variable, titleFont.variable)}>
      <Head />
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
