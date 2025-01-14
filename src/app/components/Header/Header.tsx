'use client';
import { useState } from 'react';
import { Header as USWDSHeader, PrimaryNav } from '@trussworks/react-uswds';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './Header.module.scss';
import { basePath } from '../../utils/constants';
import { NavigationLink } from '../NavigationLink/NavigationLink';
import Hero from '../Hero/Hero';
import { useHeroContext } from '../../context';
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
  let { heroContent } = useHeroContext();
  if (usePathname() !== heroContent.pathname) {
    heroContent = { ...heroContent, header: '', subheader: '', heroClass: '' };
  }

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

      <USWDSHeader
        basic
        className="bg-background-teal pr-2 pt-2 lg:pr-0 lg:pt-0"
      >
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

      {heroContent.header && (
        <Hero header={heroContent.header} subheader={heroContent.subheader} />
      )}
    </div>
  );
}
