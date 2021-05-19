import React from 'react';
import TaskItem from './TaskItem';
import TaskAddButton from './TaskAddButton';

import classes from './TasksList.module.css';

const tasks = [
  { id: "task-1", name: "Faire une todo list" },
  { id: "task-2", name: "Apprendre React" },
  { id: "task-3", name: "Apprendre Vue.js" },
  { id: "task-4", name: "Réviser la méthode map()" },
];

const TasksList = () => {
  return (
    <>
      <ul className={classes.list}>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            label={task.name}
          />
        ))}
      </ul>
      <TaskAddButton />
    </>
  )
}

export default TasksList