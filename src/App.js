import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
// import Current from "./components/Current/Current";
// import axios from "axios";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div>test from appjs</div> */}
        <Home />
        {/* <Current /> */}
      </div>
    );
  }
}

export default App;
