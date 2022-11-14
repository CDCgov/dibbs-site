import styles from '../styles/Home.module.scss';
import productOfferingsImage from '../public/products.svg';
import mobileProductOfferingsImage from '../public/mobile/product-offerings.svg';

import awsImage from '../public/icons/aws.svg';
import azureImage from '../public/icons/azure.svg';
import gcpImage from '../public/icons/gcp.svg';
import locationIcon from '../public/icons/location.svg';
import linkIcon from '../public/icons/link.svg';
import transportIcon from '../public/icons/transport.svg';
import organizationIcon from './../public/icons/organization.svg';

import Image from 'next/image';
import { Link } from '@trussworks/react-uswds';

export default function ProductOffering() {
  return (
    <div>
      <div className="grid-container padding-x-205 margin-y-5 desktop:margin-bottom-0 desktop:margin-top-9">
        <div className="grid-row">
          <div className="desktop:grid-col-12 text-center desktop:display-none">
            <Image
              alt=""
              src={mobileProductOfferingsImage}
              layout="fixed"
            ></Image>
          </div>
          <div
            className={`display-none desktop:grid-col-6 desktop:display-block ${styles.productOfferingsImage}`}
          >
            <Image alt="" src={productOfferingsImage} layout="fixed"></Image>
          </div>
          <div className="desktop:grid-col-6 margin-top-2 desktop:margin-top-0">
            <div className="desktop:margin-left-8 desktop:padding-top-8">
              <h2 className="header-line-height text-center text-accent-cool-darker font-bold text-3xl lg:text-4xl margin-bottom-2 lg:text-left">
                Our product offerings
              </h2>
              <p className="text-base-darkest font-semibold">
                Our products create a data architecture that is:{' '}
              </p>
              <ul className="usa-list list-disc">
                <li> Flexible and modular</li>
                <li> Easy to update</li>
                <li> Easier to understand</li>
                <li> Easier to make open-source</li>
                <li> Easier to integrate with STLTs’ existing systems</li>
                <li> Performs similar operations consistently </li>
                <li> Easier to share and reuse across STLTs </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-lighter padding-y-5 desktop:padding-y-7">
        <div
          className={`grid-container desktop:radius-md padding-x-205 desktop:padding-x-5 bg-white padding-y-5 desktop:padding-top-5 desktop:padding-bottom-105 margin-bottom-3 desktop:margin-bottom-5 ${styles.dynamicShadow}`}
        >
          <h4
            className={`lg:font-semibold text-2xl lg:text-3xl margin-bottom-105 ${styles.homeHeaderText} text-accent-cool-darker`}
          >
            Pipeline as a Product
          </h4>
          <div
            className={`lg:text-base font-public-sans-xs ${styles.subBodyTextLineHeight}`}
          >
            <div>
              A cloud-based, off-the-shelf data ingestion and processing
              pipeline built from modular Building Blocks which public health
              departments can easily integrate into existing data systems. The
              pipeline produces analysis-ready data by converting all incoming
              data to a single standard, deduplicating and linking the data, and
              then geocoding the cleaned results.
            </div>
            <div className="grid-row margin-top-3">
              <div className="desktop:grid-col-3 lg:text-center">
                <div className="display-none desktop:display-inline-block">
                  <Image
                    alt=""
                    src={azureImage}
                    layout="fixed"
                    height="100"
                    width="100"
                  />
                </div>
                <div>
                  <Link
                    className="font-semibold"
                    href="https://github.com/CDCgov/phdi-azure"
                    target="_blank"
                  >
                    Access Azure repository
                  </Link>
                </div>
              </div>
              <div className="desktop:grid-col-3 desktop:margin-left-2 lg:text-center">
                <div className="display-none desktop:display-inline-block">
                  <Image alt="" src={gcpImage} layout="fixed" />
                </div>
                <br />
                <div>
                  <Link
                    className="font-semibold"
                    href="https://github.com/CDCgov/phdi-google-cloud"
                    target="_blank"
                  >
                    Access GCP repository
                  </Link>
                </div>
                <br />
              </div>
              <div className="desktop:grid-col-3 lg:text-center desktop:margin-left-2">
                <div className="display-none desktop:display-inline-block">
                  <Image alt="" src={awsImage} layout="fixed" />
                </div>
                <div className="text-italic">AWS repository coming soon!</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`grid-container desktop:radius-md bg-white padding-y-5 desktop:padding-top-5 desktop:padding-bottom-3  padding-x-205 desktop:padding-x-5 ${styles.dynamicShadow}`}
        >
          <h4
            className={`lg:font-semibold text-2xl lg:text-3xl margin-bottom-105 ${styles.homeHeaderText} text-accent-cool-darker`}
          >
            SDK
          </h4>
          <div
            className={`lg:text-base font-public-sans-xs ${styles.subBodyTextLineHeight}`}
          >
            <div className={styles.sdkInfoMaxWidth}>
              Access the range of modular Building Blocks with our&nbsp;
              <span>
                <Link
                  className="font-semibold"
                  href="https://pypi.org/project/phdi/"
                  target="_blank"
                >
                  SDK toolkit
                </Link>
              </span>
              .&nbsp;Public health agencies can import, experiment, and
              integrate these features into their existing pipelines. To see the
              full suite of functionality of our SDK, check out our{' '}
              <span>
                <Link
                  className="font-semibold"
                  href="https://cdcgov.github.io/phdi/v0.1.0-dev/"
                  target="_blank"
                >
                  API documentation
                </Link>
              </span>
              .
            </div>
            <div>
              <div className="grid-row desktop:margin-y-6">
                <div className="desktop:grid-col-4">
                  <div className="grid-row margin-y-3 desktop:margin-y-0">
                    <div className="display-none desktop:display-inline-block margin-right-2">
                      <Image alt="" src={locationIcon} />
                    </div>
                    <Link
                      className="font-semibold desktop:margin-top-1"
                      href="/"
                    >
                      Location Services
                    </Link>
                  </div>
                </div>
                <div className="desktop:grid-col-4">
                  <div className="grid-row margin-bottom-3 desktop:margin-bottom-0">
                    <div className="display-none desktop:display-inline-block margin-right-2">
                      <Image alt="" src={organizationIcon} />
                    </div>
                    <Link
                      className="font-semibold desktop:margin-top-1"
                      href="/"
                    >
                      Data Harmonization Services
                    </Link>
                  </div>
                </div>
              </div>
              <div className="grid-row">
                <div className="desktop:grid-col-4">
                  <div className="grid-row margin-bottom-3 desktop:margin-bottom-0">
                    <div className="display-none desktop:display-inline-block margin-right-2">
                      <Image alt="" src={transportIcon} />
                    </div>
                    {/* add margin */}
                    <Link className="font-semibold" href="/">
                      Transport Services{' '}
                    </Link>
                  </div>
                </div>
                <div className="desktop:grid-col-4">
                  <div className="grid-row">
                    <div className="display-none desktop:display-inline-block margin-right-2">
                      <Image alt="" src={linkIcon} />
                    </div>
                    <Link className="font-semibold" href="/">
                      Data Linkage Services{' '}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
