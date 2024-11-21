'use client';

import { createContext, useState, useContext } from 'react';
import { usePathname } from 'next/navigation';
import { homePageHero } from '../data/home';

interface HeroContent {
  heroContent: {
    header: string;
    subheader: string;
    heroClass: string;
  };
  setHeroContent: (content: {
    header: string;
    subheader: string;
    heroClass: string;
  }) => void;
}

const HeroContext = createContext<HeroContent>({
  heroContent: {
    header: '',
    subheader: '',
    heroClass: '',
  },
  setHeroContent: () => {},
});

export function HeroWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [heroContent, setHeroContent] = useState(
    isHome
      ? homePageHero
      : {
          header: '',
          subheader: '',
          heroClass: '',
        },
  );

  return (
    <HeroContext.Provider value={{ heroContent, setHeroContent }}>
      {children}
    </HeroContext.Provider>
  );
}

export function useHeroContext() {
  return useContext(HeroContext);
}
