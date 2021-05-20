import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div
      className={`
        ${classes.control} 
        ${props.className} 
        ${props.isValid === false ? classes.invalid : ''}
      `}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder || ""}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        autoFocus={props.autoFocus || ""}
      />
    </div>
  );
};

export default Input;