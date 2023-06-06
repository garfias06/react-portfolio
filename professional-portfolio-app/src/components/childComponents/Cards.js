import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import img1 from '../assets/Password_generator.png'
import '../styles/Cards.css'


// try to map title, text and link using div parent and a single card image and see if it displays 4


export default function PortfolioCards() {

    return (
        <div className='projects'>
            <Card className='cardEffect'>
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}