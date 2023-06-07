import React from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/Cards.css';

export default function PortfolioCards({ item }) {

    return (
        <Card className='project-card cardEffect'>
            <Card.Link href={item.link} className='link'>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title className='title'>{item.title}</Card.Title>
                    <Card.Text>
                        {item.text}
                    </Card.Text>

                    <Card.Link href={item.repo} className='repo'>SEE REPOSITORY</Card.Link>

                </Card.Body>
            </Card.Link>
        </Card>
    )
};
