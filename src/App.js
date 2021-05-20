import React, { useState, useEffect } from 'react'

import Header from './components/Header';
import TasksList from './components/Task/TasksList';
import TaskAddForm from './components/Task/TaskAddForm';


function App() {
  const savedTasks = localStorage.getItem('tasks-list');
  const [formIsVisible, setFormIsVisible] = useState(false);
  const [tasks, setTasks] = useState(savedTasks ? JSON.parse(savedTasks) : []);

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
    const newTask = {
      id: `task-${Math.random().toString()}`,
      name: `${task}`
    };
    setTasks((previousState) => {
      return [...previousState, newTask]
    });
  }
  const checkHandler = (id) => {
    setTasks((previousState) => {
      const updatedTasks = previousState.filter((item) => item.id !== id);
      console.log(updatedTasks)
      return [...updatedTasks];
    });
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
        />
      </main>
    </div>
  );
}

export default App;
