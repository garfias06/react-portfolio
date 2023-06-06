import React from 'react';
import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import img1 from '../assets/Password_generator.png'
import '../styles/Cards.css'


// try to map title, text and link using div parent and a single card image and see if it displays 4


export default function PortfolioCards(props) {

    return (
        <div className='projects'>
            {/* <Row xs={1} md={2} className="g-4"> */}
                {/* <Col key={props.i}> */}
                    <Card className='cardEffect' key={props.i}>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Text>
                                {props.text}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                {/* </Col> */}
            {/* </Row> */}
        </div>
    )
}