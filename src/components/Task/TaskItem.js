//import React, { useState } from 'react';
//import y from './y';
//import y from '../UI/y';
import classes from './TaskItem.module.css';


const TaskItem = (props) => {
  return (
    <li className={classes.item}>
      <p>
        <input className={classes.input} type="text" id={props.id} defaultValue={props.label} />
      </p>
      <div className={classes.check} onClick={props.onCheck.bind(null, props.id)}></div>
    </li>
  );
}

export default TaskItem;