'use client';
import { PrimaryNav } from '@trussworks/react-uswds';
import Image from 'next/image';
import React from 'react';
import { NavigationLink } from '../NavigationLink/NavigationLink';
import classNames from 'classnames';
import { basePath } from '../../utils/constants';
import styles from './Footer.module.scss';

export default function Footer() {
  const [expanded, setExpanded] = React.useState(false);
  const onClick = () => {
    if (window.innerWidth < 1024) setExpanded((prvExpanded) => !prvExpanded);
  };

  const testItemsMenu = [
    <NavigationLink key="one" href="/" onClick={onClick}>
      Home
    </NavigationLink>,
    <NavigationLink key="two" href="/products" onClick={onClick}>
      Our products
    </NavigationLink>,
    <NavigationLink key="three" href="/case-studies" onClick={onClick}>
      Case studies
    </NavigationLink>,
    <NavigationLink key="four" href="/engage-with-us" onClick={onClick}>
      Engage with us
    </NavigationLink>,
  ];

  return (
    <>
      <div
        className={classNames(
          styles['footer-phdi'],
          'footer-phdi',
          'usa-header--basic bg-background-teal',
        )}
      ></div>
      <footer
        className={classNames('usa-header--basic bg-background-dark-blue')}
      >
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
      </footer>
    </>
  );
}
