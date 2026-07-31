import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { TopBar } from '@/components/layout/TopBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Bilaal Health Science College | Garowe, Puntland, Somalia',
    template: '%s | Bilaal Health Science College',
  },
  description:
    'Bilaal Health Science College (كلية بلال للعلوم الصحية) in Garowe, Puntland, Somalia offers accredited Diploma programs in Pharmacy, Nursing, Midwifery, Nutrition, and Public Health.',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  keywords: [
    'Bilaal Health Science College',
    'Garowe Health College',
    'Nursing Diploma Somalia',
    'Pharmacy Diploma Puntland',
    'Midwifery College Garowe',
    'Public Health Diploma Somalia',
    'Nutrition Diploma Puntland',
    'Healthcare Education Somalia',
    'كلية بلال للعلوم الصحية'
  ],
  authors: [{ name: 'Bilaal Health Science College' }],
  metadataBase: new URL('https://bilaalhealth.edu.so'),
  openGraph: {
    title: 'Bilaal Health Science College | Garowe, Puntland, Somalia',
    description:
      'Shape Your Future in Healthcare with accredited diploma programs in Nursing, Pharmacy, Midwifery, Nutrition, and Public Health.',
    url: 'https://bilaalhealth.edu.so',
    siteName: 'Bilaal Health Science College',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 600,
        height: 600,
        alt: 'Bilaal Health Science College Official Seal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bilaal Health Science College',
    description: 'Premier health science education in Garowe, Puntland, Somalia.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // EducationalOrganization Schema JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Bilaal Health Science College',
    alternateName: 'كلية بلال للعلوم الصحية',
    url: 'https://bilaalhealth.edu.so',
    logo: 'https://bilaalhealth.edu.so/logo.png',
    description:
      'Bilaal Health Science College is a leading healthcare higher education institution in Garowe, Puntland, Somalia offering accredited diploma programs in Pharmacy, Nursing, Midwifery, Nutrition, and Public Health.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Garowe',
      addressRegion: 'Puntland',
      addressCountry: 'Somalia',
    },
    telephone: ['+252907814063', '+252907560281', '+252906837192'],
    email: 'bilaalhealthsciencecollege@gmail.com',
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen font-sans">
        <TopBar />
        <Navbar transparentOnTop={true} />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
