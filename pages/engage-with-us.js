import {Button} from '@trussworks/react-uswds';
import styles from '../styles/Home.module.scss';
import getInvolved1 from '../public/get-involved-1.svg';
import getInvolved2 from '../public/get-involved-2.svg';
import mobileGetInvolved1 from '../public/mobile/get-involved-1.svg';
import mobileGetInvolved2 from '../public/mobile/get-involved-2.svg';

import Image from "next/image";
import Head from 'next/head';

export default function GetInvolved() {
    return <>
        <Head>
            <title>How to engage with us - Data Integration Building Blocks</title>
        </Head>
        <div className="desktop:padding-bottom-9 desktop:padding-top-3 fill-page">
            <div className="grid-container padding-0 maxw-desktop-lg">
                <div className="padding-y-5 desktop:padding-y-7 padding-x-205">
                    <h1 className="text-center text-accent-cool-darker font-bold text-3xl lg:text-4xl margin-bottom-2">
                        How to engage with us
                    </h1>
                    <div
                        className="mx-auto desktop:padding-x-8 desktop:width-tablet-lg lg:text-center lg:font-semibold lg:text-base text-base-darkest font-public-sans-xs">
                        Below we&apos;ve outlined how jurisdictions can start
                        working with the DIBBs team.
                    </div>
                    <div
                        className="text-center margin-top-2 desktop:margin-top-4 padding-x-5 desktop:padding-x-0 padding-top-1">
                        <Button className="desktop:padding-x-7 padding-y-2"
                                onClick={() => window.location = 'mailto:dibbs@cdc.gov'}>

                            Contact Us
                        </Button>
                    </div>
                </div>
                <div className="grid-row desktop:grid-gap-4">
                    <div className="desktop:grid-col-6">
                        <div
                            className="padding-x-205 padding-y-5 bg-primary-lighter desktop:radius-md desktop:padding-x-4">
                            <div
                                className="text-center margin-bottom-105 desktop:display-none">
                                <Image alt="" src={mobileGetInvolved1} />
                            </div>
                            <div
                                className="text-center margin-bottom-105 display-none desktop:display-block">
                                <Image alt="" src={getInvolved1} />
                            </div>
                            <h2
                                className={`text-center text-accent-cool-darker margin-bottom-105 ${styles.partnerItemHeaders}`}
                            >
                                Try our products
                            </h2>
                            <div
                                className={`text-base-darkest lg:text-base font-public-sans-xs ${styles.subBodyTextLineHeight}`}
                            >
                                If your jurisdiction is interested in using our products to solve your public health data challenges, please reach out to our team. We’d love to better understand your data needs and find ways to plug in.
                            </div>

                        </div>
                    </div>
                    <div className="desktop:grid-col-6">
                        <div
                            className="padding-x-205 desktop:padding-x-4 padding-y-5 bg-primary-lighter radius-md">
                            <div
                                className="text-center margin-bottom-105 desktop:display-none">
                                <Image alt="" src={mobileGetInvolved2} />
                            </div>
                            <div
                                className="text-center margin-bottom-105 display-none desktop:display-block">
                                <Image alt="" src={getInvolved2} />
                            </div>
                            <h2
                                className={`text-center text-accent-cool-darker ${styles.partnerItemHeaders} margin-top-205 desktop:margin-top-0 margin-bottom-105`}
                            >
                                Talk to us
                            </h2>
                            <div
                                className={`text-base-darkest lg:text-base font-public-sans-xs padding-bottom-3 ${styles.subBodyTextLineHeight}`}
                            >
                                Want to learn more? Our team is available to talk about how we can help you improve your public health data processing workflows.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}
