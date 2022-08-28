import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  //setInputText is a function that allows you to change inputText. inputText is the actual value
  const [inputText, setInputText] = useState("");
  // setTodos intialises the list and todos is the list of array
  const [todos, setTodos] = useState([]); // This is an array as it will contain multiple lists (objects)
  const [status, setStatus] = useState("allTasks"); //This is changing the todos to completed, uncompleted etc
  const [filteredTodos, setFilteredTodos] = useState([]); //This is filtering the todos based on their status

  // run once
  useEffect(() => {
    getLocalTodos();
  }, []);

  //helps run a function everytime a piece of state changes^^ if any status changes and it is specified, it will run this
  useEffect(() => {
    filterHandler(); //This runs the filterHandler every time the todos + status state changes which then affects the state of filterHandler
    saveLocalTodos();
  }, [todos, status]);

  //Here we are switching the status where we are filtering based on the status
  const filterHandler = () => {
    switch (status) {
      // if the completed status is true then include it under the completed status
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      //If the completed is false, then place them under uncompleted
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  //Saving it to the Local Drive
  const saveLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Abdullah's To Do List</h1>
      </header>
      {/* This prop is used to save the value that is entered (see Form.js) */}
      {/* setInputText then updates inputText and wherether its declared, will out what setInputText is  */}
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
        setStatus={setStatus}
      />
      <ToDoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
