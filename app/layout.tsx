import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const brSonoma = localFont({
  variable: '--font-br-sonoma',
  src: [
    {
      path: './fonts/br-sonoma/BRSonoma-Thin-BF654c45255ffe0.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/br-sonoma/BRSonoma-ExtraLight-BF654c45265af8d.otf',
      weight: '200',
    },
    {
      path: './fonts/br-sonoma/BRSonoma-Light-BF654c452608e0f.otf',
      weight: '300',
    },
    {
      path: './fonts/br-sonoma/BRSonoma-Regular-BF654c45266c042.otf',
      weight: '400',
    },
    {
      path: './fonts/br-sonoma/BRSonoma-Medium-BF654c45266edd1.otf',
      weight: '500',
    },
    {
      path: './fonts/br-sonoma/BRSonoma-SemiBold-BF654c45268c340.otf',
      weight: '600',
    },
    {
      path: './fonts/br-sonoma/BRSonoma-Bold-BF654c4526823f5.otf',
      weight: '700',
    },
    {
      path: './fonts/br-sonoma/BRSonoma-Black-BF654c4525506bf.otf',
      weight: '900',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Davyd Kondratenko Personal Portfolio',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' scroll-behavior='smooth'>
      <body
        className={`font-br-sonoma ${brSonoma.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
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
