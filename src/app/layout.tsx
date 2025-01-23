import type { Metadata } from 'next';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import USABanner from './components/UsaBanner/UsaBanner';
import { merriweather, publicSans } from './fonts';
import './globals.scss';
import './custom-styles.css';

export const metadata: Metadata = {
  title: 'DIBBs',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${publicSans.variable} font-sans`}
      >
        <USABanner />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
