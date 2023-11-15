import { Button } from '@trussworks/react-uswds';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import buildingBlockImage from '../public/building-block-1.svg';
import mobileBuildingBlockImage from '../public/mobile/mobile-building-block.svg';
import locationIcon from '../public/icons/location.svg';
import linkIcon from '../public/icons/link.svg';
import codeIcon from '../public/icons/code.svg';
import organizationIcon from '../public/icons/organization.svg';
import { Link } from '@trussworks/react-uswds';
import Head from 'next/head';

export default function BuildingBlockInfo() {
  return (
    <div>
      <Head>
        <title>Who is DIBBs?</title>
      </Head>
      <div className="grid-container padding-x-205 margin-y-5 desktop:padding-top-5 maxw-widescreen desktop:padding-x-10 desktop:margin-y-7 desktop:margin-y-0">
        <div className="grid-row">
          <div className="desktop:margin-left-7 desktop:margin-top-3 desktop:margin-bottom-7">
            <h1
              className={`text-accent-cool-darker margin-top-2 desktop:margin-top-0 font-bold margin-bottom-2 ${styles.headerText} ${styles.dynamicHeader}`}
            >
              Who is DIBBs
            </h1>
            <div className="text-base-darkest desktop:margin-top-4">
              <p className="font-semibold font-family-public-sans-1">
                Mission
              </p>
              <br />
              <p>
                Our mission is to get better, faster data to public health departments so
                that they can take timely public health action. Our work contributes to&nbsp;
                <Link href="https://www.cdc.gov/surveillance/pdfs/PRIME_1-sheet_single-page.pdf" target="_blank">
                  CDC's public health data strategy
                </Link>.
                and mission to develop a robust public health data ecosystem
              </p>
              <br />
              <p className="font-semibold font-family-public-sans-1">
                Vision
              </p>
              <br />
              <p>
                By making disparate, complex data sources easier to use and integrate,
                we reduce manual work and help public health departments devote more time to education,
                prevention, and improving outcomes for their communities.
              </p>
              <br />
              <p className="font-semibold font-family-public-sans-1">
                How we started
              </p>
              <br />
              <p>
                The COVID-19 pandemic revealed that the U.S. needs to significantly improve the collection,
                analysis, and use of public health data. This requires building a secure and scalable data
                infrastructure to enable timely, complete data sharing for public health action,
                breaking down silos that keep critical data disconnected,
                and reducing the burden on jurisdictions for collecting, processing, and reporting data.

                <br />
                <br />

                In an effort to strengthen the U.S. public health data infrastructure,
                the CDC launched a multi-year collaboration with the U.S. Digital Service called
                the&nbsp;
                <Link href="https://www.cdc.gov/surveillance/pdfs/PRIME_1-sheet_single-page.pdf" target="_blank">
                  Pandemic-Ready Interoperability Modernization Effort (PRIME)
                </Link>.
                The DIBBs team (formerly PHDI) was tasked with developing and
                providing access to open source, modular software and tooling, known as
                “Building Blocks,” that public health departments can use to process and transform data.

                <br />
                <br />

                Our team has partnered with a variety of public health departments to reduce
                their manual data integration processes and solve public health data challenges.
                Thus far, our efforts have involved:

              </p>
              <ul className="usa-list list-disc desktop:padding-right-4">
                <li> Building a cloud-based data pipeline “Starter Kit” that
                  comes with a core set of Building Blocks to increase data processing speed,
                  create a single source of truth for incoming data across a wide range of formats
                  (e.g., eCR, ELR, VXU, and ADT), and remove the need for duplicative processes
                </li>
                <li>
                  {' '}
                  Conducting focus groups with public health staff who interact with
                  condition-specific diseases along the data lifecycle (e.g., collection,
                  ingestion, management, analysis, and visualization)
                </li>
                <li>
                  {' '}
                  Integrating Building Blocks into CDC's NBS surveillance
                  system to support jurisdictions in their public health investigation workflows
                </li>
              </ul>
              <p>
                By developing a modular set of Building Blocks that jurisdictions
                can easily integrate into existing data systems,
                our work is helping to create a modern public health data system that
              </p>
            </div>
          </div>

        </div>
      </div>
      <div className="bg-primary-lighter padding-top-5 desktop:padding-y-7">
        <div className="grid-container maxw-widescreen padding-x-0 desktop:padding-x-7">
          <h2 className="text-bold text-center text-accent-cool-darker desktop:margin-bottom-4 margin-bottom-205 padding-x-205">
            What we've done so far
          </h2>
          <div className="grid-row grid-gap-3">
            <div className="desktop:grid-col-4">
              <div
                className={`bg-white padding-205 desktop:padding-y-5 desktop:padding-x-205 lg:h-56 desktop:radius-md ${styles.dynamicShadow}`}
              >
                <h2 className={`${styles.buildingBlockItemHeader} margin-bottom-1 text-accent-cool-darker ${styles.buildingBlockItemHeaderText}`}>
                  Virginia Pilot White Paper
                </h2>
                <div className="font-public-sans-xs line-height-sans-6">
                  <p className="desktop:padding-right-2">
                    Read about our&nbsp;
                    <Link href="https://www.cdc.gov/surveillance/data-modernization/technologies/public-health-data-pipelines.html" target='_blank'>
                      pilot project
                    </Link>
                    &nbsp;with the Virginia Department of Health.
                  </p>
                </div>
              </div>
            </div>
            <div className="desktop:grid-col-4 margin-y-2 desktop:margin-y-0">
              <div
                className={`bg-white padding-205 desktop:padding-y-5 desktop:padding-x-205 lg:h-56 desktop:radius-md ${styles.dynamicShadow}`}
              >
                <h2 className={`margin-bottom-1 ${styles.buildingBlockItemHeader} text-accent-cool-darker ${styles.buildingBlockItemHeaderText}`}>
                  DIBBs Overview PDF
                </h2>
                <div className="font-public-sans-xs line-height-sans-6">
                  <p>
                    Download a quick summary of DIBBs that you can share.
                  </p>
                </div>
              </div>
            </div>
            <div className="desktop:grid-col-4">
              <div
                className={`bg-white padding-205 desktop:padding-y-5 desktop:padding-x-205 lg:h-56 desktop:radius-md ${styles.dynamicShadow}`}
              >
                <h2 className={`margin-bottom-1 ${styles.buildingBlockItemHeader} text-accent-cool-darker ${styles.buildingBlockItemHeaderText}`}>
                  Los Angeles County Pilot - Executive Brief
                </h2>
                <div className="font-public-sans-xs line-height-sans-6">
                  <p>
                    Learn about the work we’ve done with Los Angeles County Public Health Department.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-row grid-gap-3  desktop:margin-top-205">
            <div className="desktop:grid-col-4 margin-y-2 desktop:margin-y-0">
              <div
                className={`bg-white padding-205 desktop:padding-y-5 desktop:padding-x-205 lg:h-56 desktop:radius-md ${styles.dynamicShadow}`}
              >
                <h2 className={`margin-bottom-1 ${styles.buildingBlockItemHeader} text-accent-cool-darker ${styles.buildingBlockItemHeaderText}`}>
                  Los Angeles County Pilot -  Summary Findings Report
                </h2>
                <div className="font-public-sans-xs line-height-sans-6">
                  <p className={styles.letterSpacingNeg1}>
                    Take a deeper dive into our pilot project with the Los Angeles County Public Health Department.
                  </p>
                </div>
              </div>
            </div>
            <div className="desktop:grid-col-4">
              <div
                className={`bg-accent-cool-dark desktop:radius-md ${styles.dynamicShadow} padding-y-6 padding-x-3 text-center lg:h-56 flex-align-center flex flex-row`}
              >
                <span>
                  <h2
                    className={`text-white font-semibold text-center margin-bottom-2 ${styles.getStartedHeader}`}
                  >
                    See what we've built
                  </h2>
                  <p className="text-white margin-bottom-2 desktop:margin-bottom-3 padding-x-205 desktop:padding-x-2">
                    Find out how our modular software could work in  your jurisdiction&apos;s data environment
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
