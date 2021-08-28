import React from "react";
import { TodoListContext } from "./App";

import TodoListWithSomething from "./TodoListWithSomething";

class CreateTodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  static contextType = TodoListContext;

  render() {
    return (
      <div>
        <label>Input new todolist here</label>
        <input
          type="text"
          onChange={(event) => this.setState({ input: event.target.value })}
        ></input>
        <button onClick={() => this.context.onSubmit(this.state.input)}>
          Submit
        </button>
        <TodoListWithSomething />
      </div>
    );
  }
}

export default CreateTodoList;
