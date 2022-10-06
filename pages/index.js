import styles from '../styles/Home.module.scss'
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'
import { Button } from '@trussworks/react-uswds'

export default function Home() {
  return (
    <div>
      <div className='grid-container maxw-desktop-lg'>
        <div className='grid-row margin-y-8'>
          <div className='desktop:grid-col-5'>
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
          <div className="desktop:grid-col-7">
            <div>hello</div>
          </div>
        </div>
      </div>
      <div className='bg-primary-lighter'>
        <div className='grid-container maxw-desktop-lg'>
          <div className='grid-row'>
            <div className='desktop:grid-col-6'>
              <div>hello</div>
            </div>
            <div className='desktop:grid-col-6 margin-y-7'>
              <h1 className='text-accent-cool-darker font-bold'>
                Introduction to Building Blocks and data modernization
              </h1>
              <div className='text-base-darkest line-height-sans-6'>
                PHDI’s current body of work also falls within the scope of
                <a className='underline text-primary' href="/">
                  Data Modernization Initiative’s (DMI)
                </a>
                ,&nbsp;which is an effort to modernize core public health data and surveillance infrastructure across the federal and state public health landscape.
                <br /><br />
                PHDI’s work focuses on building and providing access to open source, modular software and tooling, known as “Building Blocks,” that states, territories, localities, tribes (STLTs), and other public health actors can integrate into their current workflows to reduce manual processes and solve challenges when working with public health data. Some Building Blocks offer relatively simple functionality, like standardizing patient names, while others perform more complex tasks, including geocoding and standardizing addresses.
                <br /><br />
                <div className='font-semibold'>
                  Find out more about &nbsp;
                  <a className='underline text-primary' href="/">Building Blocks ›
                  </a>
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
              <div><b>Heading</b></div>
              <p className='text-base-darkest line-height-sans-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className='desktop:grid-col-6'>
            <div className='padding-3 text-center'>
              <div><b>Heading</b></div>
              <p className='text-base-darkest line-height-sans-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-accent-cool-dark padding-y-8'>
        <div className='grid-container maxw-tablet'>
          <h1 className='text-center font-extrabold text-white'>An invitation to participate</h1>
          <p className='line-height-sans-6 text-white text-center'>We are currently gathering input from public health agencies and partners to help us define and prioritize future Building Blocks that can help efficiently and effectively collect, use, analyze, and share public health data.  </p>
          <div className='text-center margin-top-3'>
            <Button accentStyle='warm'>Click Me</Button>
          </div>
        </div>
      </div>
    </div >
  )
}
