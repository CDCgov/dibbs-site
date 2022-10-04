import { Button, Col, Container, Row } from "react-bootstrap";
import styles from '../styles/Home.module.scss'


export default function BuildingBlockInfo() {
    return (
        <div>
            <div className={`bg-blue-50 ${styles.dashBorder}`}>
                <div className="flex flex-row text-blue-700">
                    <div className='w-2/4 h-2/4 basis-1/2 bg-blue-100'>
                        hello
                    </div>
                    <div className={`basis-1/2 mt-20 py-12 px-16 bg-blue-100`}>
                        <h1 className='text-6xl font-extrabold mb-5'>Building Blocks</h1>
                        <p>
                            Piloting and productizing Building Blocks are a key part of the CDC DMI’s goal of reducing the burden on STLT partners for collecting and reporting public health data.
                        </p>
                        <br />
                        <p>
                            To qualify as a Building Block, a software service must meet one or more of the following criteria:
                        </p>
                        <br />
                        <p>
                            Can fill a gap where no solution currently exists
                            Can provide significantly more value than current solution(s) where a burden presents
                            Reusable across multiple data streams and steps in the public health data journey
                            Enables significant reduction or elimination of manual effort to accomplish a critical task in one or more public health workflows
                            Able to be developed to minimum viable product and provide value within 6 months
                            Can be piloted while existing workflows remain unchanged, and incrementally adopted once pilot results demonstrate enough value that migration from legacy workflows is desired
                            Increases speed of data to public health and/or drives faster public health action (e.g., makes data easier to use for surveillance or outbreak response)
                        </p>
                    </div>
                </div>

            </div>
            <div className='bg-blue-50 py-10 px-20 text-blue-700'>
                <h4 className='text-4xl mb-12 font-extrabold'>List of current (& future) Building Blocks</h4>
                <div className="flex flex-row mb-8">
                    <div className={`${styles.dashRoundedBorder}`}>
                        <div className='m-8'>
                            <div className='mb-6'>icon</div>
                            <h5 className='text-2xl mb-2 font-semibold'>Location Services</h5>
                            <p className='text-sm'>(address validation, standardization, and data enrichment)</p>
                            <br />
                            <p className='text-sm'>
                                Tools for mapping data describing a standard geographic location to its canonical representation in a source dataset for purposes of standardization, validation, cleaning, and/or enrichment with other geography-related data.
                            </p>
                        </div>
                    </div>
                    <div className={`${styles.dashRoundedBorder} mx-8`}>
                        <div className='m-8'>
                            <div className='mb-6'>icon</div>
                            <h5 className='text-2xl mb-2 font-semibold'>Data Exchange Services</h5>
                            <p className='text-sm'>(for reporting to CDC)</p>
                            <br />
                            <p className='text-sm'>
                                An EDAV-integrated platform that provides API-based data exchange services supporting common standards (e.g., HL7, FHIR, CDA, CSV, JSON) and enabling observability to provenance and transparency on data transmissions.
                            </p>
                        </div>
                    </div>
                    <div className={`${styles.dashRoundedBorder}`}>
                        <div className='m-8'>
                            <div className='mb-6'>icon</div>
                            <h5 className='text-2xl mb-2 font-semibold'>Data Harmonization Services</h5>
                            <p className='text-sm'>for data structures and semantics)</p>
                            <br />
                            <p className='text-sm'>
                                Services that align the structure and semantics of an incoming data stream to the input specifications of the receiving application without changing the meaning of the data (e.g., transformations, format conversions, validations)
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className={`${styles.dashRoundedBorder} basis-1/3`}>
                        <div className='m-8'>
                            <div className='mb-6'>icon</div>
                            <h5 className='text-2xl mb-2 font-semibold'>Data Linkage Services</h5>
                            <p className='text-sm'>(for deduplicating data)</p>
                            <br />
                            <p className='text-sm'>
                                A service that identifies and links data referring to the same entity (e.g., patient, event, case) across disparate streams
                            </p>
                        </div>

                    </div>
                    <div className='mx-8 basis-1/3'>
                        <div className='m-8 text-center'>
                            <h5 className='font-semibold text-2xl text-center mb-4'>Ready to get started?</h5>
                            <p className='mb-3'>You can now test out Building Blocks in your jurisdiction's data environment</p>
                            <Button>
                                View our product offerings
                            </Button>
                        </div>
                    </div>
                    <div className='basis-1/3'>
                        <div className='m-8'></div>
                    </div>
                </div >
            </div >
        </div >
    );
}