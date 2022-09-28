import { Button, Col, Container, Row } from "react-bootstrap";
import styles from '../styles/Home.module.scss'

export default function ProductOffering() {
    return (
        <div>
            <div className={`${styles.containerBackgroundLight} ${styles.dashBorder}`}>
                <Container fluid className='p-5'>
                    <Row >
                        <Col className='pe-0' xs={7}>
                            <div className={`${styles.containerBackgroundMedium} d-none d-lg-block`}>
                                hello
                            </div>
                        </Col>
                        <Col className='ps-0' xs={5}>
                            <div className={`py-5 px-4 ${styles.containerBackgroundDark}`}>
                                <h2 className={`text-primary ${styles.headerText}`}>Our Product Offerings</h2>
                                <p className="text-primary">Our products create a data architecture that is: <br />
                                    Flexible and modular <br />
                                    Easy to update <br />
                                    Easier to understand <br />
                                    Easier to make open-source <br />
                                    Easier to integrate with STLTs’ existing systems <br />
                                    Performs similar operations consistently <br />
                                    Easier to share and reuse across STLTs</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={`${styles.containerBackgroundLight} ${styles.dashBorder}`}>
                <Container className='p-5 text-primary'>
                    <Row className={`py-5 px-4 ${styles.containerBackgroundDark}`}>
                        <Row>
                            <h4>Pipeline as a Product</h4>
                            <div>A cloud-based, off-the-shelf data ingestion and processing pipeline
                                built from modular Building Blocks which public health departments
                                can easily integrate into existing data systems. The pipeline produces
                                analysis-ready data by converting all incoming data to a single standard,
                                deduplicating and linking the data, and then geocoding the cleaned results.
                            </div>
                        </Row>
                        <Row className='my-4'>
                            <Col>
                                Access Azure repository
                            </Col>
                            <Col>
                                Access GCP repository
                            </Col>
                            <Col>
                                Access AWS repository
                            </Col>

                        </Row>
                    </Row>
                    <Row className={`mt-4 py-4 px-4 ${styles.containerBackgroundDark}`}>
                        <Row>
                            <h4>SDK</h4>
                            <div>Access the range of modular Building Blocks with our SDK toolkit.
                                Public health agencies can import, experiment, and integrate these
                                features into their existing pipelines. To see the full suite of
                                functionality of our SDK, check out our API documentation.
                            </div>
                        </Row>
                        <Row className="my-4">
                            <Col>
                                <div>Location Services</div>
                                <div>Data Linkage Services</div>
                            </Col>
                            <Col>
                                <div>Data Harmonization Services</div>
                                <div>Transport Services</div>
                            </Col>

                        </Row>
                    </Row>
                </Container>
            </div>
        </div >
    );
}
