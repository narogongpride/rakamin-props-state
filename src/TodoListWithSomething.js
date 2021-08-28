import React from "react";
import { TodoListContext } from "./App";

class TodoListWithSomething extends React.Component {
  render() {
    return (
      <TodoListContext.Consumer>
        {(context) => (
          <div>{context.todoList.map((tl) => tl + " | ")}</div>
        )}
      </TodoListContext.Consumer>
    );
  }
}

export default TodoListWithSomething;
