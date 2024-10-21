import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import Navbar from "./components/NavbarUSWDS";

export const metadata: Metadata = {
  title: "DIBBS Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar />
          <main id="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
