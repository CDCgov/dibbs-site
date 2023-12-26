import styles from '../styles/Home.module.scss';
import productOfferingsImage from '../public/products.svg';
import mobileProductOfferingsImage from '../public/mobile/products.svg';

import {
    BuildingBlocksInfo
} from "../components/products/building-blocks-links";

import architectureImage from '../public/dibbs-architecture.png'

import Image from "next/image";

import Head from 'next/head';

export default function ProductOffering() {
    return (
        <div>
            <Head>
                <title>Our products - Data Integration Building Blocks</title>
            </Head>
            <div
                className="grid-container padding-x-205 margin-y-5 desktop:margin-bottom-0 desktop:margin-top-9">
                <div className="grid-row">
                    <div
                        className="desktop:grid-col-12 text-center desktop:display-none">
                        <Image alt="" src={mobileProductOfferingsImage}></Image>
                    </div>
                    <div
                        className={`display-none desktop:grid-col-6 desktop:display-block ${styles.productOfferingsImage}`}
                    >
                        <Image alt="" src={productOfferingsImage}></Image>
                    </div>
                    <div
                        className="desktop:grid-col-6 margin-top-2 desktop:margin-top-0">
                        <div className="desktop:margin-left-8 desktop:padding-top-8">
                            <h1 className={`header-line-height ${styles.headerText} text-accent-cool-darker font-bold text-3xl lg:text-4xl margin-bottom-2`}>
                                Our products
                            </h1>
                            <p className="text-base-darkest font-semibold">
                                Our products create a data architecture that is:{' '}
                            </p>
                            <ul className="usa-list list-disc">
                                <li> Flexible and modular</li>
                                <li> Open source</li>
                                <li> Easy to understand</li>
                                <li> Easy to integrate with existing workflows</li>
                                <li> Easy to test and implement</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-primary-lighter padding-y-5 desktop:padding-y-7">
                <div
                    className={`grid-container desktop:radius-md padding-x-205 desktop:padding-x-5 bg-white padding-y-5 desktop:padding-top-5 desktop:padding-bottom-105 margin-bottom-3 desktop:margin-bottom-5 ${styles.dynamicShadow}`}
                >
                    <h2
                        className={`lg:font-semibold text-2xl lg:text-3xl margin-bottom-105 ${styles.headerText} text-accent-cool-darker`}
                    >
                        Starter Kit Pipeline
                    </h2>
                    <div
                        className={`lg:text-base font-public-sans-xs ${styles.subBodyTextLineHeight}`}
                    >
                        <div>
                            A cloud-based data ingestion and processing pipeline that
                            validates,
                            cleans, standardizes, links, and stores public health data
                            leveraging a
                            core set of five Building Blocks. Public health departments
                            can integrate
                            our pipeline into their existing workflows to ingest and
                            process multiple
                            data streams (including eCR, ELR, ADT, and VXU) to create a
                            single source
                            of truth.
                        </div>
                        <div
                            className="grid-row display-none desktop:display-inline-block margin-top-3 flex-justify-center">
                            <Image alt="" src={architectureImage} height="517" width="941" />
                        </div>
                    </div>
                </div>
                <BuildingBlocksInfo/>
            </div>
        </div>
    );
}
