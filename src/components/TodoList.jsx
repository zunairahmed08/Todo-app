import TodoItem from "./TodoItem";

export default function TodoList({ todos, onDelete }) {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p>No todos added yet.</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}
