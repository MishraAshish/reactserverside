import React, { Component } from "react";
//import logo from "./logo.svg";
import MyAppBody from "../components/body"
import "./App.css";
//import "./bootstrap.min.css";
//import "./CSS/lp/gdpr.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="App-header">
          <img className="App-logo" alt="logo" />
          <h2>Welcome to React in the Server</h2>
        </div>
        <p className="App-intro">Isn't this cool?</p> */}
        <MyAppBody/>            
      </div>
    );
  }
}
export default App;