import React from "react";

function Todo({ setTodos, todos, todo, text }) {
  const deleteHandler = () => {
    //we setup 'setTodos' to filter out our existing todos.
    //If the element id does not match the todo id, it will remove it
    setTodos(todos.filter((el) => el.id !== todo.id));
    console.log(todo);
  };
  return (
    <div className="todo">
      <ul className="todo-item">{text}</ul>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
