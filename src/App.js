import './App.css';
import Header from './components/Header';
import TasksList from './components/Task/TasksList';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <TasksList />
      </main>
    </div>
  );
}

export default App;
