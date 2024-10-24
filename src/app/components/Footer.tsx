'use client';
import { Header, PrimaryNav } from '@trussworks/react-uswds';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styles from '../styles/Home.module.scss';
import { NavigationLink } from './NavigationLink';
import classNames from 'classnames';
import { basePath } from '../utils/constants';

export default function Footer() {
  const [expanded, setExpanded] = React.useState(false);
  const onClick = () => {
    if (window.innerWidth < 1024) setExpanded((prvExpanded) => !prvExpanded);
  };

  const testItemsMenu = [
    <Link
      href="/"
      className={classNames('usa-nav__link', styles.homeNavItem)}
      onClick={onClick}
    >
      <span className={styles.navbarItemText}>Home</span>
    </Link>,
    <NavigationLink href="/" onClick={onClick}>
      Home
    </NavigationLink>,
    <NavigationLink href="/our-products" onClick={onClick}>
      Our products
    </NavigationLink>,
    <NavigationLink href="/case-studies" onClick={onClick}>
      Case studies
    </NavigationLink>,
    <NavigationLink href="/engage-with-us" onClick={onClick}>
      Engage with us
    </NavigationLink>,
  ];

  return (
    <>
      <Header basic={true} className="bg-background-teal">
        <div className="usa-nav-container flex-vertical-center">
          <div className="usa-navbar">
            <div className="usa-logo">
              <em className="usa-logo__text">
                <a href="http://cdc.gov" title="<Project title>">
                  <span
                    className={classNames('sr-only', styles.navbarLogoText)}
                  >
                    CDC US center for disease control and prevention
                  </span>
                  <Image
                    width={200}
                    height={40}
                    alt=""
                    className="margin-x-0"
                    src={`${basePath}/images/CDC.svg`}
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
      </Header>
    </>
  );
}