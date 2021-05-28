import React from 'react';
import TaskItem from './TaskItem';
import TaskAddButton from './TaskAddButton';

import classes from './TasksList.module.css';



const TasksList = (props) => {
  return (
    <div className={classes.list}>
      <ul>
        {props.tasks.map(task => (
          <TaskItem
            key={task.id}
            id={task.id}
            label={task.name}
            onCheck={props.onCheck}
            onChange={props.onChange}
          />
        ))}
      </ul>
      <TaskAddButton onPlus={props.onPlus} />
    </div>
  )
}

export default TasksList