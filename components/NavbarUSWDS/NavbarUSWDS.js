import { Banner, Header, NavMenuButton, PrimaryNav, Title } from "@trussworks/react-uswds";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from '../../styles/Home.module.scss'

export default function Navbar({ }) {
    const [expanded, setExpanded] = React.useState(false)
    const router = useRouter();
    const onClick = () => { if (window.innerWidth < 1024) setExpanded((prvExpanded) => !prvExpanded) }

    const testItemsMenu = [
        <Link
            href='/'
            key="one"
            className={`usa-nav__link ${styles.homeNavItem}`}
            onClick={onClick}>

            <span className={styles.navbarItemText}>Home</span>

        </Link>,
        <NavigationLink key="two" href='/about' text='About' router={router} onClick={onClick} />,
        <NavigationLink key="three" href='/products' text='Products' router={router} onClick={onClick} />,
        <NavigationLink key="four" href='/engage-with-us' text='Engage with us' router={router} onClick={onClick} />,
    ]

    return <>
        <a className="usa-skipnav" href="#main-content">Skip to main content</a>
        <div className={`usa-overlay ${expanded ? 'is-visible' : ''}`}></div>
        <Header basic={true} className='bg-primary-darker'>
            <div className="desktop:padding-bottom-2 usa-nav-container max-w-full">
                <div className="w-full usa-navbar">
                    <Title className='text-base-lightest'>
                        <Link href='/' className="desktop:padding-1">

                            <span className={styles.navbarLogoText} href='/dibbs-site'>
                                Data Integration Building Blocks
                            </span>

                        </Link>
                    </Title>
                    <NavMenuButton onClick={onClick} label="Menu" />
                </div>
                <PrimaryNav
                    items={testItemsMenu}
                    mobileExpanded={expanded}
                    onToggleMobileNav={onClick}
                >
                </PrimaryNav>
            </div>
            <div className="usa-banner padding-2">
                <p className="usa-banner__header-text">
                    During the government shutdown, only websites supporting excepted 
                    functions will be updated. As a result, the information on this 
                    website may not be up to date and the agency may not be able to 
                    respond to inquiries. Updates regarding government operating status 
                    and resumption of normal operations can be found at <Link className="usa-link" href="https://www.opm.gov/">https://www.opm.gov/</Link>.
                </p>

            </div>
        </Header>
    </>;
}

function NavigationLink({ href, text, router, onClick }) {
    const isActive = router.asPath === (href);
    return (
        (<Link href={href} passHref className={`usa-nav__link`} onClick={onClick}>
            <span className={(isActive && "navbar-item-active") + ' ' + styles.navbarItemText}>{text}</span>
        </Link>)
    );
}