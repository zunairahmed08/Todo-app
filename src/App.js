import { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const text = prompt("Enter Todo:");
    if (text && text.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text }]);
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Todo List App</h1>
      <button className="add-btn" onClick={addTodo}>Add Todo</button>

      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}
