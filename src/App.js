import React, { useState, useReducer, useEffect } from 'react'

import Header from './components/Header';
import TasksList from './components/Task/TasksList';
import TaskAddForm from './components/Task/TaskAddForm';

const tasksReducer = (previousState, action) => {
  if (action.type === "ADD") {
    const newTask = {
      id: `task-${Math.random().toString()}`,
      name: `${action.data}`
    };
    return [...previousState, newTask];
  }
  if (action.type === "CHECK") {
    const updatedTasks = previousState.filter((item) => item.id !== action.data);
    return [...updatedTasks];
  }
  if (action.type === "EDIT") {
    const existingTaskIndex = previousState.findIndex(task => task.id === action.data.id);
    const existingTask = previousState[existingTaskIndex];

    const updatedtask = { ...existingTask, name: action.data.value };
    const updatedTasks = [...previousState];
    updatedTasks[existingTaskIndex] = updatedtask;

    return [...updatedTasks];
  }
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
    dispatchTasksUpdate({ type: "ADD", data: task })
  }
  const checkHandler = (id) => {
    dispatchTasksUpdate({ type: "CHECK", data: id })
  }
  const editHandler = (value, id) => {
    dispatchTasksUpdate({ type: "EDIT", data: { value: value, id: id } })
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
