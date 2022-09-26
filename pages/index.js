import Navbar from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.scss'


export default function Home() {
  return (

    <div className="home-container">
      <Navbar />
      <div className={`border border-primary ${styles.containerBackgroundMedium}`}>
        <div className={`container py-5`}>
          <div className='row'>
            <div className={`col ${styles.homeText}`}>
              <h1 className={`text-3xl font-bold ${styles.primaryText} ${styles.headerText}`}>
                Reponse-ready public health data systems
              </h1>
              <div className={styles.secondaryText}>
                Public health data is often messy, heterogeneous, and siloed, and epidemiologists lack the tools and methods to efficiently turn it into meaningful intelligence that can drive timely public health action.

                The Public Health Data Infrastructure (PHDI) project is part of the Pandemic-Ready Interoperability Modernization Effort (PRIME), a multi-year collaboration between CDC and the U.S. Digital Service (USDS) to strengthen data quality and information technology systems in pubilc health departments. This effort seeks to solve these challenges by empowering states, territories, localities, tribes (STLTs), and other public health actors with better, faster, and more accurate data to inform community well-being.
              </div>
            </div>
            <div className="col d-none d-lg-block">
              <div>hello</div>
            </div>
          </div>
        </div>
      </div>
      <div className={`border border-primary border-top-0 ${styles.containerBackgroundLight}`}>
        <div className={`container py-5`}>
          <div className='row'>
            <div className="col d-none d-lg-block">
              <div className={`${styles.placeholderMiddle}`}>hello</div>
            </div>
            <div className={`col ${styles.homeText} ${styles.containerBackgroundDark} py-5 px-4`}>
              <h2 className={`text-3xl font-bold ${styles.primaryText} ${styles.headerText}`}>
                Introduction to Building Blocks and data modernization
              </h2>
              <div className={styles.secondaryText}>
                PHDI’s current body of work also falls within the scope of CDC's Data Modernization Initiative’s (DMI) efforts to modernize core public health data and surveillance infrastructure across the federal and state public health landscape. Our goal is to lower the burden and complexity of data management, linking, analysis, and sharing for public health authorities.
                <br /><br />
                PHDI’s work focuses on building and providing access to open-source, modular software and tooling, known as “Building Blocks,” that public health agencies can integrate into their current workflows to reduce manual processes and solve challenges when working with public health data. The intent for these tools is to help STLTs automate manual processes and enhance the use of data for action and decision-making.
                <br /><br />
                Some Building Blocks offer relatively simple functionality, like standardizing patient names, while others perform more complex tasks, including geocoding and standardizing addresses. Importantly, Building Blocks have been carefully designed with common inputs and outputs making them easily composable across STLTs.
                <br /><br />
                Find out more about Building Blocks </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.containerBackgroundLight}>
        <div className={`container py-5`}>
          <div className='row'>
            <h1 className='row justify-content-center'>Our pilot partners</h1>
            <div className='row justify-content-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur commodo habitasse ultrices.</div>
          </div>
          <div className='row justify-content-center'>
            <div className="col">
              <div class>Heading</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              <div>Lorem ipsum</div>
            </div>
            <div className="col">
              <div>Heading</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              <div>Lorem ipsum</div>
            </div>
          </div>
        </div>
      </div>
      <div className={`border border-primary ${styles.containerBackgroundMedium}`}>
        <div className={`container py-5`}>
          <div className='row'>
            <h2 className='row justify-content-center'>An invitation to participate</h2>
            <div className='row justify-content-center'>We are currently gathering input from public health agencies and partners to help us define and prioritize future Building Blocks that can help efficiently and effectively collect, use, analyze, and share public health data.  </div>
          </div>
        </div>
      </div>
    </div >
  )
}
