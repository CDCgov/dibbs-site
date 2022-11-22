import { Button } from '@trussworks/react-uswds';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import buildingBlockImage from '../public/building-block-1.svg';
import mobileBuildingBlockImage from '../public/mobile/mobile-building-block.svg';
import locationIcon from '../public/icons/location.svg';
import linkIcon from '../public/icons/link.svg';
import codeIcon from '../public/icons/code.svg';
import organizationIcon from '../public/icons/organization.svg';
import Link from 'next/link';
import Head from 'next/head';

export default function BuildingBlockInfo() {
  return (
    <div>
      <Head>
        <title>Building Blocks - Public Health Data Infrastructure</title>
      </Head>
      <div className="grid-container padding-x-205 margin-y-5 desktop:padding-top-5 maxw-widescreen desktop:padding-x-9 desktop:margin-y-7 desktop:margin-y-0">
        <div className="grid-row">
          <div
            className={`desktop:grid-col-5 display-none desktop:display-inline-block text-bottom ${styles.buidlingBlockInfoImage} `}
          >
            <Image alt="" src={buildingBlockImage} layout="fill"></Image>
          </div>
          <div className="desktop:display-none text-center grid-col-12">
            <Image alt="" src={mobileBuildingBlockImage}></Image>
          </div>
          <div className="desktop:grid-col-7">
            <div className="desktop:margin-left-7 desktop:margin-top-9 desktop:margin-bottom-7">
              <h1
                className={`text-accent-cool-darker margin-top-2 desktop:margin-top-0 font-bold margin-bottom-2 ${styles.headerText} ${styles.dynamicHeader}`}
              >
                Building Blocks
              </h1>
              <div className="text-base-darkest desktop:margin-top-4">
                <p className="font-semibold font-family-public-sans-1 desktop:padding-right-1">
                  Piloting and productizing Building Blocks are a key part of
                  the CDC DMI&apos;s goal of reducing the burden on STLT
                  partners for collecting and reporting public health data.
                </p>
                <br />
                <p className="text-italic">
                  To qualify as a Building Block, a software service must meet
                  one or more of the following:
                </p>
                <ul className="usa-list list-disc desktop:padding-right-4">
                  <li> Can fill a gap where no solution currently exists</li>
                  <li>
                    {' '}
                    Can provide more value than current solution(s) where a
                    burden presents
                  </li>
                  <li>
                    {' '}
                    Reusable across multiple data streams and steps in the
                    public health data journey
                  </li>
                  <li>
                    {' '}
                    Enables significant reduction or elimination of manual
                    effort to accomplish a critical task in one or more public
                    health workflows{' '}
                  </li>
                  <li>
                    {' '}
                    Able to be developed to minimum viable product and provide
                    value within 6 months
                  </li>
                  <li>
                    {' '}
                    Can be piloted while existing workflows remain unchanged,
                    and incrementally adopted once pilot results demonstrate
                    enough value that migration from legacy workflows is desired{' '}
                  </li>
                  <li>
                    {' '}
                    Increases speed of data to public health and/or drives
                    faster public health action (e.g., makes data easier to use
                    for surveillance or outbreak response)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-lighter padding-top-5 desktop:padding-y-7">
        <div className="grid-container maxw-widescreen padding-x-0 desktop:padding-x-7">
          <div className="grid-row grid-gap-3">
            <div className="desktop:grid-col-4">
              <div
                className={`bg-white padding-205 lg:h-80 desktop:radius-md ${styles.dynamicShadow}`}
              >
                <div className={`margin-bottom-1 ${styles.buildingBlockItemHeader}`}>
                  <Image alt="" src={locationIcon} layout="fixed"></Image>
                </div>
                <h2 className={`${styles.buildingBlockItemHeader} margin-bottom-1 text-accent-cool-darker ${styles.buildingBlockItemHeaderText}`}>
                  Location Services
                </h2>
                <div className="font-public-sans-xs line-height-sans-6">
                  <p className="${styles.buildingBlockItemHeader} font-semibold font-public-sans-3xs">
                    (address validation, standardization, and data enrichment)
                  </p>
                  <br />
                  <p className="desktop:padding-right-2">
                    Tools for mapping data describing a standard geographic
                    location to its canonical representation in a source dataset
                    for purposes of standardization, validation, cleaning,
                    and/or enrichment with other geography-related data.
                  </p>
                </div>
              </div>
            </div>
            <div className="desktop:grid-col-4 margin-y-2 desktop:margin-y-0">
              <div
                className={`bg-white padding-205 lg:h-80 desktop:radius-md ${styles.dynamicShadow}`}
              >
                <div className={`margin-bottom-105 ${styles.buildingBlockItemHeader}`}>
                  <Image alt="" src={codeIcon} layout="fixed"></Image>
                </div>
                <h2 className={`margin-bottom-1 ${styles.buildingBlockItemHeader} text-accent-cool-darker ${styles.buildingBlockItemHeaderText}`}>
                  Data Exchange Services
                </h2>
                <div className="font-public-sans-xs line-height-sans-6">
                  <p className="${styles.buildingBlockItemHeader} font-semibold font-public-sans-3xs">
                    (for reporting to CDC)
                  </p>
                  <br />
                  <p>
                    An EDAV-integrated platform that provides API-based data
                    exchange services supporting common standards (e.g., HL7,
                    FHIR, CDA, CSV, JSON) and enabling observability to
                    provenance and transparency on data transmissions.
                  </p>
                </div>
              </div>
            </div>
            <div className="desktop:grid-col-4">
              <div
                className={`bg-white padding-205 lg:h-80 desktop:radius-md ${styles.dynamicShadow}`}
              >
                <div className={`margin-bottom-1 ${styles.buildingBlockItemHeader}`}>
                  <Image alt="" src={organizationIcon} layout="fixed"></Image>
                </div>
                <h2 className={`margin-bottom-1 ${styles.buildingBlockItemHeader} text-accent-cool-darker ${styles.buildingBlockItemHeaderText}`}>
                  Data Harmonization Services
                </h2>
                <div className="font-public-sans-xs line-height-sans-6">
                  <p className="${styles.buildingBlockItemHeader} font-semibold font-public-sans-3xs">
                    (for data structures and semantics)
                  </p>
                  <br />
                  <p>
                    Services that align the structure and semantics of an
                    incoming data stream to the input specifications of the
                    receiving application without changing the meaning of the
                    data (e.g., transformations, format conversions,
                    validations).
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-row grid-gap-3  desktop:margin-top-205">
            <div className="desktop:grid-col-4 margin-y-2 desktop:margin-y-0">
              <div
                className={`bg-white padding-205 lg:h-80 desktop:radius-md ${styles.dynamicShadow}`}
              >
                <div className={`margin-bottom-105 ${styles.buildingBlockItemHeader}`}>
                  <Image alt="" src={linkIcon} layout="fixed"></Image>
                </div>
                <h2 className={`margin-bottom-1 ${styles.buildingBlockItemHeader} text-accent-cool-darker ${styles.buildingBlockItemHeaderText}`}>
                  Data Linkage Services
                </h2>
                <div className="font-public-sans-xs line-height-sans-6">
                  <p className="${styles.buildingBlockItemHeader} font-semibold font-public-sans-3xs">
                    (for deduplicating data)
                  </p>
                  <br />
                  <p className={styles.letterSpacingNeg1}>
                    A service that identifies and links data referring to the
                    same entity (e.g., patient, event, case) across disparate
                    streams.
                  </p>
                </div>
              </div>
            </div>
            <div className="desktop:grid-col-4">
              <div
                className={`bg-accent-cool-darker desktop:radius-md ${styles.dynamicShadow} padding-y-6 padding-x-3 text-center lg:h-80 flex-align-center flex flex-row`}
              >
                <span>
                  <h2
                    className={`text-white font-semibold text-center margin-bottom-2 ${styles.getStartedHeader}`}
                  >
                    Ready to get started?
                  </h2>
                  <p className="text-white margin-bottom-2 desktop:margin-bottom-3 padding-x-205 desktop:padding-x-0">
                    You can now test out Building Blocks in your
                    jurisdiction&apos;s data environment
                  </p>
                  <Link href="/product-offerings">
                    <Button
                      outline
                      className={`${styles.buttonAccent} desktop:padding-x-4 padding-y-2`}
                    >
                      View our product offerings
                    </Button>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
