import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { value: 0 };
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <h2>Click abaixo para incrementar/decrementar o valor:</h2>
        <div>{this.state.value}</div>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }

  decrement() {
    this.setState({ value: this.state.value - 1 });
  }

  increment() {
    this.setState({ value: this.state.value + 1 });
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
