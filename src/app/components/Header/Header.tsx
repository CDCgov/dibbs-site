'use client';
import { Header as USWDSHeader, PrimaryNav } from '@trussworks/react-uswds';
import Image from 'next/image';
import React from 'react';
import classNames from 'classnames';
import { basePath } from '../../utils/constants';
import { NavigationLink } from '../NavigationLink/NavigationLink';
import styles from './Header.module.scss';
import Hero from '../Hero/Hero';
import { usePathname } from 'next/navigation';

export default function Header() {
  interface HeroContent {
    heroClass?: string;
    heroHeader: string;
    heroSubheader: string;
  }

  type SpecialContent = {
    [key: string]: HeroContent;
  };

  const specialContent: SpecialContent = {
    '/': {
      heroClass: 'homepage-hero',
      heroHeader: `Improve the way your jurisdiction collects, processes, and
      views public health data`,
      heroSubheader: `Turn your jurisdiction's data into meaningful intelligence that drives
      timely public health action using CDC's free, cloud-based products built
      from Data Integration Building Blocks, or DIBBs.`,
    },
  };
  const pathname = usePathname();
  const customContent = specialContent[pathname];

  const [expanded, setExpanded] = React.useState(false);
  const onClick = () => {
    if (window.innerWidth < 1024) setExpanded((prvExpanded) => !prvExpanded);
  };

  const testItemsMenu = [
    <NavigationLink key="one" href="/our-products" onClick={onClick}>
      Our products
    </NavigationLink>,
    <NavigationLink key="two" href="/case-studies" onClick={onClick}>
      Case studies
    </NavigationLink>,
    <NavigationLink key="three" href="/engage-with-us" onClick={onClick}>
      Engage with us
    </NavigationLink>,
  ];

  return (
    <div
      className={
        customContent?.heroClass ? styles[customContent.heroClass] : ''
      }
    >
      <a className="usa-skipnav" href="#main-content">
        Skip to main content
      </a>

      <USWDSHeader basic={true} className="bg-background-teal">
        <div className="usa-nav-container flex-vertical-center">
          <div className="usa-navbar">
            <div className="usa-logo">
              <em className="usa-logo__text">
                <a href={`${basePath}/`} title="<Project title>">
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
                  />
                </a>
              </em>
            </div>
            <button type="button" className="usa-menu-btn">
              Menu
            </button>
          </div>
          <PrimaryNav
            items={testItemsMenu}
            mobileExpanded={expanded}
            onToggleMobileNav={onClick}
          />
        </div>
      </USWDSHeader>
      {customContent && (
        <Hero
          header={customContent.heroHeader}
          subheader={customContent.heroSubheader}
        />
      )}
    </div>
  );
}
