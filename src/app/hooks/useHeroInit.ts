'use client';
import { useEffect } from 'react';
import { useHeroContext } from '../context';

interface HeroInitProps {
  header: string;
  subheader: string;
  heroClass: string;
}

export function useHeroInit({ header, subheader, heroClass }: HeroInitProps) {
  const { setHeroContent } = useHeroContext();

  useEffect(() => {
    setHeroContent({
      header,
      subheader,
      heroClass,
    });
  }, [setHeroContent, header, subheader, heroClass]);
}
