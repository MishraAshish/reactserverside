import React, { Component } from "react";
//import logo from "./logo.svg";
import BodyHtml from "../components/body";
import FooterHtml from "../components/footer";
import HeaderHtml from "../components/header";
import "./App.css";
//import "./bootstrap.min.css";
//import "./CSS/lp/gdpr.css";

class App extends Component {
  render() {
    return (
      <div className="App">
          <HeaderHtml/>
          <BodyHtml/>
          <FooterHtml/>         
      </div>
    );
  }
}
export default App;