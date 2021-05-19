//import React, { useState } from 'react';
//import y from './y';
//import y from '../UI/y';
import classes from './TaskItem.module.css';


const TaskItem = (props) => {
  return (
    <li className={classes.item}>
      <span>{props.label}</span>
      <div className={classes.check}></div>
    </li>
  );
}

export default TaskItem;