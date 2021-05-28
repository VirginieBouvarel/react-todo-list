import React, { useState, useReducer, useEffect } from 'react'

import Header from './components/Header';
import TasksList from './components/Task/TasksList';
import TaskAddForm from './components/Task/TaskAddForm';

const actionTypes = { add: 'ADD', check: 'CHECK', edit: 'EDIT' };

const tasksReducer = (previousState, action) => {
  let updatedTasks = [...previousState];

  switch (action.type) {
    case actionTypes.add:
      const newTask = {
        id: `task-${Math.random().toString()}`,
        name: `${action.data}`
      };
      updatedTasks = updatedTasks.concat(newTask);
      break;

    case actionTypes.check:
      updatedTasks = updatedTasks.filter((item) => item.id !== action.data);
      break;

    case actionTypes.edit:
      const existingTaskIndex = previousState.findIndex(task => task.id === action.data.id);
      const existingTask = previousState[existingTaskIndex];

      const updatedtask = { ...existingTask, name: action.data.value };
      updatedTasks[existingTaskIndex] = updatedtask;
      break;

    default:
      throw new Error();
  }

  return [...updatedTasks];

};

function App() {
  const [formIsVisible, setFormIsVisible] = useState(false);

  const savedTasks = localStorage.getItem('tasks-list');
  const tasksInitialState = savedTasks ? JSON.parse(savedTasks) : [];
  const [tasks, dispatchTasksUpdate] = useReducer(tasksReducer, tasksInitialState);

  useEffect(
    () => { localStorage.setItem('tasks-list', JSON.stringify(tasks)) },
    [tasks]
  );

  const showFormHandler = () => {
    setFormIsVisible(true);
  }
  const hideFormHandler = () => {
    setFormIsVisible(false);
  }

  const addHandler = (task) => {
    dispatchTasksUpdate({ type: actionTypes.add, data: task })
  }
  const checkHandler = (id) => {
    dispatchTasksUpdate({ type: actionTypes.check, data: id })
  }
  const editHandler = (value, id) => {
    dispatchTasksUpdate({ type: actionTypes.edit, data: { value, id } })
  }

  return (
    <div className="App">
      { formIsVisible && <TaskAddForm onClose={hideFormHandler} onAdd={addHandler} />}
      <Header />
      <main>
        <TasksList
          tasks={tasks}
          onPlus={showFormHandler}
          onCheck={checkHandler}
          onChange={editHandler}
        />
      </main>
    </div>
  );
}

export default App;
