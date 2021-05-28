import React, { useContext } from 'react';
import ThemeContext from '../../store/theme-context';
import classes from './TaskItem.module.css';


const TaskItem = (props) => {
  const themeCtx = useContext(ThemeContext);

  return (
    <li className={`${classes.item} ${themeCtx.darkMode ? classes['item--dark'] : ""} `}>
      <p>
        <input className={classes.input} type="text" id={props.id} value={props.label} onChange={(event) => { props.onChange(event.target.value, props.id) }} />
      </p>
      <div className={classes.check} onClick={props.onCheck.bind(null, props.id)}></div>
    </li>
  );
}

export default TaskItem;
