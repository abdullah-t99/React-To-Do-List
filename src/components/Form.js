import React from "react";

//Begininning to make the component. Can also declare a function using the arrow function like below:
// const Form = () => {

// }
function Form(props) {
  const inputTextHandler = (e) => {
    //e stands for event. event tells you information of what just happened
    console.log(e.target.value);
    props.setInputText(e.target.value);
  };
  return (
    <form>
      <input onChange={inputTextHandler} type="text" className="todo-input" />
      <button className="todo-button" type="submit">
        <i className="far fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="allTasks">All Tasks</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
