import React, { useState } from 'react'

import Header from './components/Header';
import TasksList from './components/Task/TasksList';
import TaskAddForm from './components/Task/TaskAddForm';

const tasksData = [
  { id: "task-1", name: "Faire une todo list" },
  { id: "task-2", name: "Apprendre React" },
  { id: "task-3", name: "Apprendre Vue.js" },
  { id: "task-4", name: "Réviser la méthode map()" },
];

function App() {
  const [formIsVisible, setFormIsVisible] = useState(false);
  const [tasks, setTasks] = useState(tasksData);

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
        <TasksList tasks={tasks} onPlus={showFormHandler} onCheck={checkHandler} />
      </main>
    </div>
  );
}

export default App;
