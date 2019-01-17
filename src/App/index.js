import React, { Component } from "react";
import { Router } from "@reach/router";
import Header from "../components/Header";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Development from "../components/Development/Development";
import Skills from "../components/Skills/Skills";
import "./App.css";

class App extends Component {
  render() {
    const { about, home } = this.props;
    return (
      <>
        <Header />
        <Router>
          <Home path="/" home={home} />
          <About path="/About" about={about} />
          <Development path="/Development" />
          <Skills path="/Skills" />
        </Router>
      </>
    );
  }
}

export default App;
