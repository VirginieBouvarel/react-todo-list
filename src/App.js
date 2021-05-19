import './App.css';
import Header from './components/Header';
import TasksList from './components/Task/TasksList';
import TaskAddForm from './components/Task/TaskAddForm';

function App() {
  return (
    <div className="App">
      <TaskAddForm />
      <Header />
      <main>
        <TasksList />
      </main>
    </div>
  );
}

export default App;
