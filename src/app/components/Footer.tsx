"use client";
import { Header, PrimaryNav } from "@trussworks/react-uswds";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.scss";
import { NavigationLink } from "./Header";

export default function Footer() {
  const basePath = "/dibbs-site";

  const [expanded, setExpanded] = React.useState(false);
  const onClick = () => {
    if (window.innerWidth < 1024) setExpanded((prvExpanded) => !prvExpanded);
  };

  const testItemsMenu = [
    <Link
      href="/"
      key="one"
      className={`usa-nav__link ${styles.homeNavItem}`}
      onClick={onClick}
    >
      <span className={styles.navbarItemText}>Home</span>
    </Link>,
    <NavigationLink key="two" href={`${basePath}/`} onClick={onClick}>
      Home
    </NavigationLink>,
    <NavigationLink
      key="two"
      href={`${basePath}/our-products`}
      onClick={onClick}
    >
      Our products
    </NavigationLink>,
    <NavigationLink
      key="two"
      href={`${basePath}/our-products`}
      onClick={onClick}
    >
      Case studies
    </NavigationLink>,
    <NavigationLink
      key="three"
      href={`${basePath}/engage-with-us`}
      onClick={onClick}
    >
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
                  <span className={`${styles.navbarLogoText} sr-only`}>
                    CDC US center for disease control and prevention
                  </span>
                  <Image
                    width={200}
                    height={40}
                    alt=""
                    className={"margin-x-0"}
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
