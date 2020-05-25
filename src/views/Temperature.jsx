import React, { Component } from "react";

class Temperature extends Component {
  state = {
    temperature: null,
  };
  handleValue = (event) => {
    this.setState({
      temperature: event.target.value,
    });
  };
  render() {
    let temperature = this.state.temperature;
    let info;
    let color;
    if (temperature <= 10) {
      info = "It's cold ❄️";
      color = "blue";
    } else if (temperature > 10 && temperature <= 30) {
      info = "It's nice 🌼";
      color = "black";
    } else if (temperature > 10) {
      info = "It's warm ☀️";
      color = "red";
    }
    return (
      <div>
        <h2>Temperature</h2>
        <input
          type="number"
          name="temperature"
          value={this.state.temperature}
          onChange={this.handleValue}
        ></input>

        {this.state.temperature && <p style={{ color: color }}> {info} </p>}
      </div>
    );
  }
}

export default Temperature;
