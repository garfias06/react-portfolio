import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Ulises Garfias</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">About Me</Nav.Link>
                        <Nav.Link href="#features">Portfolio</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                        <Nav.Link href="#pricing">Resume</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}