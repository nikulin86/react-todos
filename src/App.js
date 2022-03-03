
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="container">
      <div className="todo-app">
        <h1 className="todo-title">Список Задач</h1>
        <TodoList />
      </div>
    </div>

  );
}

export default App;
