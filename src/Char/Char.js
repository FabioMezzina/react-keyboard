import React from 'react';
import classes from './Char.module.css';

const char = (props) => {
  return (
    <div className={classes.CharComponent} onClick={props.click} >
      {props.character}
    </div>
  );
};

export default char;