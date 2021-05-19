//import React, { useState } from 'react';
//import y from './y';
//import y from '../UI/y';
import classes from './TaskItem.module.css';


const TaskItem = (props) => {
  return (
    <li className={classes.item}>
      <label htmlFor={props.id}>{props.label}</label>
      <input type="checkbox" id={props.id} />
    </li>
  );
}

export default TaskItem;