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
                            
                            
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec feugiat purus. Maecenas vel rhoncus lectus. Curabitur porta volutpat mollis. Fusce id finibus augue. Vivamus vitae neque eu sem gravida varius. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse varius sit amet enim fringilla consequat. Nam eu euismod purus.

                            Integer venenatis efficitur dui et feugiat. In hac habitasse platea dictumst. Proin consectetur cursus rhoncus. Vestibulum ultrices purus quam, eget tristique elit lobortis et. Praesent tellus magna, consectetur eu sapien scelerisque, semper hendrerit lacus. Phasellus lobortis arcu maximus, pharetra mi nec, dapibus metus. Donec eu tristique orci.

                            Nunc ultrices odio augue, vitae aliquam dui venenatis vitae. Aliquam fringilla faucibus diam, condimentum vehicula leo ultrices ullamcorper. Aenean consectetur erat vitae erat consectetur porttitor. Duis gravida lacinia scelerisque. In lobortis, tortor vitae iaculis egestas, orci nisl ullamcorper sapien, eu sollicitudin lectus magna in risus. Curabitur vitae quam consequat, efficitur lectus eget, sollicitudin lorem. In suscipit finibus auctor. Pellentesque et metus sodales, vestibulum mi efficitur, mattis lacus.

                            Cras sagittis eleifend turpis ac aliquam. Proin vel fermentum velit. Suspendisse potenti. Nulla vel dolor eu dolor facilisis ultrices. Quisque ornare enim non eleifend cursus. Quisque luctus pretium neque, vitae imperdiet tellus aliquet id. Vivamus rutrum non justo quis condimentum. Praesent vestibulum ante sed dignissim bibendum. Curabitur imperdiet risus et tellus ullamcorper rutrum. Proin eu eros quis purus blandit faucibus ac nec mi.
                        </p>
                    </section>
                </Card.Body>
            </Card>
        </div>

    )
};
