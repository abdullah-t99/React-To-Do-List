import React from "react";

function Todo(todo) {
  const deleteHandler = () => {};
  return (
    <div className="todo">
      <ul className="todo-item">{todo.text}</ul>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
