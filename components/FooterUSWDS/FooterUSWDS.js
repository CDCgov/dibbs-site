import { Address, FooterNav, Logo, Footer } from "@trussworks/react-uswds";



export default function FooterUSWDS() {
    const returnToTop = () => {
        console.log('hi')
    }

    const createLinks = () => {
        return ([
            <a className="usa-footer__primary-link text-base-lightest" href="#">
                Home
            </a>,
            <a className="usa-footer__primary-link text-base-lightest" href="#">
                What is a building block?
            </a>,
            <a className="usa-footer__primary-link text-base-lightest" href="#">
                Our product offerings
            </a>,
            <a className="usa-footer__primary-link text-base-lightest" href="#">
                Partner with us
            </a>,

        ])
    }

    return (
        <Footer
            size="slim"
            returnToTop={returnToTop}
            primary={
                <div className=" usa-footer__primary-container grid-row">
                    <div className="mobile-lg:grid-col-8">
                        <FooterNav
                            size="slim"
                            listItemClasses='desktop:grid-col-6'
                            links={createLinks()}
                        />
                    </div>

                </div>
            }
            secondary={
                <Logo
                    size="slim"
                    image={
                        <img
                            className="usa-footer__logo-img text-base-lightest"
                            alt="img alt text"
                        />
                    }
                    heading={<p className="text-base-lightest usa-footer__logo-heading">Center for Disease Control</p>}
                />
            }
        />
    );
}
