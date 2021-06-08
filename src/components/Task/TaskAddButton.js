import classes from './TaskAddButton.module.css';
import Button from './../UI/Button';

const TaskAddButton = (props) => {
  return (
    <Button
      className={classes['add-button']}
      onClick={props.onPlus}
    >
      +
    </Button>
  );
}

export default TaskAddButton;