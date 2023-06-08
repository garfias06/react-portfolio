import React from "react";
import './styles/Resume.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Resume() {
    return (
        <div className="resume">
            <Card text="white" bg="dark">
                <Card.Body>
                    <Button variant="light" type="submit" className="downloadBtn" href="https://docs.google.com/document/d/1bdiqCtmuJxY-ugeYN0JdRTSZ68r76BXynXdb5neeUHM/edit?usp=sharing">
                        View Resume
                    </Button>
                    <section className="center">
                        <h4>Programming Languages</h4>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>GraphQL</li>
                        </ul>
                        <h4>Libraries & Frameworks</h4>
                        <ul>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>React</li>
                        </ul>
                        <h4>Databases & Libraries</h4>
                        <ul>
                            <li>SQL</li>
                            <li>NoSQL</li>
                            <li>Sequelize</li>
                            <li>Mongoose</li>
                        </ul>
                        <h4>Tools & Platforms</h4>
                        <ul>
                            <li>GitHub</li>
                            <li>Heroku</li>
                        </ul>
                    </section>
                </Card.Body>
            </Card>
        </div>
    )
};


