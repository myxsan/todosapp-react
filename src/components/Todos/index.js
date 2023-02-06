import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

function Todos() {
  const [todos, setTodos] = useState([]);
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  return (
    <div>
      <Form addTodo={addTodo} todos={todos} setTodos={setTodos} />
      <List list={todos} setTodos={setTodos} />
    </div>
  );
}

export default Todos;
