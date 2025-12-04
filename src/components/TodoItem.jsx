export default function TodoItem({ id, text, onDelete }) {
  return (
    <div className="todo-item">
      <span>{text}</span>
      <button className="delete-btn" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
