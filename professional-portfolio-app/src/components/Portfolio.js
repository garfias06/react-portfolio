import React from 'react';
import PortfolioCards from './childComponents/Cards';
import img1 from './assets/Password_generator.png';
import img2 from './assets/Nutricipe.png';
import img3 from './assets/Readme_generator.png';
import img4 from './assets/quell.jpg';
import img5 from './assets/Calendar.png';
import img6 from './assets/backend.jpg';


export default function Portfolio() {

    const cardInfo = [
        {
            title: "Password Generator",
            text: "This is going to help generate a random password for your next account.",
            link: "https://garfias06.github.io/generate-password/",
            repo:"https://github.com/garfias06/generate-password",
            img: img1
        },
        {
            title: "Nutricipe",
            text: "It generates a random recipe for your next meal.",
            link: "https://mcreagan.github.io/Calorie-Counter/",
            repo:"https://github.com/MCReagan/Calorie-Counter",
            img: img2
        },
        {
            title: "README Generator",
            text: "It generates a README file for your next project.",
            link: "https://github.com/garfias06/readme-generator/",
            repo:"https://github.com/garfias06/readme-generator",
            img: img3
        },
        {
            title: "Quell",
            text: "A supportive and empowering community platform dedicated to fostering mental well-being and personal growth.",
            link: "https://quell-mental-health-9f784a2642a5.herokuapp.com/",
            repo:"https://github.com/roshniipatel/quell",
            img: img4
        },
        {
            title: "Work Scheduler",
            text: "Plan your activities for the day with this scheduler.",
            link: "https://garfias06.github.io/calendar-challenge/",
            repo:"https://github.com/garfias06/calendar-challenge",
            img: img5
        },
        {
            title: "Social Media Startup",
            text: "Database to manage your next social media app.",
            link: "https://github.com/garfias06/social-media-startup",
            repo:"https://github.com/garfias06/social-media-startup",
            img: img6
        }
    ]

    return (
        <div className='projects'>
            {cardInfo.map((item, i) => (<PortfolioCards item={item} />))}
        </div>
    )
};

