import styles from '../styles/Home.module.scss';
import '@trussworks/react-uswds/lib/uswds.css';
import '@trussworks/react-uswds/lib/index.css';
import { Button } from '@trussworks/react-uswds';
import Link from 'next/link';
import Image from 'next/image';
import desktopHero1 from './../public/desktop-hero-1.svg';
import desktopHero2 from '../public/desktop-hero-2.svg';
import desktopHero3 from '../public/desktop-hero-3.svg';
import mobileDesktopHero1 from '../public/mobile/mobile-desktop-hero-1.svg';
import mobileDesktopHero2 from '../public/mobile/mobile-desktop-hero-2.svg';
import mobileDesktopHero3 from '../public/mobile/mobile-hero-3.svg';
import mobileVirginia from '../public/mobile/virginia.svg';
import mobileLac from '../public/mobile/lac.svg';

import vdhImage from '../public/vdh.svg';
import lacountyImage from '../public/lacounty.svg';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Public Health Data Infrastructure</title>
      </Head>
      <div className="grid-container margin-y-5 desktop:margin-y-0 maxw-desktop-lg padding-x-205 desktop:padding-x-0">
        <div className="grid-row desktop:display-none">
          <div className="text-center grid-col-12">
            <Image alt="" src={mobileDesktopHero1} layout="fixed" />
          </div>
        </div>
        <div className="grid-row desktop:margin-top-8 desktop:margin-top-3">
          <div className="desktop:grid-col-5 desktop:margin-bottom-8 grid-col-12">
            <h1
              className={`${styles.headerText} ${styles.dynamicHeader} header-line-height text-accent-cool-darker font-bold maxw-mobile-lg padding-x-1 desktop:padding-x-0`}
            >
              Reponse-ready public health data systems
            </h1>
            <p
              className={`font-public-sans line-height-sans-6 font-semibold ${styles.letterSpacingNeg1} padding-right-1 desktop:padding-right-0`}
            >
              Public health data is often messy, heterogeneous, and siloed, and
              epidemiologists lack the tools and methods to efficiently turn it
              into meaningful intelligence that can drive timely public health
              action.
            </p>
            <br />
            <p className="font-public-sans line-height-sans-6 padding-right-05 desktop:padding-right-0">
              The Public Health Data Infrastructure (PHDI) project is part of
              the Pandemic-Ready Interoperability Modernization Effort (PRIME),
              a multi-year collaboration between CDC and the U.S. Digital
              Service (USDS) to strengthen data quality and information
              technology systems in public health departments.
            </p>
          </div>
          <div
            className={`desktop:grid-col-7 display-none desktop:display-inline-block ${styles.dekstopHeroImage1}`}
          >
            <Image alt="" src={desktopHero1} layout="fill" />
          </div>
        </div>
      </div>
      <div className="bg-primary-lighter">
        <div className="grid-container padding-y-5 desktop:padding-y-0 maxw-desktop-lg padding-x-205 desktop:padding-x-0">
          <div className="grid-row desktop:display-none">
            <div className="text-center grid-col-12">
              <Image alt="" src={mobileDesktopHero2} layout="fixed" />
            </div>
          </div>
          <div className="grid-row">
            <div
              className={`desktop:grid-col-6 ${styles.desktopHeroImage2} display-none desktop:display-inline-block`}
            >
              <Image alt="" src={desktopHero2} layout="fill" />
            </div>
            <div className="desktop:grid-col-6 desktop:margin-y-7">
              <div className="desktop:margin-left-4">
                <h2
                  className={`${styles.headerText} header-line-height text-accent-cool-darker font-bold desktop:padding-right-7 padding-y-205`}
                >
                  An introduction to Building Blocks and data modernization
                </h2>
                <div className="text-base-darkest line-height-sans-6">
                  PHDI&apos;s current body of work also falls within the scope
                  of CDC&apos;s&nbsp;
                  <span className="font-semibold text-underline text-primary link">
                    <a
                      className="underline text-primary"
                      href="https://www.cdc.gov/surveillance/projects/dmi-initiative/index.html"
                      target='_blank'
                      rel="noreferrer">
                      Data Modernization Initiative (DMI)
                    </a>
                  </span>
                  ,&nbsp;which is an effort to modernize core public health data
                  and surveillance infrastructure across the federal and state
                  public health landscape.
                  <br />
                  <br />
                  <span className="desktop:padding-right-5">
                    PHDI&apos;s work focuses on building and providing access to
                    open source, modular software and tooling, known as
                    “Building Blocks,” that states, territories, localities,
                    tribes (STLTs), and other public health actors can integrate
                    into their current workflows to reduce manual processes and
                    solve challenges when working with public health data. Some
                    Building Blocks offer relatively simple functionality, like
                    standardizing patient names, while others perform more
                    complex tasks, including geocoding and standardizing
                    addresses.
                  </span>
                  <br />
                  <br />
                  <div className="font-semibold text-underline text-primary link">
                    <Link href="/building-block-info">
                      More about Building Blocks ›
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-container maxw-tablet-lg margin-top-5 desktop:margin-top-7 desktop:padding-top-5 padding-x-205">
        <h2 className="text-bold text-center text-accent-cool-darker padding-y-205">
          Our pilot partners
        </h2>
        <p className="text-center text-base-darkest line-height-sans-6 padding-x-3 desktop:padding-x-9">
          We work with a range of public health departments to develop and
          iterate on Building Blocks that solve healthcare
          <br className="display-inline desktop:display-none" />
          data-related challenges{' '}
          <br className="display-inline desktop:display-none" />
          within their organizations.
        </p>
        <div className="grid-row margin-top-6">
          <div className="desktop:grid-col-6">
            <div className="padding-bottom-3 desktop:padding-bottom-0 desktop:padding-x-3 text-center">
              <div className="display-none desktop:display-block desktop:margin-top-1">
                <Image alt="" src={vdhImage} layout="fixed" />
              </div>
              <div className="desktop:display-none">
                <Image alt="" src={mobileVirginia} layout="fixed" />
              </div>

            </div>
          </div>
          <div className="desktop:grid-col-6">
            <div className="margin-bottom-5 desktop:margin-bottom-0 margin-top-3 desktop:margin-top-0 desktop:padding-x-3 text-center">
              <div className="display-none desktop:display-block">
                <Image alt="" src={lacountyImage} layout="fixed" />
              </div>
              <div className="desktop:display-none">
                <Image alt="" src={mobileLac} layout="fixed" />
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div
          className={`${styles.backgroundInvitation} padding-x-0 grid-container maxw-desktop-lg padding-y-5 desktop:padding-top-0 desktop:padding-bottom-5`}
        >
          <div className="grid-row desktop:display-none">
            <div className="grid-col-12 text-center">
              <Image alt="" src={mobileDesktopHero3} />
            </div>
          </div>
          <div
            className={`position-relative display-none desktop:display-block margin-bottom-4`}
          >
            <Image
              className="position-relative"
              alt=""
              src={desktopHero3}
              layout=""
            />
          </div>

          <div
            className={`position-relative ${styles.desktopHeroImage3} maxw-mobile-lg margin-x-auto`}
          >
            <h2 className="text-center text-bold text-white header-line-height padding-y-205">
              An invitation to participate
            </h2>
            <p className="line-height-sans-6 text-white text-center padding-x-4 desktop:padding-x-1">
              We are currently gathering input from public health agencies and
              partners to help us define and prioritize future Building Blocks
              that can help efficiently and effectively collect, use, analyze,
              and share public health data.
            </p>
            <div className="text-center margin-top-3 width-card-lg margin-x-auto">
              <Link href="/partner-with-us">
                <Button
                  outline
                  className={`${styles.buttonAccent} desktop:padding-x-4 padding-y-2`}
                >
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
