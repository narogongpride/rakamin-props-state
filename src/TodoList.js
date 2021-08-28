import React from "react";
import moment from "moment";
import CreateTodoList from "./CreateTodoList";

export const TodoListContext = React.createContext([]);

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: ["First Item"],
    };
  }

  onSubmit(todo) {
    const currentTodoList = this.state.todoList;
    currentTodoList.push(todo);
    this.setState({ todoList: currentTodoList });
  }

  render() {
    return (
      <TodoListContext.Provider
        value={{
          todoList: this.state.todoList,
          onSubmit: (todo) => this.onSubmit(todo),
        }}
      >
        <div>
          <h2>Todo List</h2>
          <CreateTodoList />
          <br />
          <br />
          <p>{moment().format("YYYY MMM DD, HH:mm:ss")}</p>
        </div>
      </TodoListContext.Provider>
    );
  }
}

export default TodoList;
