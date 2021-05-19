import React, { useState } from 'react'

import Header from './components/Header';
import TasksList from './components/Task/TasksList';
import TaskAddForm from './components/Task/TaskAddForm';

function App() {
  const [formIsVisible, setFormIsVisible] = useState(false);

  const showFormHandler = () => {
    setFormIsVisible(true);
  }
  const hideFormHandler = () => {
    setFormIsVisible(false);
  }
  return (
    <div className="App">
      { formIsVisible && <TaskAddForm onClose={hideFormHandler} />}
      <Header />
      <main>
        <TasksList onPlus={showFormHandler} />
      </main>
    </div>
  );
}

export default App;
