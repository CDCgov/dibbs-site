import { Header, NavMenuButton, PrimaryNav, Title } from "@trussworks/react-uswds";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from '../../styles/Home.module.scss'

export default function Navbar({ }) {
    const [expanded, setExpanded] = React.useState(false)
    const router = useRouter();
    const onClick = () => { if (window.innerWidth < 1024) setExpanded((prvExpanded) => !prvExpanded) }

    const testItemsMenu = [
        <NavigationLink href='/building-block-info' text='What is a Building Block' router={router} />,
        <NavigationLink href='/product-offerings' text='Our product offerings' router={router} />,
        <NavigationLink href='/partner-with-us' text='Partner with us' router={router} />,
        // <Link href='/' key="one" >
        //     <a className={`usa-nav__link ${styles.homeNavItem}`} onClick={onClick}>
        //         <span className={styles.navbarItemText}>Home</span>
        //     </a>
        // </Link>,
        // <Link href='/building-block-info'>
        //     <a key="two" className="usa-nav__link" onClick={onClick}>
        //         <span className={styles.navbarItemText}>What is a Building Block?</span>
        //     </a>
        // </Link>,
        // <Link href='/product-offerings' key="three">
        //     <a className="usa-nav__link" onClick={onClick}>
        //         <span className={styles.navbarItemText}>Our product offerings</span>
        //     </a>
        // </Link>,
        // <Link href='/partner-with-us' key="four">
        //     <a className="usa-nav__link" onClick={onClick}>
        //         <span className={styles.navbarItemText}>Partner with us</span>
        //     </a>
        // </Link>,
    ]

    return (
        <>
            <div className={`usa-overlay ${expanded ? 'is-visible' : ''}`}></div>
            <Header basic={true} className='bg-primary-darker'>
                <div className="desktop:padding-bottom-2 usa-nav-container max-w-full">
                    <div className="w-full usa-navbar">
                        <Title className='text-base-lightest'>
                            <Link href='/'>
                                <a>
                                    <span className={styles.navbarLogoText} href='/phdi-site'>
                                        Public Health Data Infrastructure
                                    </span>
                                </a>
                            </Link>
                        </Title>
                        <NavMenuButton onClick={onClick} label="Menu" />
                    </div>
                    <PrimaryNav
                        items={testItemsMenu}
                        mobileExpanded={expanded}
                    >
                    </PrimaryNav>
                </div>
            </Header>
        </>
    );
}

function NavigationLink({ href, text, router }) {
    const isActive = router.asPath === (href);
    console.log(router.asPath)
    return (
        <Link href={href} passHref>
            <a
                href={href}
                className={`usa-nav__link`}
            >
                <span className={(isActive && "navbar-item-active") + ' ' + styles.navbarItemText}>{text}</span>
            </a>
        </Link>
    );
}