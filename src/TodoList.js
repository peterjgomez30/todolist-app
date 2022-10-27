import React from "react";
import Button from "react-bootstrap/Button";

const TodoList = ({ todo, handleDelete, toogleComplete, editTodo }) => {
  return (
    <div className="todo-container">
      {todo.map((todo) => (
        <div className="list-items" key={todo.id}>
          <input
            type="checkbox"
            onChange={() => toogleComplete(todo.id)}
            checked={todo.completed}
          />
          <p style={todo.completed ? { textDecoration: "line-through" } : null}>
            {todo.text}
          </p>
          <div>
            <Button
              variant="primary"
              type="submit"
              onClick={() => editTodo(todo.id)}
            >
              Edit
            </Button>

            <Button
              variant="danger"
              type="submit"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
