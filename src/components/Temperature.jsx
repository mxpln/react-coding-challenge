import React, { Component } from "react";

class Temperature extends Component {
  state = {
    temperature: 0,
  };
  render() {
    return (
      <div>
        <h2>Temperature</h2>
        <input type="number" name="temperature"></input>
      </div>
    );
  }
}

export default Temperature;
