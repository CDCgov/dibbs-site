import { Header, NavMenuButton, PrimaryNav, Title } from "@trussworks/react-uswds";
import Link from "next/link";
import React from "react";
import styles from '../../styles/Home.module.scss'

export default function Navbar({ }) {
    const [expanded, setExpanded] = React.useState(false)
    const onClick = () => setExpanded((prvExpanded) => !prvExpanded)

    const testItemsMenu = [
        <a href="/phdi-site/" key="one" className={`usa-nav__link ${styles.homeNavItem}`}>
            <span className={styles.navbarItemText}>Home</span>
        </a>,
        <a href="/phdi-site/building-block-info" key="two" className="usa-nav__link">
            <span className={styles.navbarItemText}>What is a Building Block?</span>
        </a>,
        <a href="/phdi-site/product-offerings" key="three" className="usa-nav__link">
            <span className={styles.navbarItemText}>Our product offerings</span>
        </a>,
        <a href="/phdi-site/partner-with-us" key="four" className="usa-nav__link">
            <span className={styles.navbarItemText}>Partner with us</span>
        </a>,
    ]
    return (
        <>
            <div className={`usa-overlay ${expanded ? 'is-visible' : ''}`}></div>
            <Header basic={true} className='bg-primary-darker'>
                <div className="desktop:padding-bottom-2 usa-nav-container max-w-full">
                    <div className="w-full usa-navbar">
                        <Title className='text-base-lightest'>
                            <Link className='font-public-sans-lg' href='/'>Public Health Data Infrastructure</Link>
                        </Title>
                        <NavMenuButton onClick={onClick} label="Menu" />
                    </div>
                    <PrimaryNav
                        items={testItemsMenu}
                        mobileExpanded={expanded}
                        onToggleMobileNav={onClick}>
                    </PrimaryNav>
                </div>
            </Header>
        </>
    );
}
