import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import img1 from '../assets/Password_generator.png'
import '../styles/Cards.css'

// export default function PortfolioCards(props) {

//     return (
//         <div className='projects'>
//             <Row xs={1} md={2} className="g-4">
//                 {Array.from({ length: 4 }).map((_, idx) => (
//                     <Col key={idx}>
//                         <Card className='cardEffect'>
//                             <Card.Img variant="top" src={img1} />
//                             <Card.Body>
//                                 <Card.Title>{props.title}</Card.Title>
//                                 <Card.Text>
//                                     This is a longer card with supporting text below as a natural
//                                     lead-in to additional content. This content is a little bit
//                                     longer.
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//         </div>
//     )
// }

export default function PortfolioCards() {

    return (
        <div className='projects'>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card className='cardEffect'>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>THIS IS A TITLE</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

// try to map title, text and link using div parent and a single card image and see if it displays 4
