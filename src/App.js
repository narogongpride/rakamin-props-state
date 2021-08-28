import "./App.css";
import React from "react";

import Greetings from "./Greetings";
import TodoList from "./TodoList";

export const TodoListContext = React.createContext([]);
export const ThemeContext = React.createContext("light");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    };
  }

  onSubmit(todo) {
    const currentTodoList = this.state.todoList;
    currentTodoList.push(todo);
    this.setState({ todoList: currentTodoList });
  }

  render() {
    const person = { name: "Ananta", age: 20 };
    return (
      <ThemeContext.Provider value={"light"}>
        <TodoListContext.Provider
          value={{
            todoList: this.state.todoList,
            onSubmit: (todo) => this.onSubmit(todo),
          }}
        >
          <div>
            <Greetings person={person} value={14} />
            <TodoList />
          </div>
        </TodoListContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
