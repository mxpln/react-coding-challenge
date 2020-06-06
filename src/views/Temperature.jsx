import React, { Component } from "react";

class Temperature extends Component {
  state = {
    temperature: null,
  };
  handleChange = (event) => {
    this.setState({
      temperature: event.target.value,
    });
  };
  render() {
    let temperature = this.state.temperature;
    let result, color;
    if (temperature <= 10) {
      result = "It's cold ❄️";
      color = "blue";
    } else if (temperature > 10 && temperature <= 30) {
      result = "It's nice 🌼";
      color = "black";
    } else if (temperature > 10) {
      result = "It's warm ☀️";
      color = "red";
    }
    return (
      <div>
        <h2>Temperature</h2>
        <input
          type="number"
          name="temperature"
          min="-50"
          max="50"
          value={this.state.temperature}
          onChange={this.handleChange}
        ></input>

        {this.state.temperature && <p style={{ color: color }}> {result} </p>}
      </div>
    );
  }
}

export default Temperature;
