import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';
import Navbar from './components/Header';
import Footer from './components/Footer';
import USABanner from './components/UsaBanner';

export const metadata: Metadata = {
  title: 'DIBBS Site',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <USABanner />
        <div>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </div>
        <Script src="https://cdn.jsdelivr.net/npm/uswds@3.1.0/dist/js/uswds.min.js" />
      </body>
    </html>
  );
}
