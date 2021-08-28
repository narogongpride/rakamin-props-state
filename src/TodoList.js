import React from "react";
import moment from "moment";
import CreateTodoList from "./CreateTodoList";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <CreateTodoList />
        <br />
        <br />
        <p>{moment().format("YYYY MMM DD, HH:mm:ss")}</p>
      </div>
    );
  }
}

export default TodoList;
