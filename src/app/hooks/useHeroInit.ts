'use client';
import { useEffect } from 'react';
import { useHeroContext } from '../context';
import { usePathname } from 'next/navigation';

interface HeroInitProps {
  header: string;
  subheader: string;
  heroClass: string;
}

export function useHeroInit({ header, subheader, heroClass }: HeroInitProps) {
  const { setHeroContent } = useHeroContext();
  const pathname = usePathname();
  useEffect(() => {
    setHeroContent({
      header,
      subheader,
      heroClass,
      pathname,
    });
  }, [setHeroContent, header, subheader, heroClass]);
}
