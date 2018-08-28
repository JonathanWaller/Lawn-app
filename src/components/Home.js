import React, { Component } from "react";
// import axios from "axios";
import Current from "./Current/Current";
import Future from "./Future/Future";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      weather: [],
      futureWeather: []
    };
  }

  render() {
    console.log("current: ", this.state.weather);
    console.log("future: ", this.state.futureWeather);
    return (
      <div>
        {/* <div>Today's Weather:</div>
        <div>Future Weather:</div> */}

        <Current />
        <Future />
      </div>
    );
  }
}

export default Home;
