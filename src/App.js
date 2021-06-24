import React, { Component } from "react";
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./Home";
import About from "./About";
import Courses from "./Courses";
import Profile from "./Profile";
import Blog from "./Blog";

// import the components

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/courses">
              <Courses />
            </Route>

            <Route path="/profile">
              <Profile />
            </Route>

            <Route path="/blog">
              <Blog />
            </Route>

            <Route path="/about">
              <About />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
