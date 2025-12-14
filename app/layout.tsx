import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { dm_sans } from './ui/fonts';
import { StructuredData } from './ui/common/structured-data';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 200 300 400 500 600 700 800 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 200 300 400 500 600 700 800 900',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.kondraten.dev'),
  title: {
    default: 'Davyd Kondratenko - Full Stack Developer',
    template: '%s | Davyd Kondratenko',
  },
  description:
    'Fullstack Developer with 3.5 years of experience in React, Next.js, TypeScript, and NestJS. Building EV charger management systems.',
  keywords: [
    'Davyd Kondratenko',
    'Fullstack Developer',
    'Full Stack Developer',
    'React Developer',
    'TypeScript Developer',
    'Next.js',
    'NestJS',
    'React Native',
    'Frontend Developer',
    'Backend Developer',
    'Rzeszów Developer',
    'Poland Fullstack Developer',
    'Redux',
    'RTK',
    'PostgreSQL',
    'MongoDB',
    'Tailwind CSS',
    'Strapi',
    'Framer Motion',
    'shadcn',
    'AWS',
    'Node.js',
    'Express',
    'Playwright',
    'Electric Vehicle Software',
    'EV Charger Management',
    'Sola',
    'React Testing Library',
    'GitHub Actions',
    'CI/CD',
    'Material UI',
    'MUI',
    'REST API',
    'Responsive Design',
    'Web Applications',
    'Remote Developer',
  ],
  authors: [{ name: 'Davyd Kondratenko' }],
  creator: 'Davyd Kondratenko',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio.kondraten.dev',
    siteName: 'Davyd Kondratenko Portfolio',
    title: 'Davyd Kondratenko - Full Stack Developer',
    description:
      'Davyd Kondratenko - Fullstack Developer with 3.5 years of commercial experience. Expert in React, Next.js, TypeScript, and NestJS. Currently building EV charger management systems at Sola. Portfolio includes full-stack projects with modern tech stack.',
    images: [
      {
        url: 'https://portfolio.kondraten.dev/profile-pic.webp',
        width: 800,
        height: 800,
        alt: 'Davyd Kondratenko - Fullstack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Davyd Kondratenko - Fullstack Developer',
    description:
      'Fullstack Developer with 3.5 years of experience specializing in React, Next.js, TypeScript, and NestJS. Building modern web applications.',
    images: ['https://portfolio.kondraten.dev/profile-pic.webp'],
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
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        // className={`font-br-sonoma ${brSonoma.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${dm_sans.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
