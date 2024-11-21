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
  const { heroContent } = useHeroContext();

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
        heroContent?.heroClass
          ? styles[heroContent?.heroClass]
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

      {heroContent.header && (
        <Hero header={heroContent.header} subheader={heroContent.subheader} />
      )}
    </div>
  );
}
