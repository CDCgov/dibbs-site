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

  const footerMenu = [
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
      <footer className={classNames('usa-header--basic', styles.footer)}>
        <div className="usa-nav-container flex !items-center lg:px-[5rem]">
          <div className="usa-navbar border-none">
            <div className="usa-logo">
              <em className="usa-logo__text">
                <a href="http://cdc.gov" title="<Project title>">
                  <span className="sr-only">
                    CDC US center for disease control and prevention
                  </span>
                  <Image
                    width={200}
                    height={40}
                    alt=""
                    src={`${basePath}/images/cdc.svg`}
                  />
                </a>
              </em>
            </div>
          </div>
          <PrimaryNav
            className="!p-0"
            items={footerMenu}
            mobileExpanded={expanded}
            onToggleMobileNav={onClick}
          />
        </div>
      </footer>
    </>
  );
}
