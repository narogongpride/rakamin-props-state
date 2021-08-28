import React from "react";

import "./App.css";

class Greetings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }

  tick() {
    this.setState({value: this.state.value + 1})
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    alert("Will unmount")
    clearInterval(this.timer);
  }

  render() {
    const person = this.props.person;
    return (
      <div>
        <h2>Welcome {person.name}!</h2>
        <p>Nilai saat ini: {this.state.value}</p>
        <button onClick={() => this.tick()}>
          Tambah value
        </button>
      </div>
    );
  }
}

export default Greetings;
