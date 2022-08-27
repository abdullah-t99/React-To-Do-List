import React from "react";

function Todo({ setTodos, todos, todo, text }) {
  const deleteHandler = () => {
    //we setup 'setTodos' to filter out our existing todos.
    //If the element id does not match the todo id, it will remove it
    setTodos(todos.filter((el) => el.id !== todo.id));
    console.log(todo);
  };
  //We are going through every todo state and checking if the item id matches with the todo id
  //We are checking on whatever todo item we clicked
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            //we are changing the completed status to become the opposite ie True
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      {/* <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li> */}
      <ul className="todo-item">{text}</ul>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
