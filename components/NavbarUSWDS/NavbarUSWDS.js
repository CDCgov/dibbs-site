import { Header, Menu, NavDropDownButton, NavMenuButton, PrimaryNav, Title } from "@trussworks/react-uswds";
import React from "react";


export default function Navbar({ }) {
    const [expanded, setExpanded] = React.useState(false)
    const onClick = () => setExpanded((prvExpanded) => !prvExpanded)
    const testMenuItems = [
        <a href="#linkOne" key="one">
            Current link
        </a>,
        <a href="#linkTwo" key="two">
            Simple link Two
        </a>,
    ]

    const [isOpen, setIsOpen] = React.useState([false, false])

    const testItemsMenu = [
        <a href="" key="one" className="usa-nav__link">
            <span className='text-base-lightest'>What is a Building Block?</span>
        </a>,
        <a href="#two" key="two" className="usa-nav__link">
            <span className='text-base-lightest'>Our product offerings</span>
        </a>,
        <a href="#three" key="three" className="usa-nav__link">
            <span className='text-base-lightest'>Partner with us</span>
        </a>,
    ]
    return (
        <>
            <div className={`usa-overlay ${expanded ? 'is-visible' : ''}`}></div>
            <Header basic={true} className='bg-primary-darker'>
                <div className="usa-nav-container max-w-full px-20">
                    <div className="w-full usa-navbar">
                        <Title className='text-xl text-base-lightest font-normal'>Public Health Data Infrastructure</Title>
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
