import { Header, Menu, NavDropDownButton, NavMenuButton, PrimaryNav, Title } from "@trussworks/react-uswds";
import Link from "next/link";
import React from "react";


export default function Navbar({ }) {
    const [expanded, setExpanded] = React.useState(false)
    const onClick = () => setExpanded((prvExpanded) => !prvExpanded)

    const [isOpen, setIsOpen] = React.useState([false, false])

    const testItemsMenu = [
        <a href="/phdi-site/building-block-info" key="one" className="usa-nav__link">
            <span className='text-base-lightest'>What is a Building Block?</span>
        </a>,
        <a href="/phdi-site/product-offerings" key="two" className="usa-nav__link">
            <span className='text-base-lightest'>Our product offerings</span>
        </a>,
        <a href="/phdi-site/partner-with-us" key="three" className="usa-nav__link">
            <span className='text-base-lightest'>Partner with us</span>
        </a>,
    ]
    return (
        <>
            <div className={`usa-overlay ${expanded ? 'is-visible' : ''}`}></div>
            <Header basic={true} className='bg-primary-darker'>
                <div className="usa-nav-container max-w-full">
                    <div className="w-full usa-navbar">
                        <Title className='text-base-lightest'>
                            <Link href='/'>Public Health Data Infrastructure</Link>
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
