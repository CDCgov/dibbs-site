'use client';
import { useState } from 'react';
import { Header as USWDSHeader, PrimaryNav } from '@trussworks/react-uswds';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import styles from './Header.module.scss';
import { basePath } from '../../utils/constants';
import { NavigationLink } from '../NavigationLink/NavigationLink';
import Hero from '../Hero/Hero';

interface HeroObject {
  heroClass?: string;
  heroHeader: string;
  heroSubheader: string;
}

type HeroContent = Record<string, HeroObject | undefined>;

const heroContent: HeroContent = {
  '/': {
    heroClass: 'homepage-hero',
    heroHeader: `Improve the way your jurisdiction collects, processes, and
      views public health data`,
    heroSubheader: `Turn your jurisdiction's data into meaningful intelligence that drives
      timely public health action using CDC's free, cloud-based products built
      from Data Integration Building Blocks, or DIBBs.`,
  },
  '/our-products': {
    heroClass: 'our-products-hero',
    heroHeader: `Our ecosystem of DIBBs products`,
    heroSubheader: `Find out how DIBBs products can help empower your jurisdiction with more usable data.`,
  },
  '/case-studies': {
    heroClass: 'case-studies-hero',
    heroHeader: `See how DIBBs solutions have helped others`,
    heroSubheader: `Explore our case studies to see the impact of DIBBs.`,
  },
  '/engage-with-us': {
    heroClass: 'engage-with-us-hero',
    heroHeader: `Get started with DIBBs products`,
    heroSubheader: `Learn how your jurisdiction can start working with the DIBBs team.`,
  },
};

const navigationItems = [
  {
    key: 'products',
    href: '/our-products',
    text: 'Our products',
  },
  {
    key: 'case-studies',
    href: '/case-studies',
    text: 'Case studies',
  },
  {
    key: 'engage',
    href: '/engage-with-us',
    text: 'Engage with us',
  },
];

export default function Header() {
  const pathname = usePathname();
  const customHeroContent = heroContent[pathname];
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    if (window.innerWidth < 1024) {
      setExpanded((prev) => !prev);
    }
  };

  const navigationLinks = navigationItems.map(({ key, href, text }) => (
    <NavigationLink key={key} href={href} onClick={handleClick}>
      {text}
    </NavigationLink>
  ));

  return (
    <div
      className={classNames(
        customHeroContent?.heroClass
          ? styles[customHeroContent.heroClass]
          : styles['homepage-hero'],
      )}
    >
      <a className="usa-skipnav" href="#main-content">
        Skip to main content
      </a>

      <USWDSHeader basic className="bg-background-teal">
        <div className="usa-nav-container flex-vertical-center">
          <div className="usa-navbar">
            <div className="usa-logo">
              <em className="usa-logo__text">
                <a href={`${basePath}/`} title="DIBBs">
                  <span
                    className={classNames('sr-only', styles.navbarLogoText)}
                  >
                    Data Integration Building Blocks
                  </span>
                  <Image
                    width={200}
                    height={40}
                    alt=""
                    className="margin-x-0"
                    src={`${basePath}/images/dibbs-logo.svg`}
                    priority
                  />
                </a>
              </em>
            </div>
            <button type="button" className="usa-menu-btn">
              Menu
            </button>
          </div>
          <PrimaryNav
            items={navigationLinks}
            mobileExpanded={expanded}
            onToggleMobileNav={handleClick}
          />
        </div>
      </USWDSHeader>

      {customHeroContent && (
        <Hero
          header={customHeroContent.heroHeader}
          subheader={customHeroContent.heroSubheader}
        />
      )}
    </div>
  );
}
