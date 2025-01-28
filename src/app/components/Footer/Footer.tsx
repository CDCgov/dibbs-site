'use client';
import { PrimaryNav } from '@trussworks/react-uswds';
import Image from 'next/image';
import React from 'react';
import { NavigationLink } from '../NavigationLink/NavigationLink';
import { InvitationCta } from '../InvitationCta/InvitationCta';
import { usePathname } from 'next/navigation';
import cdcImg from '/public/images/CDC.svg';
import footerImg from '/public/images/footer-bg.jpg';

const Footer = () => {
  const pathname = usePathname();
  const ctaRoutes = useGetCtaRoutes();
  const [expanded, setExpanded] = React.useState(false);
  const onClick = () => {
    if (window.innerWidth < 1024) setExpanded((prvExpanded) => !prvExpanded);
  };

  return (
    <div className="mt-auto">
      <footer className="usa-header--basic bg-footer-background">
        {ctaRoutes.includes(pathname) ? <InvitationCta /> : <Divider />}
        <div className="usa-nav-container flex !items-center lg:px-[5rem]">
          <div className="usa-navbar border-none">
            <div className="usa-logo">
              <em className="usa-logo__text">
                <a href="http://cdc.gov" title="CDC">
                  <span className="sr-only">
                    CDC US center for disease control and prevention
                  </span>
                  <Image
                    src={cdcImg}
                    className="lg:h-[4rem] lg:w-[17rem]"
                    width={140}
                    height={64}
                    alt="Centers for Disease Control and Prevention"
                    layout="intrinsic" // preserve aspect ratio when screen size changes
                  />
                </a>
              </em>
            </div>
          </div>
          <PrimaryNav
            className="!p-0"
            items={[
              <NavigationLink key="one" href="/" onClick={onClick}>
                Home
              </NavigationLink>,
              <NavigationLink key="two" href="/products" onClick={onClick}>
                Our products
              </NavigationLink>,
              <NavigationLink
                key="three"
                href="/case-studies"
                onClick={onClick}
              >
                Case studies
              </NavigationLink>,
              <NavigationLink
                key="four"
                href="/engage-with-us"
                onClick={onClick}
              >
                Engage with us
              </NavigationLink>,
            ]}
            mobileExpanded={expanded}
            onToggleMobileNav={onClick}
          />
        </div>
      </footer>
    </div>
  );
};

export const Divider = () => {
  return (
    <Image
      alt=""
      src={footerImg}
      width={1400}
      height={40}
      className="position-top mt-auto max-h-[2.5rem] min-w-full bg-top object-cover"
    />
  );
};

// TODO: the idea here is to show the CTA for these routes and the divider for all others.
// Better way to handle this?
const useGetCtaRoutes = () => {
  return [
    '/',
    '/case-studies/dibbs-pipeline',
    '/case-studies/ecr-viewer',
    '/case-studies/cloud-hosting',
    '/case-studies/dibbs-prototype',
  ];
};

export default Footer;
