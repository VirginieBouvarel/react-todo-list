import classes from './TaskAddButton.module.css';

const TaskAddButton = (props) => {

  return (
    <button
      type="button"
      className={classes.button}
      onClick={props.onClick}
    >
      +
    </button>
  );
}

export default TaskAddButton;