import { Button, Col, Container, Row } from "react-bootstrap";
import styles from '../styles/Home.module.scss'

export default function ProductOffering() {
    return (
        <div className='text-blue-700'>
            <div className={`bg-blue-50 ${styles.dashBorder} py-12 px-20`}>
                <div className='flex flex-row' >
                    <div className='basis-1/2 bg-blue-100 my-3'>
                        hello
                    </div>
                    <div className='basis-1/2 bg-blue-200 py-12 px-8'>
                        <h2 className='text-primary font-extrabold text-4xl mb-4'>Our Product Offerings</h2>
                        <p className="text-primary">Our products create a data architecture that is: <br />
                            Flexible and modular <br />
                            Easy to update <br />
                            Easier to understand <br />
                            Easier to make open-source <br />
                            Easier to integrate with STLTs’ existing systems <br />
                            Performs similar operations consistently <br />
                            Easier to share and reuse across STLTs</p>
                    </div>
                </div>
            </div>
            <div className={`${styles.containerBackgroundLight} ${styles.dashBorder} py-16 px-20`}>
                <div className={`py-10 px-6 bg-blue-200`}>
                    <div className='mb-10'>
                        <h4 className='font-semibold text-2xl mb-3'>Pipeline as a Product</h4>
                        <div>A cloud-based, off-the-shelf data ingestion and processing pipeline
                            built from modular Building Blocks which public health departments
                            can easily integrate into existing data systems. The pipeline produces
                            analysis-ready data by converting all incoming data to a single standard,
                            deduplicating and linking the data, and then geocoding the cleaned results.
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            Access Azure repository
                        </div>
                        <div>
                            Access GCP repository
                        </div>
                        <div>
                            Access AWS repository
                        </div>

                    </div>
                </div>
                <div className={`mt-4 py-4 px-4 bg-blue-200`}>
                    <div className='mb-10'>
                        <h4 className='font-semibold text-2xl mb-3'>SDK</h4>
                        <div>Access the range of modular Building Blocks with our SDK toolkit.
                            Public health agencies can import, experiment, and integrate these
                            features into their existing pipelines. To see the full suite of
                            functionality of our SDK, check out our API documentation.
                        </div>
                    </div>
                    <div className="flex flex-row my-4">
                        <div className='basis-1/4'>Location Services</div>
                        <div className='basis-1/4'>Data Linkage Services</div>
                    </div>
                    <div className="flex flex-row my-4">
                        <div className='basis-1/4'>Data Harmonization Services</div>
                        <div className='basis-1/4'>Transport Services</div>
                    </div>
                </div>
            </div>
        </div >
    );
}
