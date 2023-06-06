import React from 'react';
import PortfolioCards from './childComponents/Cards';

export default function Portfolio(){

    return(
        <div>
            <PortfolioCards />
        </div>
    )
}

// object with cards information, map it and then send it as props to the cards file