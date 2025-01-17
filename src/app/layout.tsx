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
        suppressHydrationWarning
        className={`${merriweather.variable} ${publicSans.variable} site-background font-sans`}
      >
        <USABanner />
        <div>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
