import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer() {
    return (
        <footer>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/img/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        React Bootstrap
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </footer>
    )
}

// get a footer with images and link them to your contact info and social media 