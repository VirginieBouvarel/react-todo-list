import React, { useContext } from 'react';
import ThemeContext from '../../store/theme-context';

import classes from './TaskAddButton.module.css';

const TaskAddButton = (props) => {
  const themeCtx = useContext(ThemeContext);

  return (
    <button
      type="button"
      className={`${classes.button} ${themeCtx.darkMode ? classes['button--dark'] : ''}`}
      onClick={props.onPlus}
    >
      +
    </button>
  );
}

export default TaskAddButton;