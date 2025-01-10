'use client';
import { useHeroInit } from '../../hooks/useHeroInit';

export const HeroInitializer = () => {
  useHeroInit({
    header: `Get started with DIBBs products`,
    subheader: `Learn how your jurisdiction can start working with the DIBBs team.`,
    heroClass: 'engage-with-us-hero',
  });

  return null;
};
