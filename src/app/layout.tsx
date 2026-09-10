import type { Metadata } from 'next'
import { IBM_Plex_Sans_Arabic } from 'next/font/google'
import './globals.css'

const ibmPlex = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-ibm',
})

export const metadata: Metadata = {
  title: 'Sisyphe | مونتير فيديو محترف',
  description: 'Sisyphe — مونتاج فيديو احترافي، Reels، Motion Graphics، وتحرير محتوى للسوشيال ميديا.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={ibmPlex.variable}>
      <body>{children}</body>
    </html>
  )
}
