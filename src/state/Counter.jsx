import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 999
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  reset = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default function() {
  return <Counter />;
}
