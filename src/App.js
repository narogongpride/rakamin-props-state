import "./App.css";
import React from "react";

import Greetings from "./Greetings";
import TodoList from "./TodoList";

class App extends React.Component {
  render() {
    const person = { name: "Ananta", age: 20 };
    return (
      <div>
        <Greetings person={person} value={14}/>
        <TodoList />
      </div>
    );
  }
}

export default App;
