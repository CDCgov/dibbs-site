"use client"
import { Header, PrimaryNav } from "@trussworks/react-uswds";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "../styles/Home.module.scss";

interface NavigationLinkProps {
  href: string;
  text: string;
  onClick?: () => void;
}

export default function Navbar({ }) {
    const basePath = "/dibbs-site";

    const [expanded, setExpanded] = React.useState(false)
    const onClick = () => { if (window.innerWidth < 1024) setExpanded((prvExpanded) => !prvExpanded) }

    const testItemsMenu = [
        <Link
            href='/'
            key="one"
            className={`usa-nav__link ${styles.homeNavItem}`}
            onClick={onClick}>

            <span className={styles.navbarItemText}>Home</span>

        </Link>,
        <NavigationLink key="two" href='/our-products' text='Our products' onClick={onClick} />,
        <NavigationLink key="two" href='/our-products' text='Case studies' onClick={onClick} />,
        <NavigationLink key="three" href='/engage-with-us' text='Engage with us' onClick={onClick} />
    ]

    return <>
        <a className="usa-skipnav" href="#main-content">Skip to main content</a>
        <div className={`usa-overlay ${expanded ? 'is-visible' : ''}`}></div>
        <Header basic={true} className='bg-background-teal'>
          <div className="usa-nav-container flex-vertical-center">
            <div className="usa-navbar">
              <div className="usa-logo">
                <em className="usa-logo__text">
                  <a href="/" title="<Project title>">
                    <span className={`${styles.navbarLogoText} sr-only`}>
                      Data Integration Building Blocks
                    </span>
                    <Image width={200} height={40} alt="" className={"margin-x-0"} src={`${basePath}/images/dibbs-logo.svg`} />
                  </a>
                </em>
              </div>
              <button type="button" className="usa-menu-btn">Menu</button>
            </div>
            <PrimaryNav
                    items={testItemsMenu}
                    mobileExpanded={expanded}
                    onToggleMobileNav={onClick}
            />
          </div>
        </Header>
    </>;
}

function NavigationLink({ href, text, onClick }: NavigationLinkProps) {
    const pathname = usePathname(); // Use usePathname hook to get the current path
    const isActive = pathname === href;
    return (
        (<Link href={href} passHref className={`usa-nav__link`} onClick={onClick}>
            <span className={(isActive && "navbar-item-active") + ' ' + styles.navbarItemText}>{text}</span>
        </Link>)
    );
}