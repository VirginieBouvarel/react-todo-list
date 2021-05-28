import classes from './TaskAddButton.module.css';

const TaskAddButton = (props) => {

  return (
    <button
      type="button"
      className={`${classes.button} ${props.darkMode ? classes['button--dark'] : ''}`}
      onClick={props.onPlus}
    >
      +
    </button>
  );
}

export default TaskAddButton;