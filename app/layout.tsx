import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://inamalisoomro.dpdns.org'),
  title: {
    default: 'Inam Ali Soomro | Executive Portfolio',
    template: '%s | Inam Ali Soomro',
  },
  description: 'Official portfolio of Inam Ali Soomro, Founder & CEO of InbyoTech. Building next-generation digital experiences, enterprise systems, and AI-driven solutions.',
  keywords: [
    'Inam Ali Soomro',
    'InbyoTech',
    'CEO of InbyoTech',
    'Software Engineer',
    'Web Developer',
    'Tech Leader',
    'Founder InbyoTech',
    'Inam Ali',
    'Inam'
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Inam Ali Soomro | Founder & CEO of InbyoTech',
    description: 'Explore the portfolio of Inam Ali Soomro, highlighting custom enterprise platforms, high-performance web applications, and AI integrations at InbyoTech.',
    url: 'https://inamalisoomro.dpdns.org',
    siteName: 'Inam Ali Soomro',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/logo2.jpg',
        width: 1200,
        height: 630,
        alt: 'Inam Ali Soomro Portfolio logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inam Ali Soomro | Founder & CEO of InbyoTech',
    description: 'Explore the portfolio of Inam Ali Soomro, highlighting custom enterprise platforms, high-performance web applications, and AI integrations at InbyoTech.',
    images: ['/images/logo2.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' }
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': 'https://inamalisoomro.dpdns.org/#person',
      'name': 'Inam Ali Soomro',
      'alternateName': ['Inam Ali', 'Inam'],
      'url': 'https://inamalisoomro.dpdns.org',
      'image': 'https://inamalisoomro.dpdns.org/images/portfolio_profile_1781380561592.jpg',
      'sameAs': [
        'https://github.com/inamalisoomro',
        'https://www.linkedin.com/in/inamalisoomro/'
      ],
      'jobTitle': 'Founder & CEO',
      'worksFor': {
        '@type': 'Organization',
        '@id': 'https://inamalisoomro.dpdns.org/#organization',
        'name': 'InbyoTech',
        'alternateName': 'Inbyo Tech',
        'url': 'https://inamalisoomro.dpdns.org'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://inamalisoomro.dpdns.org/#organization',
      'name': 'InbyoTech',
      'alternateName': 'Inbyo Tech',
      'url': 'https://inamalisoomro.dpdns.org',
      'logo': 'https://inamalisoomro.dpdns.org/images/logo.png',
      'founder': {
        '@type': 'Person',
        '@id': 'https://inamalisoomro.dpdns.org/#person'
      },
      'foundingDate': '2024'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://inamalisoomro.dpdns.org/#website',
      'url': 'https://inamalisoomro.dpdns.org',
      'name': 'Inam Ali Soomro | Executive Portfolio',
      'publisher': {
        '@type': 'Person',
        '@id': 'https://inamalisoomro.dpdns.org/#person'
      }
    }
  ];

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Anti-flash theme inline script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})()`,
          }}
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
