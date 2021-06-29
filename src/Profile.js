import "./css/Profile.css";
import axios from "axios";

import React, { Component } from "react";
import { Spinner, Card, OverlayTrigger, Tooltip } from "react-bootstrap";

class Profile extends Component {
  state = {
    userCourses: [],
    userFav: [],
    err: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.user) {
      if (prevState.userCourses === this.state.userCourses) {
        const serverUrl = process.env.REACT_APP_SERVER;
        const url = `${serverUrl}/getAllUserData?email=${this.props.user.email}`;
        axios
          .get(url)
          .then((response) => {
            this.setState({
              userCourses: response.data[0].courses,
              userFav: response.data[0].favs,
            });
            console.log("here");
          })
          .catch((err) => {
            this.setState({ err: err.message });
          });
      }
    }
  }

  render() {
    return (
      <div style={{ minHeight: 500 }}>
        <div className="profile-card-container">
          <h3 className="mb-3">My Courses</h3>
          {this.state.userCourses ? (
            this.state.userCourses.map((course, i) => {
              return (
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id="button-tooltip-2">
                      Click the image to Start Learn
                    </Tooltip>
                  }
                >
                  <div className="card mb-4 profile-course-card" key={i}>
                    <div className="row no-gutters">
                      <div className="col-auto">
                        <img
                          src={course.img}
                          className="img-fluid profile-card-img"
                          alt="img"
                          onClick={() =>
                            window.open(
                              "https://www.udacity.com/courses/front-end-web-developer-nanodegree--nd0011",
                              "_blank",
                              "noopener,noreferrer"
                            )
                          }
                        />
                      </div>
                      <div className="col">
                        <div className="card-block px-2">
                          <h4 className="card-title profile-card-title">
                            {course.title}
                          </h4>
                          <p className="card-text">{course.subtitle}</p>
                          <a
                            href="#"
                            className="btn btn-danger profile-card-button"
                          >
                            Unenroll
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </OverlayTrigger>
              );
            })
          ) : (
            <Spinner animation="border" variant="success" />
          )}
          <h3 className="mb-3 mt-5">My Fav</h3>
          <div className="profile-fav-container">
            {this.state.userCourses ? (
              this.state.userFav.map((course, i) => {
                return (
                  <Card
                    style={{ width: "18rem", minHeight: 320 }}
                    bg="success"
                    text="light"
                  >
                    <Card.Img
                      variant="top"
                      src={course.img}
                      style={{ height: 200 }}
                    />
                    <Card.Body>
                      <Card.Title>{course.title}</Card.Title>
                    </Card.Body>
                  </Card>
                );
              })
            ) : (
              <Spinner animation="border" variant="success" />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
