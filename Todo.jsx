import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const Todo = ({ id, title, completed }) => {
  const [todos, setTodos] = useContext(TodoContext);
  const [updatedTitle, setUpdatedTitle] = useState("");

  const toggleComplete = (e) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === e.target.value
        ? { ...todo, completed: e.target.checked }
        : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const updateTodo = (id, updatedTitle) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: updatedTitle } : todo
    );
    setTodos(updatedTodos);
    setUpdatedTitle("");
  };

  return (
    <p className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        value={id}
        onChange={toggleComplete}
      />
      <label className={completed ? "completed" : ""}>{title}</label>
      <button onClick={() => deleteTodo(id)} className="btn-delete">
        Delete
      </button>
      <input
        type="text"
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
        placeholder="Update title"
      />
      <button onClick={() => updateTodo(id, updatedTitle)}>Edit</button>
    </p>
  );
};

export default Todo;
