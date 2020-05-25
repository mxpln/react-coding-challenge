import React, { Component } from "react";
import Temperature from "../src/components/Temperature";
import CustomizeImage from "../src/components/CustomizeImage";
import { BrowserRouter as Route } from "react-router-dom";
import Home from "../src/views//Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Home} />
        <Route path="/temperature" component={Temperature} />
        <Route path="/customize-image" component={CustomizeImage} />
      </div>
    );
  }
}

export default App;
