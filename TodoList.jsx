import { useContext, useState } from "react";
import Todo from "./Todo";
import { TodoContext } from "../context/TodoContext";

const TodoList = () => {
  const [todos] = useContext(TodoContext);
  const [filter, setFilter] = useState("all"); // "all", "completed", "incomplete"

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true; // Show all tasks
  });

  return (
    <div>
      <div className="filter-buttons">
        {/* <button
          onClick={() => setFilter("all")}
          className={filter === "all" ? "active-filter" : ""}
        >
          All
        </button> */}
        <button
          onClick={() => setFilter("completed")}
          className={filter === "completed" ? "active-filter" : ""}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("incomplete")}
          className={filter === "incomplete" ? "active-filter" : ""}
        >
          Incomplete
        </button>
      </div>
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))
      ) : (
        <h4>No tasks found</h4>
      )}
    </div>
  );
};

export default TodoList;
