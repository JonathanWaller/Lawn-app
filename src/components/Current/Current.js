import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentWeather } from "../../ducks/weatherReducer";
import axios from "axios";

class Current extends Component {
  constructor() {
    super();
    this.state = {
      today: []
    };
  }

  componentDidMount() {
    this.props.getCurrentWeather();
    axios.get("/api/weather").then(response => {
      // console.log("response from Current: ", response.data);
      this.setState({ today: response.data });
    });
  }

  render() {
    console.log("props: ", this.props);
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

// const mapStateToProps = ({ freelancerReducer }) => ({ ...freelancerReducer });
const mapStateToProps = ({ weatherReducer }) => ({ ...weatherReducer });

export default connect(
  mapStateToProps,
  { getCurrentWeather }
)(Current);

// export default connect(
//   mapStateToProps,
//   { getAllFreelancerInfo }
// )(FreelancersList);
