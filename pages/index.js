import styles from '../styles/Home.module.scss'
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'
import { Button } from '@trussworks/react-uswds'
import Link from 'next/link'
import Image from 'next/image'
import desktopHero1 from './../public/desktop-hero-1.svg'
import desktopHero2 from '../public/desktop-hero-2.svg'
import desktopHero3 from '../public/desktop-hero-3.svg'
import mobileDesktopHero1 from '../public/mobile/mobile-desktop-hero-1.svg'
import mobileDesktopHero2 from '../public/mobile/mobile-desktop-hero-2.svg'
import mobileDesktopHero3 from '../public/mobile/mobile-hero-3.svg'

import vdhImage from '../public/vdh.png'
import lacountyImage from '../public/lacounty.png'


export default function Home() {
  return (
    <div>
      <div className='grid-container margin-y-5 desktop:maxw-desktop-lg'>
        <div className='grid-row desktop:display-none'>
          <div className='text-center grid-col-12'>
            <Image src={mobileDesktopHero1} layout='fixed' />
          </div>
        </div>
        <div className='grid-row desktop:margin-top-8 margin-top-3'>
          <div className='desktop:grid-col-5 desktop:margin-bottom-8 grid-col-12'>
            <h1 className='text-accent-cool-darker font-bold'>
              Reponse-ready public health data systems
            </h1>
            <p className='font-ui-xs line-height-sans-6 font-semibold'>
              Public health data is often messy, heterogeneous, and siloed, and epidemiologists lack the tools and methods to efficiently turn it into meaningful intelligence that can drive timely public health action.
            </p>
            <br />
            <p className='font-ui-xs line-height-sans-6'>
              The Public Health Data Infrastructure (PHDI) project is part of the Pandemic-Ready Interoperability Modernization Effort (PRIME), a multi-year collaboration between CDC and the U.S. Digital Service (USDS) to strengthen data quality and information technology systems in public health departments.
            </p>
          </div>
          <div className="desktop:grid-col-7 display-none desktop:display-inline-block">
            <Image alt='' src={desktopHero1} layout='fill'></Image>
          </div>
        </div>
      </div>
      <div className='bg-primary-lighter'>
        <div className='grid-container padding-y-5 desktop:padding-y-0 desktop:maxw-desktop-lg'>
          <div className='grid-row desktop:display-none'>
            <div className='text-center grid-col-12'>
              <Image alt='' src={mobileDesktopHero2} layout='fixed' />
            </div>
          </div>
          <div className='grid-row'>
            <div className={`desktop:grid-col-6 ${styles.desktopHeroImage2} display-none desktop:display-inline-block`}>
              <Image alt='' src={desktopHero2} layout='fill'></Image>
            </div>
            <div className='desktop:grid-col-6 desktop:margin-y-7'>
              <h1 className='text-accent-cool-darker font-bold'>
                Introduction to Building Blocks and data modernization
              </h1>
              <div className='text-base-darkest line-height-sans-6'>
                PHDI’s current body of work also falls within the scope of
                <Link className='underline text-primary' href="/">
                  Data Modernization Initiative’s (DMI)
                </Link>
                ,&nbsp;which is an effort to modernize core public health data and surveillance infrastructure across the federal and state public health landscape.
                <br /><br />
                PHDI’s work focuses on building and providing access to open source, modular software and tooling, known as “Building Blocks,” that states, territories, localities, tribes (STLTs), and other public health actors can integrate into their current workflows to reduce manual processes and solve challenges when working with public health data. Some Building Blocks offer relatively simple functionality, like standardizing patient names, while others perform more complex tasks, including geocoding and standardizing addresses.
                <br /><br />
                <div className='font-semibold'>
                  Find out more about &nbsp;
                  <Link className='underline text-primary' href="/">Building Blocks ›
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grid-container maxw-tablet-lg'>
        <h1 className='font-extrabold text-center text-accent-cool-darker'>Our pilot partners</h1>
        <p className='text-center text-base-darkest line-height-sans-6'>We work with a range of public health departments to develop and iterate on Building Blocks that solve public health data-related challenges within their organizations.</p>
        <div className='grid-row margin-top-8'>
          <div className='desktop:grid-col-6'>
            <div className='padding-3 text-center'>
              <Image alt='' src={vdhImage} layout='fixed'></Image>
              <p className='text-base-darkest line-height-sans-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className='desktop:grid-col-6'>
            <div className='padding-3 text-center'>
              <Image alt='' src={lacountyImage} layout='fixed'></Image>
              <p className='text-base-darkest line-height-sans-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='desktop:bg-white bg-accent-cool-dark'>
        <div className='grid-container maxw-desktop-lg padding-y-5 '>
          <div class='grid-row desktop:display-none'>
            <div className='grid-col-12 text-center'>
              <Image src={mobileDesktopHero3} />
            </div>
          </div>
          <div>
            <h1 className='text-center font-extrabold text-white'>An invitation to participate</h1>
            <p className='line-height-sans-6 text-white text-center'>We are currently gathering input from public health agencies and partners to help us define and prioritize future Building Blocks that can help efficiently and effectively collect, use, analyze, and share public health data.  </p>
            <div className='text-center margin-top-3'>
              <Button accentStyle='warm'>Click Me</Button>
            </div>
          </div>
          <div className='display-none desktop:display-inline-block'>
            <Image alt='' src={desktopHero3} layout='responsive'></Image>
          </div>

        </div>
      </div>
    </div >
  )
}
