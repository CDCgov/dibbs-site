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
import mobileVirginia from '../public/mobile/virginia.svg'
import mobileLac from '../public/mobile/lac.svg'


import vdhImage from '../public/vdh.png'
import lacountyImage from '../public/lacounty.png'


export default function Home() {
  return (
    <div>
      <div className='grid-container margin-y-5 desktop:margin-y-0 maxw-desktop-lg'>
        <div className='grid-row desktop:display-none'>
          <div className='text-center grid-col-12'>
            <Image src={mobileDesktopHero1} layout='fixed' />
          </div>
        </div>
        <div className='grid-row desktop:margin-top-8 margin-top-3'>
          <div className='desktop:grid-col-5 desktop:margin-bottom-8 grid-col-12'>
            <h1 className='text-center lg:text-left text-accent-cool-darker font-bold'>
              Reponse-ready public health data systems
            </h1>
            <p className='font-ui-xs line-height-sans-6 lg:font-semibold'>
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
        <div className='grid-container padding-y-5 desktop:padding-y-0 maxw-desktop-lg'>
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
              <div className='margin-left-4'>
                <h1 className='text-center lg:text-left text-accent-cool-darker font-bold'>
                  Introduction to Building Blocks and data modernization
                </h1>
                <div className='text-base-darkest line-height-sans-6'>
                  PHDI’s current body of work also falls within the scope of&nbsp;
                  <span className='font-semibold text-underline text-primary'>
                    <Link className='underline text-primary' href="/">
                      Data Modernization Initiative’s (DMI)
                    </Link>
                  </span>
                  ,&nbsp;which is an effort to modernize core public health data and surveillance infrastructure across the federal and state public health landscape.
                  <br /><br />
                  PHDI’s work focuses on building and providing access to open source, modular software and tooling, known as “Building Blocks,” that states, territories, localities, tribes (STLTs), and other public health actors can integrate into their current workflows to reduce manual processes and solve challenges when working with public health data. Some Building Blocks offer relatively simple functionality, like standardizing patient names, while others perform more complex tasks, including geocoding and standardizing addresses.
                  <br /><br />
                  <div className='font-semibold text-underline text-primary'>
                    <Link href="/">Find out more about Building Blocks ›
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grid-container maxw-tablet-lg margin-top-9'>
        <h1 className='font-extrabold text-center text-accent-cool-darker'>Our pilot partners</h1>
        <p className='text-center text-base-darkest line-height-sans-6'>We work with a range of public health departments to develop and iterate on Building Blocks that solve public health data-related challenges within their organizations.</p>
        <div className='grid-row margin-top-8'>
          <div className='desktop:grid-col-6'>
            <div className='padding-bottom-3 desktop:padding-3 text-center'>
              <div className='display-none desktop:display-block desktop:margin-top-4'>
                <Image alt='' src={vdhImage} layout='fixed'></Image>
              </div>
              <div className='desktop:display-none'>
                <Image alt='' src={mobileVirginia} layout='fixed'></Image>
              </div>
              <p className='text-base-darkest line-height-sans-6 desktop:margin-top-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className='desktop:grid-col-6'>
            <div className='margin-bottom-4 margin-top-3 desktop:padding-3 text-center'>
              <div className='display-none desktop:display-block'>
                <Image alt='' src={lacountyImage} layout='fixed'></Image>
              </div>
              <div className='desktop:display-none'>
                <Image alt='' src={mobileLac} layout='fixed'></Image>
              </div>
              <p className='text-base-darkest line-height-sans-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>

      <div className=''>
        <div className={`bg-accent-cool-dark ${styles.backgroundInvitation} padding-x-0 grid-container maxw-desktop-lg padding-y-5`}>
          <div class='grid-row desktop:display-none'>
            <div className='grid-col-12 text-center'>
              <Image src={mobileDesktopHero3} />
            </div>
          </div>
          <div className={`position-relative display-none desktop:display-block margin-bottom-4`}>
            <Image className='position-relative' alt='' src={desktopHero3} layout=''></Image>
          </div>

          <div className={`position-relative ${styles.desktopHeroImage3} maxw-mobile-lg margin-x-auto`}>
            <h1 className='text-center font-extrabold text-white'>An invitation to participate</h1>
            <p className='line-height-sans-6 text-white text-center'>We are currently gathering input from public health agencies and partners to help us define and prioritize future Building Blocks that can help efficiently and effectively collect, use, analyze, and share public health data.  </p>
            <div className='text-center margin-top-3 width-card-lg margin-x-auto'>
              <Button accentStyle='warm'>Click Me</Button>
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}
