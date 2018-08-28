import React, { Component } from "react";
import axios from "axios";

class Current extends Component {
  constructor() {
    super();
    this.state = {
      today: []
    };
  }

  componentDidMount() {
    axios.get("/api/weather").then(response => {
      // console.log("response from Current: ", response.data);
      this.setState({ today: response.data });
    });
  }

  render() {
    console.log("state from Current", this.state);
    console.log(this.state.today.main && this.state.today.main.temp);
    return (
      <div>
        <div>
          Today's Weather: {this.state.today.main && this.state.today.main.temp}
        </div>
      </div>
    );
  }
}

export default Current;
