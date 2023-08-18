import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Component } from "react";

import "./App.css";
import "./component/Style.css";

import Navbar from "./component/Navbar";
import About from "./component/About";
import Home from "./component/Home";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </Router>
      </>
    );
  }
}
