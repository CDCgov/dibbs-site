import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';
import Header from './components/Header';
import Footer from './components/Footer';
import USABanner from './components/UsaBanner';
import { basePath } from './utils/constants';

export const metadata: Metadata = {
  title: 'DIBBS Site',
  icons: {
    icon: `${basePath}/app/favicon.ico`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <USABanner />
        <div>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </div>
        <Script src="https://cdn.jsdelivr.net/npm/uswds@3.1.0/dist/js/uswds.min.js" />
      </body>
    </html>
  );
}
