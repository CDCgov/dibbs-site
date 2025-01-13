'use client';

import { createContext, useState, useContext } from 'react';
import { usePathname } from 'next/navigation';

export const defaultHomeContext = {
  header:
    'Improve the way your jurisdiction collects, processes, and views public health data',
  subheader:
    "Turn your jurisdiction's data into meaningful intelligence that drives timely public health action using CDC's free, cloud-based products built from Data Integration Building Blocks, or DIBBs.",
  heroClass: 'homepage-hero',
  pathname: '/',
};

interface HeroContent {
  heroContent: {
    header: string;
    subheader: string;
    heroClass: string;
    pathname: string;
  };
  setHeroContent: (content: {
    header: string;
    subheader: string;
    heroClass: string;
    pathname: string;
  }) => void;
}

const HeroContext = createContext<HeroContent>({
  heroContent: {
    header: '',
    subheader: '',
    heroClass: '',
    pathname: '',
  },
  setHeroContent: () => {},
});

export function HeroContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [heroContent, setHeroContent] = useState(
    isHome
      ? defaultHomeContext
      : {
          header: '',
          subheader: '',
          heroClass: '',
          pathname: '',
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
