import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Navbar.module.scss'

function BasicExample() {
    return (
        <Navbar bg="light" expand="lg" className="px-lg-4">
            <Container className='d-none d-lg-block w-auto'>
                <Navbar.Brand className={styles.linkText} href="/">PHDI</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
            <Container fluid className='d-xl-none d-lg-none w-100'>
                <Navbar.Brand className={styles.linkText} href="/">PHDI</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
            <Container fluid>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link className={styles.linkText} href="/">What is a Building Block?</Nav.Link>
                        <Nav.Link className={styles.linkText} href="/">Our product offerings</Nav.Link>
                        <Nav.Link className={styles.linkText} href="/partner-with-us">Partner with us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;