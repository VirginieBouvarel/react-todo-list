import classes from './TaskAddButton.module.css';

const TaskAddButton = (props) => {

  return (
    <button
      type="button"
      className={classes.button}
      onClick={props.onPlus}
    >
      +
    </button>
  );
}

export default TaskAddButton;