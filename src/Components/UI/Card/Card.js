import React from 'react';
// import './Card.css'

// function Card (props){
//     const classes = 'card ' + props.className;

//     return <div className={classes}>{props.children}</div>
// }

// export default Card

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
