import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Footer() {
    return (
        <footer>
            <Navbar bg="dark" variant="dark" fixed="bottom">
                <Container>
                    <Nav className="me-auto justify-content-center" fill variant="tabs">
                        <Nav.Link href="https://github.com/garfias06">GitHub</Nav.Link>
                        <Nav.Link href="">LinkedIn</Nav.Link>
                        <Nav.Link href="">Instagram</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </footer>
    )
};