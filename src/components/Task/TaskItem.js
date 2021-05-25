import classes from './TaskItem.module.css';


const TaskItem = (props) => {
  return (
    <li className={classes.item}>
      <p>
        <input className={classes.input} type="text" id={props.id} value={props.label} onChange={(event) => { props.onChange(event.target.value, props.id) }} />
      </p>
      <div className={classes.check} onClick={props.onCheck.bind(null, props.id)}></div>
    </li>
  );
}

export default TaskItem;