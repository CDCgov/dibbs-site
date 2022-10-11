import { Header, Menu, NavDropDownButton, NavMenuButton, PrimaryNav, Title } from "@trussworks/react-uswds";
import Link from "next/link";
import React from "react";


export default function Navbar({ }) {
    const [expanded, setExpanded] = React.useState(false)
    const onClick = () => setExpanded((prvExpanded) => !prvExpanded)

    const [isOpen, setIsOpen] = React.useState([false, false])

    const testItemsMenu = [
        <Link href="/building-block-info" key="one" className="usa-nav__link">
            <span className='text-base-lightest'>What is a Building Block?</span>
        </Link>,
        <Link href="/product-offerings" key="two" className="usa-nav__link">
            <span className='text-base-lightest'>Our product offerings</span>
        </Link>,
        <Link href="/partner-with-us" key="three" className="usa-nav__link">
            <span className='text-base-lightest'>Partner with us</span>
        </Link>,
    ]
    return (
        <>
            <div className={`usa-overlay ${expanded ? 'is-visible' : ''}`}></div>
            <Header basic={true} className='bg-primary-darker'>
                <div className="usa-nav-container max-w-full px-20">
                    <div className="w-full usa-navbar">
                        <Title className='text-xl text-base-lightest font-normal'>
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
