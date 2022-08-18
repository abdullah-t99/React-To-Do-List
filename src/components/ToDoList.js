import React from "react";
import Todo from "./Todo.js";

function ToDoList(props) {
  return (
    <div className="todo-container">
      <ul className="todo-list"></ul>
      {/* For each todo we have from the state, going to render out the Todo component  */}
      {/* for every todo we have, we will render the Todo component  */}
      {props.todos.map((todo) => (
        <Todo text={todo.text} key={todo.id} />
      ))}
      <Todo />
    </div>
  );
}

export default ToDoList;
