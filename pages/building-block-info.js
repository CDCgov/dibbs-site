import { Button } from '@trussworks/react-uswds';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import buildingBlockImage from '../public/building-block-1.svg';
import mobileBuildingBlockImage from '../public/mobile/mobile-building-block.svg';
import locationIcon from '../public/icons/location.png';
import linkIcon from '../public/icons/link.png'
import codeIcon from '../public/icons/code.png'
import organizationIcon from '../public/icons/organization.png'



export default function BuildingBlockInfo() {
    return (
        <div>
            <div className='grid-container padding-x-205 margin-y-5 maxw-widescreen desktop:padding-x-9 desktop:margin-y-7 desktop:margin-y-0'>
                <div className="grid-row">
                    <div className={`desktop:grid-col-5 display-none desktop:display-inline-block text-bottom ${styles.buidlingBlockInfoImage} `}>
                        <Image alt='' src={buildingBlockImage} layout='fill'></Image>
                    </div>
                    <div className='desktop:display-none text-center grid-col-12'>
                        <Image alt='' src={mobileBuildingBlockImage}></Image>
                    </div>
                    <div className='desktop:grid-col-7'>
                        <div className='desktop:margin-left-7 desktop:margin-top-9 desktop:margin-bottom-7'>
                            <h1 className='font-ui-xl text-accent-cool-darker font-bold margin-bottom-2 text-center lg:text-left'>Building Blocks</h1>
                            <div className='text-base-darkest line-height-sans-6'>
                                <p className='font-semibold'>
                                    Piloting and productizing Building Blocks are a key part of the CDC DMI's goal of reducing the burden on STLT partners for collecting and reporting public health data.
                                </p>
                                <br />
                                <p className='text-italic'>
                                    To qualify as a Building Block, a software service must meet one or more of the following criteria:
                                </p>
                                <ul class="usa-list list-disc">
                                    <li> Can fill a gap where no solution currently exists</li>
                                    <li> Can provide significantly more value than current solution(s) where a burden presents</li>
                                    <li> Reusable across multiple data streams and steps in the public health data journey</li>
                                    <li> Enables significant reduction or elimination of manual effort to accomplish a critical task in one or more public health workflows </li>
                                    <li> Able to be developed to minimum viable product and provide value within 6 months</li>
                                    <li> Can be piloted while existing workflows remain unchanged, and incrementally adopted once pilot results demonstrate enough value that migration from legacy workflows is desired </li>
                                    <li> Increases speed of data to public health and/or drives faster public health action (e.g., makes data easier to use for surveillance or outbreak response)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='bg-primary-lighter padding-top-5 desktop:padding-y-7'>
                <div className='grid-container maxw-widescreen padding-x-0 desktop:padding-x-7'>
                    <div className="grid-row grid-gap-3">
                        <div className='desktop:grid-col-4'>
                            <div className='bg-white padding-205 lg:h-80 desktop:radius-md shadow-1 border-1px border-accent-cool desktop:border-0'>
                                <div className='margin-bottom-1 text-center lg:text-left'>
                                    <Image alt='' src={locationIcon} layout='fixed'></Image>
                                </div>
                                <h5 className='text-center lg:text-left text-2xl margin-bottom-1 text-accent-cool-darker'>Location Services</h5>
                                <div className='font-ui-3xs line-height-sans-6'>
                                    <p className='text-center lg:text-left font-semibold'>(address validation, standardization, and data enrichment)</p>
                                    <br />
                                    <p>
                                        Tools for mapping data describing a standard geographic location to its canonical representation in a source dataset for purposes of standardization, validation, cleaning, and/or enrichment with other geography-related data.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='desktop:grid-col-4 margin-y-2 desktop:margin-y-0'>
                            <div className='bg-white padding-205 lg:h-80 desktop:radius-md shadow-1 border-1px border-accent-cool desktop:border-0'>
                                <div className='margin-bottom-105 text-center lg:text-left'>
                                    <Image alt='' src={codeIcon} layout='fixed'></Image>
                                </div>
                                <h5 className='text-2xl margin-bottom-1 text-center lg:text-left text-accent-cool-darker'>Data Exchange Services</h5>
                                <div className='font-ui-3xs line-height-sans-6'>
                                    <p className='text-center lg:text-left font-semibold'>(for reporting to CDC)</p>
                                    <br />
                                    <p>
                                        An EDAV-integrated platform that provides API-based data exchange services supporting common standards (e.g., HL7, FHIR, CDA, CSV, JSON) and enabling observability to provenance and transparency on data transmissions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='desktop:grid-col-4'>
                            <div className='bg-white padding-205 lg:h-80 desktop:radius-md shadow-1 border-1px border-accent-cool desktop:border-0'>
                                <div className='margin-bottom-1 text-center lg:text-left'>
                                    <Image alt='' src={organizationIcon} layout='fixed'></Image>
                                </div>
                                <h5 className='text-2xl margin-bottom-1 text-center lg:text-left text-accent-cool-darker'>Data Harmonization Services</h5>
                                <div className='font-ui-3xs line-height-sans-6'>
                                    <p className='text-center lg:text-left font-semibold'>(for data structures and semantics)</p>
                                    <br />
                                    <p>
                                        Services that align the structure and semantics of an incoming data stream to the input specifications of the receiving application without changing the meaning of the data (e.g., transformations, format conversions, validations)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid-row grid-gap-3  desktop:margin-top-205'>
                        <div className='desktop:grid-col-4 margin-y-2 desktop:margin-y-0'>
                            <div className='bg-white padding-205 lg:h-80 desktop:radius-md shadow-1 border-1px border-accent-cool desktop:border-0'>
                                <div className='margin-bottom-105 text-center lg:text-left'>
                                    <Image alt='' src={linkIcon} layout='fixed'></Image>
                                </div>
                                <h5 className='text-2xl margin-bottom-1 text-center lg:text-left text-accent-cool-darker'>Data Linkage Services</h5>
                                <div className='font-ui-3xs line-height-sans-6'>
                                    <p className='text-center lg:text-left font-semibold'>(for deduplicating data)</p>
                                    <br />
                                    <p>
                                        A service that identifies and links data referring to the same entity (e.g., patient, event, case) across disparate streams
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className='desktop:grid-col-4'>
                            <div className='bg-accent-cool-dark desktop:radius-md shadow-1 padding-y-6 padding-x-3 text-center lg:h-80 flex-align-center flex flex-row'>
                                <span>
                                    <h3 className='text-white font-semibold text-center margin-bottom-2 text-4xl'>Ready to get started?</h3>
                                    <p className='text-white margin-bottom-105 padding-x-205 desktop:padding-x-0'>You can now test out Building Blocks in your jurisdiction&apos;s data environment</p>
                                    <Button accentStyle='warm'>
                                        View our product offerings
                                    </Button>
                                </span>
                            </div>
                        </div>

                    </div >
                </div >
            </div>
        </div >
    );
}