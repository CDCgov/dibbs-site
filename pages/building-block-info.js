import { Col, Container, Row } from "react-bootstrap";

export default function BuildingBlockInfo() {
    return (
        <div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            Hello
                        </Col>
                        <Col>
                            <div>
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
            <div>
                <Container>
                    <h4>List of current (& future) Building Blocks</h4>
                </Container>

            </div>

        </div>
    );
}