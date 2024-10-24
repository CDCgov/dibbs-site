"use client";
import { Header, PrimaryNav } from "@trussworks/react-uswds";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "../styles/Home.module.scss";
import { LinkProps } from "next/link";

interface NavigationLinkProps extends Pick<LinkProps, "href" | "onClick"> {
  children: React.ReactNode;
}

export default function Navbar() {
  const basePath = "/dibbs-site";

  const [expanded, setExpanded] = React.useState(false);
  const onClick = () => {
    if (window.innerWidth < 1024) setExpanded((prvExpanded) => !prvExpanded);
  };

  const testItemsMenu = [
    <NavigationLink key="two" href="/our-products" onClick={onClick}>
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
    <>
      <a className="usa-skipnav" href="#main-content">
        Skip to main content
      </a>

      <Header basic={true} className="bg-background-teal">
        <div className="usa-nav-container flex-vertical-center">
          <div className="usa-navbar">
            <div className="usa-logo">
              <em className="usa-logo__text">
                <a href={`${basePath}/`} title="<Project title>">
                  <span className={`${styles.navbarLogoText} sr-only`}>
                    Data Integration Building Blocks
                  </span>
                  <Image
                    width={200}
                    height={40}
                    alt=""
                    className={"margin-x-0"}
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
      </Header>
    </>
  );
}

export function NavigationLink({
  href,
  children,
  onClick,
}: NavigationLinkProps) {
  const pathname = usePathname(); // Use usePathname hook to get the current path
  const isActive = pathname === href;
  return (
    <Link href={href} passHref className={`usa-nav__link`} onClick={onClick}>
      <span
        className={
          (isActive && "navbar-item-active") + " " + styles.navbarItemText
        }
      >
        {children}
      </span>
    </Link>
  );
}
