import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import TodoList from "./TodoList";
import Form from "./Form";

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      const editTodo = todo.find((clikedItem) => clikedItem.id === editId);

      setTodo(
        todo.map((item) =>
          item.id === editTodo.id
            ? (item = { id: item.id, text: input, completed: item.completed })
            : item
        )
      );

      setEditId(0);
      setInput("");
      return;
    }

    const addTask = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      completed: false,
    };

    if (!input) {
      return alert("Please Enter Todo");
    }
    setTodo([...todo, addTask]);
    setInput("");
  };

  const handleDelete = (id) => {
    setTodo([...todo].filter((todo) => todo.id !== id));
  };
  const toogleComplete = (id) => {
    setTodo(
      todo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const editTodo = (id) => {
    const editedTodo = todo.find((todo) => todo.id === id);
    setInput(editedTodo.text);
    setEditId(id);
  };
  return (
    <div className="app">
      <div className="wrapper">
        <h1>Todo List</h1>
        <Form
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
          editId={editId}
          setEditId={setEditId}
        />

        <TodoList
          todo={todo}
          setTodo={setTodo}
          handleDelete={handleDelete}
          toogleComplete={toogleComplete}
          setEditId={setEditId}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
}

export default App;
