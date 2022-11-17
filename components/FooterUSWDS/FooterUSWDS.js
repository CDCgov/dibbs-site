import { Address, FooterNav, Logo, Footer } from "@trussworks/react-uswds";
import Image from "next/image";
import Link from "next/link";
import cdcLogo from '../../public/icons/cdc.svg'
import styles from '../../styles/Home.module.scss';




export default function FooterUSWDS() {
    const returnToTop = () => {
        console.log('hi')
    }

    const createLinks = () => {
        return ([
            <Link href='/'>
                <a key='home' className="font-public-sans-md padding-x-0 desktop:padding-x-05 usa-footer__primary-link text-base-lightest">
                    Home
                </a>
            </Link>,
            <Link href='/building-block-info'>
                <a key='building-block' className="font-public-sans-md padding-x-0 desktop:padding-x-05 usa-footer__primary-link text-base-lightest">
                    What is a building block?
                </a>
            </Link>,
            <Link href='/product-offerings'>
                <a key='product-offerings' className="font-public-sans-md padding-x-0 desktop:padding-x-05 usa-footer__primary-link text-base-lightest">
                    Our product offerings
                </a>
            </Link>,
            <Link href='/partner-with-us'>
                <a key='partner' className="font-public-sans-md padding-x-0 desktop:padding-x-05 usa-footer__primary-link text-base-lightest">
                    Partner with us
                </a>
            </Link>,

        ])
    }

    return (
        <div className='desktop:padding-x-5 bg-primary-darker'>
            <Footer
                size="slim"
                returnToTop={returnToTop}
                className='padding-x-05 padding-top-3'
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
                    <div className='usa-footer__logo padding-left-3 desktop:padding-left-2' data-testid="footerLogo">
                        <div className="desktop:display-none text-center margin-bottom-205 margin-top-2 padding-right-4">
                            <div className={`margin-x-auto ${styles.footerBar}`}></div>
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
                }
            />
        </div>
    );
}
