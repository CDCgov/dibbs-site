'use client';
import { useState } from 'react';
import { Header as USWDSHeader, PrimaryNav } from '@trussworks/react-uswds';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './Header.module.scss';
import { basePath } from '../../utils/constants';
import { NavigationLink } from '../NavigationLink/NavigationLink';
import Hero from '../Hero/Hero';
import { usePathname } from 'next/navigation';

const navigationItems = [
  {
    key: 'products',
    href: '/products',
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
  const [expanded, setExpanded] = useState(false);
  const heroContent = useHeroContent();

  const handleClick = () => {
    if (window.innerWidth < 1024) {
      setExpanded((prev) => !prev);
    }
  };

  const navigationLinks = navigationItems.map(({ key, href, text }) => (
    <NavigationLink key={key} href={href} onClick={handleClick} isTopNav>
      {text}
    </NavigationLink>
  ));

  return (
    <div
      className={classNames(
        heroContent?.heroClass
          ? styles[heroContent?.heroClass]
          : styles['detail-hero'],
      )}
    >
      <a className="usa-skipnav" href="#main-content">
        Skip to main content
      </a>

      <USWDSHeader basic className="bg-dark-blue pr-2 pt-2 lg:pr-0 lg:pt-0">
        <div className="usa-nav-container lg:!items-center lg:px-[5rem] [&>.usa-nav]:p-0">
          <div className="usa-navbar border-none">
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
                    src={`${basePath}/images/dibbs-logo.svg`}
                    priority
                  />
                </a>
              </em>
            </div>
            <button
              type="button"
              className="usa-menu-btn"
              onClick={handleClick}
            >
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

      {heroContent?.header && (
        <Hero header={heroContent.header} subheader={heroContent.subheader} />
      )}
    </div>
  );
}

interface HeroContent {
  header: string;
  subheader: string;
  heroClass: string;
}

function useHeroContent(): HeroContent | undefined {
  const pathname = usePathname();
  if (routes.has(pathname)) {
    return routes.get(pathname);
  } else {
    return defaultHeader;
  }
}

const defaultHeader: HeroContent = {
  header: '',
  subheader: '',
  heroClass: 'detail-hero',
};

const routes = new Map<string, HeroContent>([
  [
    '/',
    {
      header:
        'Improve the way your jurisdiction collects, processes, and views public health data',
      subheader:
        "Turn your jurisdiction's data into meaningful intelligence that drives timely public health action using CDC's free, cloud-based products built from Data Integration Building Blocks, or DIBBs.",
      heroClass: 'homepage-hero',
    },
  ],
  [
    '/case-studies',
    {
      header: `See how DIBBs solutions have helped others`,
      subheader: `Explore our case studies to see the impact of DIBBs.`,
      heroClass: 'case-studies-hero',
    },
  ],
  [
    '/engage-with-us',
    {
      header: `Get started with DIBBs products`,
      subheader: `Learn how your jurisdiction can start working with the DIBBs team.`,
      heroClass: 'engage-with-us-hero',
    },
  ],
  [
    '/products',
    {
      header: `Our ecosystem of DIBBs products`,
      subheader: `Find out how DIBBs products can help empower your jurisdiction with more usable data.`,
      heroClass: 'our-products-hero',
    },
  ],
]);
