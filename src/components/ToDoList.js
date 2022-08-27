import React from "react";
import Todo from "./Todo.js";

function ToDoList({ todos, setTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list"></ul>
      {/* For each todo we have from the state, going to render out the Todo component  */}
      {/* for every todo we have, we will render the Todo component  */}
      {todos.map((todo) => (
        <Todo
          setTodos={setTodos}
          todos={todos}
          text={todo.text}
          todo={todo}
          key={todo.id}
        /> //.text and .id is based on what the state is. Check this in inspect mode. These were defined in the submitToDoHandler function in Form.js
      ))}
      <Todo />
    </div>
  );
}

export default ToDoList;
