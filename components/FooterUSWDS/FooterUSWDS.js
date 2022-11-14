import { Address, FooterNav, Logo, Footer } from "@trussworks/react-uswds";
import Image from "next/image";
import cdcLogo from '../../public/icons/cdc.svg'
import styles from '../../styles/Home.module.scss';




export default function FooterUSWDS() {
    const returnToTop = () => {
        console.log('hi')
    }

    const createLinks = () => {
        return ([
            <a key='home' className="font-public-sans-md padding-x-0 desktop:padding-x-05 usa-footer__primary-link text-base-lightest" href="/phdi-site">
                Home
            </a>,
            <a key='building-block' className="font-public-sans-md padding-x-0 desktop:padding-x-05 usa-footer__primary-link text-base-lightest" href="/phdi-site/building-block-info">
                What is a building block?
            </a>,
            <a key='product-offerings' className="font-public-sans-md padding-x-0 desktop:padding-x-05 usa-footer__primary-link text-base-lightest" href="/phdi-site/product-offerings">
                Our product offerings
            </a>,
            <a key='partner' className="font-public-sans-md padding-x-0 desktop:padding-x-05 usa-footer__primary-link text-base-lightest" href="/phdi-site/partner-with-us">
                Partner with us
            </a>,

        ])
    }

    return (
        // <footer className='usa-footer--slim'>
        //     {returnToTop && returnToTop}
        //     <div className="usa-footer__primary-section">
        //         <div className=" usa-footer__primary-container grid-row">
        //             <nav className={navClasses} {...elementAttributes}>
        //                 {isBig && isExtendedNavLinks(links) && (
        //                     <FooterExtendedNavList isMobile={isMobile} nestedLinks={links} />
        //                 )}

        //                 {!isExtendedNavLinks(links) && (
        //                     <ul className="grid-row grid-gap">
        //                         {links.map((link, i) => (
        //                             <li key={`navLink-${i}`} className={listItemClasses}>
        //                                 {link}
        //                             </li>
        //                         ))}
        //                     </ul>
        //                 )}
        //             </nav>

        //         </div>
        //     </div>

        //     <div className="usa-footer__secondary-section">
        //         <div className="grid-container">
        //             <Logo
        //                 size="slim"
        //                 image={
        //                     <Image
        //                         className="usa-footer__logo-img text-base-lightest"
        //                         alt='CDC Logo'
        //                         src={cdcLogo}
        //                     />
        //                 }
        //                 heading={<p className="text-base-lightest usa-footer__logo-heading">Center for Disease Control</p>}
        //             />
        //         </div>
        //     </div>
        // </footer>
        <div className='desktop:padding-x-5 bg-primary-darker'>
            <Footer
                size="slim"
                returnToTop={returnToTop}
                className='padding-x-05'
                primary={
                    <div className=" usa-footer__primary-container grid-row">
                        <div className="mobile-lg:grid-col-12">
                            <ul className="grid-row grid-gap">
                                {createLinks().map((link, i) => (
                                    <li key={`navLink-${i}`} className='desktop:grid-col-auto footer-margin'>
                                        {link}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                }
                secondary={

                    <div className='usa-footer__logo padding-left-3 desktop:padding-x-05' data-testid="footerLogo">
                        <div className="desktop:display-none text-center padding-left-8 margin-bottom-1 margin-top-2">
                            <div className={styles.footerBar}></div>
                        </div>
                        <div className='grid-row'>
                            <div className="desktop:grid-col-6 grid-row grid-gap-2">
                                <Image
                                    className="usa-footer__logo-img text-base-lightest desktop:grid-col-auto grid-col-auto"
                                    alt='CDC Logo'
                                    src={cdcLogo}
                                />
                                <div className="margin-top-05 text-base-lightest desktop:grid-col-auto grid-col-9 font-public-sans-md font-weight-md line-height-md">
                                    Centers for Disease Control and Prevention
                                </div>
                            </div>
                            <span className={`desktop:grid-col-6 margin-y-3 desktop:margin-y-0 padding-right-5 desktop:padding-right-0 font-public-sans-xs text-base-lightest font-weight-sm ${styles.copyrightText}`}>
                                © 2022 CDC. All rights reserved.
                            </span>
                        </div>
                    </div>
                    // <Logo
                    //     size="slim"
                    //     image={
                    //         <Image
                    //             className="usa-footer__logo-img text-base-lightest"
                    //             alt='CDC Logo'
                    //             src={cdcLogo}
                    //         />
                    //     }
                    //     heading={<p className="text-base-lightest usa-footer__logo-heading">Center for Disease Control</p>}
                    // />
                }
            />
        </div>
    );
}
