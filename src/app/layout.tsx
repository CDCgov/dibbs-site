import type { Metadata } from 'next';
import Header from './components/Header';
import Footer from './components/Footer';
import USABanner from './components/UsaBanner';
import { basePath } from './utils/constants';
import './globals.scss';
import './custom-styles.css';

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
      </body>
    </html>
  );
}
