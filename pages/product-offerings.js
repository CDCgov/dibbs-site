import styles from '../styles/Home.module.scss'
import productOfferingsImage from '../public/products.svg'
import awsImage from '../public/icons/aws.png'
import azureImage from '../public/icons/azure.png'
import gcpImage from '../public/icons/gcp.png'
import locationIcon from '../public/icons/location.png';
import linkIcon from '../public/icons/link.png'
import transportIcon from '../public/icons/transport.png'
import organizationIcon from '../public/icons/organization.png'

import Image from 'next/image';

export default function ProductOffering() {
    return (
        <div>
            <div className='grid-container margin-top-9'>
                <div className='grid-row' >
                    <div className='desktop:grid-col-6 height-mobile'>
                        <Image alt='' src={productOfferingsImage} layout='fill'></Image>
                    </div>
                    <div className='desktop:grid-col-6'>
                        <h2 className='text-accent-cool-darker font-extrabold text-4xl mb-4'>Our Product Offerings</h2>
                        <p className="text-base-darkest">Our products create a data architecture that is: <br />
                            <br />
                            &nbsp; &#8226; &nbsp;  Flexible and modular <br />
                            &nbsp; &#8226; &nbsp;  Easy to update <br />
                            &nbsp; &#8226; &nbsp;  Easier to understand <br />
                            &nbsp; &#8226; &nbsp;  Easier to make open-source <br />
                            &nbsp; &#8226; &nbsp;  Easier to integrate with STLTs’ existing systems <br />
                            &nbsp; &#8226; &nbsp;  Performs similar operations consistently <br />
                            &nbsp; &#8226; &nbsp;  Easier to share and reuse across STLTs</p>
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
                        <div className='desktop:grid-col-4 text-center'>
                            <Image alt='' src={azureImage} layout='fixed' height='100' width='100'></Image>
                            <div>Access Azure repository</div>
                        </div>
                        <div className='desktop:grid-col-4 text-center'>
                            <Image alt='' src={gcpImage} layout='fixed'></Image>
                            <div>Access GCP repository</div>
                        </div>
                        <div className='desktop:grid-col-4 text-center'>
                            <Image alt='' src={awsImage} layout='fixed'></Image>
                            <div>Access AWS repository</div>
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
                        <div className="grid-row margin-y-6">
                            <div className='desktop:grid-col-4'>
                                <Image alt='' src={locationIcon} layout='fixed' />
                                <div>Location Services</div>
                            </div>
                            <div className='desktop:grid-col-4'>
                                <Image alt='' src={organizationIcon} layout='fixed' />
                                Data Harmonization Services
                            </div>
                        </div>
                        <div className="grid-row">
                            <div className='desktop:grid-col-4'>
                                <Image alt='' src={transportIcon} layout='fixed' />
                                Transport Services
                            </div>
                            <div className='desktop:grid-col-4'>
                                <Image alt='' src={linkIcon} layout='fixed' />
                                Data Linkage Services
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
