import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <div>
        <h1> todo Component from todo.js</h1>
        <h2> { this.props.sendingdata}</h2>
      </div>
    );
  }
}
export default Todo;
