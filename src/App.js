import React, { Component } from "react";
import Temperature from "../src/components/Temperature";
import CustomizeImage from "../src/components/CustomizeImage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../src/views//Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/temperature">Temperature</Link>
            </li>
            <li>
              <Link to="/customize-image">Customize image</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/" component={Home} />
        <Route exact path="/temperature" component={Temperature} />
        <Route exact path="/customize-image" component={CustomizeImage} />
      </div>
    );
  }
}

export default App;
