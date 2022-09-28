import { Button, Col, Container, Row } from "react-bootstrap";
import styles from '../styles/Home.module.scss'


export default function BuildingBlockInfo() {
    return (
        <div>
            <div className={`${styles.containerBackgroundLight} ${styles.dashBorder}`}>
                <Container className="text-primary px-0 mx-0 mw-100">
                    <Row>
                        <Col>
                            <div className={`w-75 h-50 ${styles.containerBackgroundMedium}`}>

                            </div>
                        </Col>
                        <Col>
                            <div className={`mt-5 py-4 px-5 ${styles.containerBackgroundMedium}`}>
                                <h1>Building Blocks</h1>
                                <p>
                                    Piloting and productizing Building Blocks are a key part of the CDC DMI’s goal of reducing the burden on STLT partners for collecting and reporting public health data.
                                </p>
                                <p>
                                    To qualify as a Building Block, a software service must meet one or more of the following criteria:
                                </p>
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
                        </Col>
                    </Row>
                </Container>

            </div>
            <div className={styles.containerBackgroundLight}>
                <Container className='text-primary py-5'>
                    <h4>List of current (& future) Building Blocks</h4>
                    <Row>
                        <Col className={`${styles.dashRoundedBorder}`}>
                            <div className='m-4'>
                                <div>icon</div>
                                <h5>Location Services</h5>
                                <p>(address validation, standardization, and data enrichment)</p>
                                <p>
                                    Tools for mapping data describing a standard geographic location to its canonical representation in a source dataset for purposes of standardization, validation, cleaning, and/or enrichment with other geography-related data.
                                </p>
                            </div>
                        </Col>
                        <Col className={`${styles.dashRoundedBorder} mx-4`}>
                            <div className='m-4'>
                                <div>icon</div>
                                <h5>Data Exchange Services</h5>
                                <p>(for reporting to CDC)</p>
                                <p>
                                    An EDAV-integrated platform that provides API-based data exchange services supporting common standards (e.g., HL7, FHIR, CDA, CSV, JSON) and enabling observability to provenance and transparency on data transmissions.
                                </p>
                            </div>
                        </Col>
                        <Col className={`${styles.dashRoundedBorder}`}>
                            <div className='m-4'>
                                <div>icon</div>
                                <h5>Data Harmonization Services</h5>
                                <p>(for data structures and semantics)</p>
                                <p>
                                    Services that align the structure and semantics of an incoming data stream to the input specifications of the receiving application without changing the meaning of the data (e.g., transformations, format conversions, validations)
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col className={`${styles.dashRoundedBorder}`}>
                            <div className='m-4'>
                                <div>icon</div>
                                <h5>Data Linkage Services</h5>
                                <p>(for deduplicating data)</p>
                                <p>
                                    A service that identifies and links data referring to the same entity (e.g., patient, event, case) across disparate streams
                                </p>
                            </div>
                        </Col>
                        <Col className='mx-4 d-flex align-items-center'>
                            <div className='m-4 text-center'>
                                <h5 className='text-center'>Ready to get started?</h5>
                                <p>You can now test out Building Blocks in your jurisdiction's data environment</p>
                                <Button>
                                    View our product offerings
                                </Button>
                            </div>
                        </Col>
                        <Col>
                            <div></div>
                        </Col>
                    </Row>
                </Container>

            </div>

        </div>
    );
}