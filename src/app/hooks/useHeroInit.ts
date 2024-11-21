'use client';
import { useEffect, useState } from 'react';
import { useHeroContext } from '../context';

interface HeroInitProps {
  header: string;
  subheader: string;
  heroClass: string;
}

export function useHeroInit({ header, subheader, heroClass }: HeroInitProps) {
  const { setHeroContent } = useHeroContext();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setHeroContent({
      header,
      subheader,
      heroClass,
    });
    setIsReady(true);
  }, [setHeroContent, header, subheader, heroClass]);

  return isReady;
}
