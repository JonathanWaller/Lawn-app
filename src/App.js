import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./store";
// import Current from "./components/Current/Current";
// import axios from "axios";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          {/* <div>test from appjs</div> */}
          <Home />
          {/* <Current /> */}
        </div>
      </Provider>
    );
  }
}

export default App;
