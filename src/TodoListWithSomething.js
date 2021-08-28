import React from "react";
import { TodoListContext } from "./App";

class TodoListWithSomething extends React.Component {
  static contextType = TodoListContext;
  render() {
    return <div>{this.context.todoList.map((tl) => tl + " | ")}</div>;
  }
}

export default TodoListWithSomething;
