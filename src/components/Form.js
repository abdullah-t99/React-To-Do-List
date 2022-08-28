import React from "react";
// import App from "../App";
// import ToDoList from "./ToDoList";

//Begininning to make the component. Can also declare a function using the arrow function like below:
// const Form = () => {

// }
function Form({ setTodos, todos, inputText, setInputText, setStatus }) {
  const inputTextHandler = (e) => {
    //e stands for event. event tells you information of what just happened
    console.log(e.target.value);
    // We are passing the information to this prop which is set up on App.js
    setInputText(e.target.value);
  };

  const submitToDoHandler = (e) => {
    // what this does is that it wont keep refreshing the page. Prevents the default behaviour
    e.preventDefault();
    // creating an object that outputs the input text from the state
    setTodos([
      ...todos, // if there are already todo's, just past it
      { text: inputText, completed: false, id: Math.random() * 1000 }, //This creates a new todo
    ]);
    setInputText(""); // this changes the state for input text to be "" after submitting
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      {/* every time the value changes it runs inputTextHandler above  */}
      <input
        value={inputText} // this makes the form be inline with what the state is
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitToDoHandler} className="todo-button" type="submit">
        <i className="far fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="allTasks">All Tasks</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
