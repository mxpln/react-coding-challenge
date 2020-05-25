import React, { Component } from "react";
import Temperature from "../src/components/Temperature";
import CustomizeImage from "../src/components/CustomizeImage";
import NavBar from "../src/components/NavBar";
import { Route } from "react-router-dom";
import Home from "../src/views/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/temperature" component={Temperature} />
        <Route exact path="/customize-image" component={CustomizeImage} />
      </div>
    );
  }
}

export default App;
