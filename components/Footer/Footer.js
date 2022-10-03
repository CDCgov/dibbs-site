import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function Footer() {
    return (
        <Container className='py-5'>
            <Row>
                <Col>
                    Home
                </Col>
                <Col>
                    What is a building block?
                </Col>
                <Col>
                    Our product offerings
                </Col>
                <Col>
                    Partner with us
                </Col>
            </Row>
            <Row className='mt-4'>
                <div className='border border-primary w-25'></div>
            </Row>
            <Row className='mt-3'>
                <p>© 2022 Copyright Name. All rights reserved.</p>
            </Row>
        </Container>
    );
}

export default Footer;