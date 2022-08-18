import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  //setInputText is a function that allows you to change inputText. inputText is the actual value
  const [inputText, setInputText] = useState("");
  // setTodos intialises the list and todos is the list of array
  const [todos, setTodos] = useState([]); // This is an array as it will contain multiple lists (objects)
  return (
    <div className="App">
      <header>
        <h1>Abdullah's To Do List </h1>
      </header>
      {/* This prop is used to save the value that is entered (see Form.js) */}
      {/* setInputText then updates inputText and wherether its declared, will out what setInputText is  */}
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
      />
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
