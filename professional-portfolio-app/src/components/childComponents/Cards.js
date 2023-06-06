import React from 'react';
import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import img1 from '../assets/Password_generator.png'
import '../styles/Cards.css'

// try to map title, text and link using div parent and a single card image and see if it displays 6 cards

export default function PortfolioCards({ item }) {

    return (
        <Card className='project-card'>
            <Card.Img className="project-img" variant="top" src={img1} />
            <Card.Body>
                <Card.Text>
                    {item.text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

