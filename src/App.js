import React, { Component } from "react";
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";
import About from "./About";
import Courses from "./Courses";
import Profile from "./Profile";
import Blog from "./Blog";

class App extends Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;
    return (
      <div>
        <Router>
          <Header isAuthenticated={isAuthenticated} user={user} />
          <Switch>
            <Route path="/" exact>
              <Home user={user} />
            </Route>

            <Route path="/courses">
              <Courses user={user} isAuth={isAuthenticated} />
            </Route>

            <Route path="/profile">
              <Profile user={user} />
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

export default withAuth0(App);
