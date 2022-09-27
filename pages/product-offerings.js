import { Button, Col, Container, Row } from "react-bootstrap";
import styles from '../styles/Home.module.scss'

export default function ProductOffering() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        hello
                    </Col>
                    <Col>
                        <div>
                            <h3>Our Product Offerings</h3>
                            <p>Our products create a data architecture that is: <br />
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
            <Container>
                <Row>
                    Hello
                </Row>
                <Row> Hello</Row>

            </Container>
        </div >
    );
}
