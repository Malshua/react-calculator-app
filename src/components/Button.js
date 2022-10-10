import React from 'react';
import classes from './Button.module.css';

function Button(props, handler) {
  return (
    <div
      className={
        props.value === 'C' || props.value === '='
          ? `${classes.calcBtns} ${classes.res}`
          : `${classes.calcBtns}`
      }
      onClick={() => handler(props.value)}
    >
      {props.value}
    </div>
  );
}

export default Button;
