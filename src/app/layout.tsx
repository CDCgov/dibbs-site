import type { Metadata } from 'next';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import USABanner from './components/UsaBanner/UsaBanner';
import './globals.scss';
import './custom-styles.css';
import { HeroContextProvider } from './context';
import { merriweather, publicSans } from './fonts';

export const metadata: Metadata = {
  title: 'DIBBS Site',
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
          <HeroContextProvider>
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
          </HeroContextProvider>
        </div>
      </body>
    </html>
  );
}
