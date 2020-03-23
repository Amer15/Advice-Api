import React from 'react';

import classes from './Card.module.css';

const card = (props) => {
    let advice = <p>Something went wrong!!</p>

    if(!props.error){
        advice = (
            <p>{props.advice}</p>
        )
    };

    return (
        <div className={classes.Card}>
        {advice}
         <button className={classes.button} onClick={props.clicked}>Get More</button>
        </div>
    )
}


export default card;