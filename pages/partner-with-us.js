import { Button, Col, Container, Row } from "react-bootstrap";
import styles from '../styles/Home.module.scss'

export default function GetInvolved() {
    return (
        <div>
            <div className={`${styles.containerBackgroundLight}`}>
                <Container>
                    <Row>
                        <h1>Partner with us</h1>
                        <div>
                            Public health agencies have a variety of opportunities to contribute to the development of Building Blocks. Below we've outlined how jurisdictions can get involved at various levels of partnership, including our beta program, focus groups, and Community of Practice (CoP).
                            <br />
                            <br />
                            This is also an opportunity extended to any partner who would like their feedback incorporated into future Building Blocks work, but who may not be immediately available to participate in a pilot.
                        </div>
                    </Row>
                    <Row>
                        <Col>
                            <div>Picture placeholder</div>
                            <div>Beta program</div>
                            <div>
                                Our beta program is an opportunity for STLTs to define and iterate on existing Building Blocks. By participating in this program, STLTs will gain a greater awareness about their data architecture strengths and weaknesses and help improve a part of their data process.
                                <br /> <br />
                                We invite you to visit our SDK toolkit where you can explore the full range of modular Building Blocks. If interested in getting involved in our beta program, please reach out to our team.
                            </div>
                            <Button>Learn More</Button>
                        </Col>
                        <Col>
                            <div>Picture placeholder</div>
                            <div>Focus Groups</div>
                            <div>
                                We are conducting a series of focus groups to hear back from public health agency staff who interact with data related to childhood lead poisoning, Legionnaires’ disease, listeria, and HIV surveillance at any point along the data lifecycle (e.g., collection, ingestion, management, analysis, visualization).
                                <br /> <br />
                                The purpose of these focus groups is to gather STLT input on how we prioritize and design potential Building Blocks. Each focus group will last for approximately 60 minutes.</div>
                            <Button>Learn More</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={`${styles.containerBackgroundMedium}`}>
                <Container>
                    <Row>
                        <h6>You can also help support the Community of Practice</h6>
                        <div>
                            A CoP partner is a STLT who, in the immediate future, is interested in offering feedback about the design principles and application interface(s) for Building Blocks and, in the near future, is interested in participating to the Building Block ecosystem by contributing code, helping govern the open source community, or offering other services as needed.
                        </div>
                        <Button>
                            Contact us at dmibuildingblocks@cdc.gov
                        </Button>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
