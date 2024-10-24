'use client';
import { Header as USWDSHeader, PrimaryNav } from '@trussworks/react-uswds';
import Image from 'next/image';
import React from 'react';
import styles from '../styles/Home.module.scss';
import classNames from 'classnames';
import { basePath } from '../utils/constants';
import { NavigationLink } from './NavigationLink';

export default function Header() {
  const [expanded, setExpanded] = React.useState(false);
  const onClick = () => {
    if (window.innerWidth < 1024) setExpanded((prvExpanded) => !prvExpanded);
  };

  const testItemsMenu = [
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
    </>
  );
}
