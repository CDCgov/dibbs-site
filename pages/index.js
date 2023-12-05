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
        <title>Data Integration Building Blocks</title>
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
              Streamlining public health data processing
            </h1>
            <p
              className={`font-public-sans line-height-sans-6 font-semibold ${styles.letterSpacingNeg1} padding-right-1 desktop:padding-right-0 margin-bottom-2`}
            >
              Public health data is often messy, heterogeneous, and siloed, and
              epidemiologists lack the tools and methods to efficiently turn it
              into meaningful intelligence that can drive timely public health
              action.
            </p>

            <p className="font-public-sans line-height-sans-6 padding-right-05 desktop:padding-right-0">
              The Data Integration Building Blocks (DIBBs) team,
              formerly known as the Public Health Data Infrastructure (PHDI) project,
              develops open source, cloud-based tools that public health departments can
              integrate into their current workflows to improve data quality and reliability.
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
                  How we can help
                </h2>
                <div className="text-base-darkest line-height-sans-6 font-public-sans line-height-sans">
                  <p className="font-semibold margin-bottom-2">
                    Automate your public health data processing so you can focus on taking meaningful public
                    health action
                  </p>
                  <p className="margin-bottom-2">
                    Our interdisciplinary team of researchers and engineers works to solve your jurisdiction&apos;s data challenges
                    and integrate our flexible, modern tools into your existing workflows
                  </p>
                  <p className="font-semibold margin-bottom-2">
                    Improve the quality and completeness of your data
                  </p>
                  <p className="margin-bottom-2">
                    Using a pipeline of modular software components known as Building Blocks, we validate,
                    clean, standardize, and enrich your data — all while reducing the need for manual processes
                  </p>
                  <p className="font-semibold margin-bottom-2">
                    Get the data that you need in the format that you want it
                  </p>
                  <p className="margin-bottom-2">
                    We want to understand your unique data needs and assess how our tooling could make your data more usable
                  </p>
                  <div className="font-semibold text-underline text-primary link">
                    <Link href="/products">
                      Learn about what we&apos;ve built ›
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
          We work with public health departments to solve their toughest data challenges
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
            <h2 className="text-center text-bold text-white header-line-height padding-y-205 padding-x-205">
              Want to connect with us?
            </h2>
            <p className="line-height-sans-6 text-white text-center padding-x-4 desktop:padding-x-1">
              Our team will respond to your questions or set up a time to discuss how we can support your work.
            </p>
            <div className="text-center margin-top-3 width-card-lg margin-x-auto">
              <Link href="/engage-with-us">
                <Button
                  outline
                  className={`${styles.buttonAccent} desktop:padding-x-4 padding-y-2`}
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
