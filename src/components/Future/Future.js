import React, { Component } from "react";
import axios from "axios";

class Future extends Component {
  constructor() {
    super();
    this.state = {
      future: []
    };
  }

  componentDidMount() {
    axios.get("/api/future").then(response => {
      console.log("response from future", response);
      this.setState({ future: response.data });
    });
  }

  render() {
    console.log("state from Future", this.state);
    return (
      <div>
        {/* <div>test from future</div> */}
        <div>Future Weather: </div>
      </div>
    );
  }
}

export default Future;
