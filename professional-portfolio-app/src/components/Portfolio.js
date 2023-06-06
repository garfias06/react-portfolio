import React from 'react';
import PortfolioCards from './childComponents/Cards';

export default function Portfolio(){

    const cardInfo=[
        {
            title:"Password Generator",
            text:"This is going to help generate a random password for your next account",
            link:"https://garfias06.github.io/generate-password/",
            img:"img1",
        },
        {
            title:"Nutricipe",
            text:"It generates a random recipe for your next meal",
            link:"https://mcreagan.github.io/Calorie-Counter/",
            img:"img2"
        },
        {
            title:"README Generator",
            text:"It generates a README file for your next project",
            link:"https://github.com/garfias06/readme-generator/",
            img:"img3"
        },
        {
            title:"Code Refactoring",
            text:"First homework during BootCamp",
            link:"https://garfias06.github.io/challenge-1/",
            img:"img4"
        },
        {
            title:"Work Scheduler",
            text:"Plan your activities for the day",
            link:"https://garfias06.github.io/calendar-challenge/",
            img:"img5"
        },
        {
            title:"BackEnd Social Media Startup",
            text:"Database to manage your next social media app",
            link:"https://github.com/garfias06/social-media-startup",
            img:"img6"
        }
    ]

    return(
        <div className='projects'>
            {cardInfo.map((item,i)=>(<PortfolioCards item={item} />))}
        </div>
    )
}

// object with cards information, map it and then send it as props to the cards file
