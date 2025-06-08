import React, { Component } from "react";
import "./App.css";
import Todo from "./todo";
class App extends Component {
  state= {
    myString: "Hello..",
    myString1: "React",
  };
   
  handleChange=()=>{this.setState({
    myString1:"REACT IS CHANGED"
  })}

  render() {
    return (
      <div className="App">
        <h1>{this.state.myString}</h1>
        <button onClick={this.handleChange}>Change Text </button>
        <h1>{this.state.myString1}</h1>
        <h1>{this.state.myString1}</h1>
        <h1>{this.state.myString}</h1>

        <Todo sendingdata={"This read from props"} />
        
      </div>
    );
  }
}
export default App;
