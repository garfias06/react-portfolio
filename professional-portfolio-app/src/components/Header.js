import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles/Header.css';

export default function Header({ currentPage, handlePages }) {
    return (
        <div>
            <Navbar bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand className='navBar'>&#128187; Ulises Garfias</Navbar.Brand>
                    <Nav className="me-auto" >
                        <Nav.Link 
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} href="#about" 
                        onClick={()=>handlePages('About')}>About Me</Nav.Link>
                        <Nav.Link 
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}  href="#portfolio" 
                        onClick={()=>handlePages('Portfolio')}>Portfolio</Nav.Link>
                        <Nav.Link href="#contact" onClick={()=>handlePages('Contact')}>Contact</Nav.Link>
                        <Nav.Link href="#resume" onClick={()=>handlePages('Resume')}>Resume</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
};
