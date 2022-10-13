import { Button } from '@trussworks/react-uswds';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import buildingBlockImage from '../public/building-block-1.svg';
import locationIcon from '../public/icons/location.png';
import linkIcon from '../public/icons/link.png'
import codeIcon from '../public/icons/code.png'
import organizationIcon from '../public/icons/organization.png'



export default function BuildingBlockInfo() {
    return (
        <div>
            <div className='grid-container maxw-desktop-lg'>
                <div className="grid-row">
                    <div className={`desktop:grid-col-5 ${styles.buildingBlockImage}`}>
                        <Image src={buildingBlockImage}></Image>
                    </div>
                    <div className='desktop:grid-col-7'>
                        <div className='margin-left-7'>
                            <h1 className='font-ui-xl text-accent-cool-darker font-bold margin-bottom-2'>Building Blocks</h1>
                            <div className='text-base-darkest line-height-sans-6'>
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
                                    <br /> Can provide significantly more value than current solution(s) where a burden presents
                                    <br /> Reusable across multiple data streams and steps in the public health data journey
                                    <br /> Enables significant reduction or elimination of manual effort to accomplish a critical task in one or more public health workflows
                                    <br /> Able to be developed to minimum viable product and provide value within 6 months
                                    <br /> Can be piloted while existing workflows remain unchanged, and incrementally adopted once pilot results demonstrate enough value that migration from legacy workflows is desired
                                    <br /> Increases speed of data to public health and/or drives faster public health action (e.g., makes data easier to use for surveillance or outbreak response)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='bg-primary-lighter padding-y-7'>
                <div className='grid-container maxw-desktop-lg'>
                    <div className="grid-row grid-gap-2">
                        <div className='desktop:grid-col-4 radius-md'>
                            <div className='bg-white padding-205'>
                                <div className='mb-6'>
                                    <Image src={locationIcon} layout='fixed'></Image>
                                </div>
                                <h5 className='text-2xl mb-2 font-semibold'>Location Services</h5>
                                <div className='font-ui-3xs line-height-sans-6'>
                                    <p>(address validation, standardization, and data enrichment)</p>
                                    <br />
                                    <p>
                                        Tools for mapping data describing a standard geographic location to its canonical representation in a source dataset for purposes of standardization, validation, cleaning, and/or enrichment with other geography-related data.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='desktop:grid-col-4 radius-md'>
                            <div className='bg-white padding-205'>
                                <div className='mb-6'>
                                    <Image src={codeIcon} layout='fixed'></Image>
                                </div>
                                <h5 className='text-2xl mb-2 font-semibold'>Data Exchange Services</h5>
                                <div className='font-ui-3xs line-height-sans-6'>
                                    <p>(for reporting to CDC)</p>
                                    <br />
                                    <p>
                                        An EDAV-integrated platform that provides API-based data exchange services supporting common standards (e.g., HL7, FHIR, CDA, CSV, JSON) and enabling observability to provenance and transparency on data transmissions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='desktop:grid-col-4 radius-md'>
                            <div className='bg-white padding-205'>
                                <div className='mb-6'>
                                    <Image src={organizationIcon} layout='fixed'></Image>
                                </div>
                                <h5 className='text-2xl mb-2 font-semibold'>Data Harmonization Services</h5>
                                <div className='font-ui-3xs line-height-sans-6'>
                                    <p>(for data structures and semantics)</p>
                                    <br />
                                    <p>
                                        Services that align the structure and semantics of an incoming data stream to the input specifications of the receiving application without changing the meaning of the data (e.g., transformations, format conversions, validations)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid-row grid-gap-2 margin-top-205'>
                        <div className='desktop:grid-col-4 radius-md'>
                            <div className='bg-white padding-205'>
                                <div className='mb-6'>
                                    <Image src={linkIcon} layout='fixed'></Image>
                                </div>
                                <h5 className='text-2xl mb-2 font-semibold'>Data Linkage Services</h5>
                                <div className='font-ui-3xs line-height-sans-6'>
                                    <p>(for deduplicating data)</p>
                                    <br />
                                    <p>
                                        A service that identifies and links data referring to the same entity (e.g., patient, event, case) across disparate streams
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className='desktop:grid-col-4 radius-md'>
                            <div className='bg-accent-cool-dark padding-6 text-center'>
                                <h5 className='text-white font-semibold text-2xl text-center mb-4'>Ready to get started?</h5>
                                <p className='text-white mb-3'>You can now test out Building Blocks in your jurisdiction&apos;s data environment</p>
                                <Button accentStyle='warm'>
                                    View our product offerings
                                </Button>
                            </div>
                        </div>
                        <div className='desktop:grid-col-4'>
                            <div className='m-8'></div>
                        </div>
                    </div >
                </div >
            </div>
        </div >
    );
}