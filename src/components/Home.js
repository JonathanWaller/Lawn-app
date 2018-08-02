import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      weather: [],
      futureWeather: []
    };
  }

  componentDidMount() {
    axios.get("/api/weather").then(response => {
      //   console.log(response);
      this.setState({ weather: response.data });
    });
    axios.get("/api/future").then(response => {
      console.log(response);
      this.setState({ futureWeather: response.data });
    });
  }

  render() {
    console.log("current: ", this.state.weather);
    console.log("future: ", this.state.futureWeather);
    return <div>hi from home</div>;
  }
}

export default Home;
