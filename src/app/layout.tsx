import type { Metadata } from 'next';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import USABanner from './components/UsaBanner/UsaBanner';
import './globals.scss';
import './custom-styles.css';
import { HeroWrapper } from './context';

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
      <body>
        <USABanner />
        <div>
          <HeroWrapper>
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
          </HeroWrapper>
        </div>
      </body>
    </html>
  );
}
