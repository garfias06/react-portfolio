import React from "react";
import Card from 'react-bootstrap/Card';
import './styles/AboutMe.css'
import picture from './assets/Profile_Picture.jpeg';

export default function AboutMe() {
    return (
        <div className="about">
            <Card text="white" bg="dark">
                <Card.Body className="display">
                    <section>
                        <figure>
                            <img className="picture" src={picture} alt="profile_picture" />
                        </figure>
                    </section>
                    <section className="text">
                        <p>
                            Former Traveling Welder now Full Stack Junior Web Developer seeking to make an impact to the Tech Industry with hard work and discipline. 
                            If I'm not debugging, building a website from scratch or learning about the next VSCode Extension you will find me working out in the gym or driving my truck around the city, always thinking about my next project even if it includes welding on site.
                        </p>
                    </section>
                </Card.Body>
            </Card>
        </div>

    )
};
