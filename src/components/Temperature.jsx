import React, { Component } from "react";

class Temperature extends Component {
  state = {
    temperature: 0,
  };
  handleValue = (event) => {
    this.setState({
      temperature: event.target.value,
    });
  };
  render() {
    let temperature = this.state.temperature;
    let info;
    if (temperature <= 10) {
      info = "It's cold ❄️";
    } else if (temperature > 10 && temperature <= 30) {
      info = "It's nice 🌼";
    } else if (temperature > 10) {
      info = "It's warm ☀️";
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
        <p>
          At {this.state.temperature} it's {info} !
        </p>
      </div>
    );
  }
}

export default Temperature;
