import styles from '../styles/Home.module.scss'
import productOfferingsImage from '../public/products.svg'
import mobileProductOfferingsImage from '../public/mobile/product-offerings.svg'

import awsImage from '../public/icons/aws.png'
import azureImage from '../public/icons/azure.png'
import gcpImage from '../public/icons/gcp.png'
import locationIcon from '../public/icons/location.png';
import linkIcon from '../public/icons/link.png'
import transportIcon from '../public/icons/transport.png'
import organizationIcon from './../public/icons/organization.png'

import Image from 'next/image';
import { Link } from '@trussworks/react-uswds'

export default function ProductOffering() {
    return (
        <div>
            <div className='grid-container margin-y-5 desktop:margin-bottom-0 desktop:margin-top-9'>
                <div className='grid-row' >
                    <div className='desktop:grid-col-12 text-center desktop:display-none'>
                        <Image alt='' src={mobileProductOfferingsImage} layout='fixed'></Image>
                    </div>
                    <div className='display-none desktop:grid-col-6 height-mobile desktop:display-block'>
                        <Image alt='' src={productOfferingsImage} layout='fill'></Image>
                    </div>
                    <div className='desktop:grid-col-6'>
                        {/*Why is the alignment not going left*/}
                        <h2 className='text-center text-accent-cool-darker font-extrabold text-4xl mb-4 lg:text-left'>Our Product Offerings</h2>
                        <p className="text-base-darkest">Our products create a data architecture that is: </p>
                        <ul class="usa-list list-disc">
                            <li> Flexible and modular</li>
                            <li> Easy to update</li>
                            <li> Easier to understand</li>
                            <li> Easier to make open-source</li>
                            <li> Easier to integrate with STLTs’ existing systems</li>
                            <li> Performs similar operations consistently </li>
                            <li> Easier to share and reuse across STLTs </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='bg-primary-lighter padding-y-7'>
                <div className='grid-container bg-white  padding-y-4 margin-bottom-5'>
                    <h4 className='font-semibold text-2xl mb-3'>Pipeline as a Product</h4>
                    <div>A cloud-based, off-the-shelf data ingestion and processing pipeline
                        built from modular Building Blocks which public health departments
                        can easily integrate into existing data systems. The pipeline produces
                        analysis-ready data by converting all incoming data to a single standard,
                        deduplicating and linking the data, and then geocoding the cleaned results.
                    </div>
                    <div className='grid-row  margin-top-4'>
                        <div className='desktop:grid-col-4 lg:text-center'>
                            <div className='display-none desktop:display-inline-block'>
                                <Image alt='' src={azureImage} layout='fixed' height='100' width='100' />
                            </div>
                            <div>
                                <Link href='/s'>Access Azure repository</Link>
                            </div>
                        </div>
                        <div className='desktop:grid-col-4 lg:text-center'>
                            <div className='display-none desktop:display-inline-block'>
                                <Image alt='' src={gcpImage} layout='fixed' />
                            </div>
                            <br />
                            <div>
                                <Link href='/s'>Access GCP repository</Link>
                            </div>
                            <br />
                        </div>
                        <div className='desktop:grid-col-4 lg:text-center'>
                            <div className='display-none desktop:display-inline-block'>
                                <Image alt='' src={awsImage} layout='fixed' />
                            </div>
                            <div className='text-italic'>AWS repository coming soon!</div>
                        </div>
                    </div>
                </div>
                <div className='grid-container bg-white padding-y-4'>
                    <h4 className='font-semibold text-2xl mb-3'>SDK</h4>
                    <div>Access the range of modular Building Blocks with our SDK toolkit.
                        Public health agencies can import, experiment, and integrate these
                        features into their existing pipelines. To see the full suite of
                        functionality of our SDK, check out our API documentation.
                    </div>
                    <div>
                        <div className="grid-row desktop:margin-y-6">
                            <div className='desktop:grid-col-4'>
                                <div className='grid-row margin-y-2 desktop:margin-y-0'>
                                    <div className='display-none desktop:display-inline-block margin-right-2'>
                                        <Image alt='' src={locationIcon} />
                                    </div>
                                    <Link className='usa-link--external desktop:margin-top-1' href='/'>Location Services</Link>

                                </div>
                            </div>
                            <div className='desktop:grid-col-4'>
                                <div className='grid-row margin-bottom-2 desktop:margin-bottom-0'>
                                    <div className='display-none desktop:display-inline-block margin-right-2'>
                                        <Image alt='' src={organizationIcon} />
                                    </div>
                                    <Link className='usa-link--external desktop:margin-top-1' href='/'>Data Harmonization Services</Link>
                                </div>
                            </div>
                        </div>
                        <div className="grid-row">
                            <div className='desktop:grid-col-4'>
                                <div className='grid-row margin-bottom-2 desktop:margin-bottom-0'>
                                    <div className='display-none desktop:display-inline-block margin-right-2'>
                                        <Image alt='' src={transportIcon} />
                                    </div>
                                    {/* add margin */}
                                    <Link className='usa-link--external' href='/'>Transport Services </Link>
                                </div>
                            </div>
                            <div className='desktop:grid-col-4'>
                                <div className='grid-row'>
                                    <div className='display-none desktop:display-inline-block margin-right-2'>
                                        <Image alt='' src={linkIcon} />
                                    </div>
                                    <Link className='usa-link--external' href='/'>Data Linkage Services </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
