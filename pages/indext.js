import { Button, Col, Container, Row } from 'react-bootstrap'
import Footer from '../components/Footer/Footer'
import NavbarHeader from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.scss'


export default function Home() {
    return (
        <div className="home-container">
            <div className={`bg-blue-100 ${styles.dashBorder} border-top-0`}>
                <div className='container py-40 mx-20'>
                    <div className='flex flex-row'>
                        <div className='basis-1/2'>
                            <h1 className={`text-6xl mb-10 font-bold ${styles.primaryText} ${styles.headerText}`}>
                                Reponse-ready public health data systems
                            </h1>
                            <div className='max-w-lg text-blue-600'>
                                Public health data is often messy, heterogeneous, and siloed, and epidemiologists lack the tools and methods to efficiently turn it into meaningful intelligence that can drive timely public health action.
                                <br />
                                <br />
                                The Public Health Data Infrastructure (PHDI) project is part of the Pandemic-Ready Interoperability Modernization Effort (PRIME), a multi-year collaboration between CDC and the U.S. Digital Service (USDS) to strengthen data quality and information technology systems in pubilc health departments. This effort seeks to solve these challenges by empowering states, territories, localities, tribes (STLTs), and other public health actors with better, faster, and more accurate data to inform community well-being.
                            </div>
                        </div>
                        <div className="basis-1/2">
                            <div>hello</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`border-top-0 bg-blue-50 ${styles.dashBorder} border-top-0`}>
                <div className='container py-5 mx-20'>
                    <div className='flex flex-row'>
                        <div className="basis-1/2">
                            <div>hello</div>
                        </div>
                        <div className={`basis-1/2 ${styles.homeText} ${styles.containerBackgroundDark} py-12 px-8`}>
                            <h2 className={`text-3xl font-bold mb-5 text-blue-700`}>
                                Introduction to Building Blocks and data modernization
                            </h2>
                            <div className={styles.secondaryText}>
                                PHDI’s current body of work also falls within the scope of CDC's Data Modernization Initiative’s (DMI) efforts to modernize core public health data and surveillance infrastructure across the federal and state public health landscape. Our goal is to lower the burden and complexity of data management, linking, analysis, and sharing for public health authorities.
                                <br /><br />
                                PHDI’s work focuses on building and providing access to open-source, modular software and tooling, known as “Building Blocks,” that public health agencies can integrate into their current workflows to reduce manual processes and solve challenges when working with public health data. The intent for these tools is to help STLTs automate manual processes and enhance the use of data for action and decision-making.
                                <br /><br />
                                Some Building Blocks offer relatively simple functionality, like standardizing patient names, while others perform more complex tasks, including geocoding and standardizing addresses. Importantly, Building Blocks have been carefully designed with common inputs and outputs making them easily composable across STLTs.
                                <br /><br />
                                <div className='font-semibold'>
                                    Find out more about &nbsp;
                                    <a className='underline' href="/">Building Blocks
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`bg-blue-50 ${styles.dashBorder} border-top-0} px-20`}>
                <div className={`container py-12 text-blue-700`}>
                    <h1 className='mb-3 text-3xl font-extrabold text-center'>Our pilot partners</h1>
                    <div className='text-center mb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur commodo habitasse ultrices.</div>
                    <div className='flex flex-row justify-center'>
                        <div className={`mr-8 ${styles.containerBackgroundDark}`}>
                            <div className='p-6 text-center'>
                                <div><b>Heading</b></div>
                                <div className='my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                <div>Lorem ipsum</div>
                            </div>
                        </div>
                        <div className={styles.containerBackgroundDark}>
                            <div className='p-6 text-center'>
                                <div><b>Heading</b></div>
                                <div className='my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                <div>Lorem ipsum</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`py-28 px-20 bg-blue-100 ${styles.dashBorder} border-top-0}`}>
                <div className={`container text-blue-700 text-center`}>
                    <h2 className='text-center font-extrabold text-3xl mb-4'>An invitation to participate</h2>
                    <div className='flex justify-center'>
                        <div className='max-w-3xl'>We are currently gathering input from public health agencies and partners to help us define and prioritize future Building Blocks that can help efficiently and effectively collect, use, analyze, and share public health data.  </div>
                    </div>

                    <Button className='mt-3'>Get Involved</Button>
                </div>
            </div>
        </div >
    )
}
