import "./css/Profile.css";
import axios from "axios";

import React, { Component } from "react";
import {
  Spinner,
  Card,
  OverlayTrigger,
  Tooltip,
  Button,
} from "react-bootstrap";

import { IoHeartDislikeCircleOutline } from "react-icons/all";

class Profile extends Component {
  state = {
    userCourses: [],
    userFav: [],
    err: "",
    index: 0,
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

  unfav = (i) => {
    console.log(this.props.user);
    let editEnroll = { index: i, userEmail: this.props.user.email };

    axios
      .put(`${process.env.REACT_APP_SERVER}/decreaseReviewCount`, {
        title: this.state.userFav[i].title,
      })
      .then((response) => {});

    axios
      .delete(`${process.env.REACT_APP_SERVER}/deleteuserfav`, {
        params: editEnroll,
      })
      .then((response) => {
        this.setState({
          userFav: response.data,
        });
        window.location.reload();
      })
      .catch((err) => {
        this.setState({ err: err.message });
      });
  };

  Unenroll = (index) => {
    let editEnroll = { index: index, userEmail: this.props.user.email };

    axios
      .put(`${process.env.REACT_APP_SERVER}/decreaseEnrollCount`, {
        title: this.state.userCourses[index].title,
      })
      .then((response) => {
        console.log(response.data);
      });

    axios
      .delete(`${process.env.REACT_APP_SERVER}/deleteusercourse`, {
        params: editEnroll,
      })
      .then((response) => {
        this.setState({
          userCourses: response.data,
        });
        window.location.reload();
      })
      .catch((err) => {
        this.setState({ err: err.message });
      });
  };

  render() {
    return this.props.user ? (
      <div style={{ minHeight: 500 }}>
        <div>
          <div className="profile-header">
            <div className="container w-100 h-100">
              <div className="card profile-Card">
                <div className="container footer-card">
                  <div className="img-card">
                    <img
                      src={this.props.user.picture}
                      alt={this.props.user.name}
                    />
                  </div>
                  <h3 className="text-center pt-4">{this.props.user.name}</h3>
                  <p className="pb-5">
                    <strong>E-mail:</strong> {this.props.user.email}
                    <br></br>
                    <strong>Location:</strong> Amman, Jordan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h"></div>
        <div className="row row-cols-2 w-100 mb-5 pb-5">
          <div className="col-7 ms-auto mt-0">
            <div className="profile-card-container ">
              <h3 className="mb-3 mt-3">My Courses</h3>
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
                        <div className="row no-gutters ">
                          <div className="col-auto">
                            <img
                              src={course.img}
                              className="img-fluid profile-card-img"
                              alt="img"
                              onClick={() =>
                                window.open(
                                  "https://www.udacity.com/courses/all",
                                  "_blank",
                                  "noopener,noreferrer"
                                )
                              }
                            />
                          </div>
                          <div className="col pt-2 pb-2">
                            <div className="body-profile-cours">
                              <div className="col">
                                <div className="card-block px-2">
                                  <h4 className="card-title profile-card-title">
                                    {course.title}
                                  </h4>
                                  <p className="card-text">{course.subtitle}</p>
                                </div>
                              </div>
                              <div className="col h-100 w-100 profile-btn">
                                <Button
                                  onClick={() => {
                                    this.Unenroll(i);
                                  }}
                                  className="btn btn-danger profile-card-button"
                                >
                                  Unenroll
                                </Button>
                              </div>
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
            </div>
            {/* profile-card-container  */}
          </div>
          {/* col */}
          <div className="col-4 ms-auto mt-0">
            <h3 className="mb-3 mt-3">My Favorites</h3>
            <div className="profile-fav-container">
              {this.state.userCourses ? (
                this.state.userFav.map((course, i) => {
                  return (
                    <Card
                      style={{ width: "13.3rem", minHeight: 280 }}
                      bg="success"
                      text="light"
                    >
                      <Card.Img
                        variant="top"
                        src={course.img}
                        style={{ height: 150 }}
                      />
                      <Card.Body>
                        <Card.Title className="f-text">
                          {course.title}
                        </Card.Title>
                      </Card.Body>
                      <IoHeartDislikeCircleOutline
                        className="course-unfav"
                        onClick={() => this.unfav(i)}
                      />
                    </Card>
                  );
                })
              ) : (
                <Spinner animation="border" variant="success" />
              )}
            </div>
            {/*profile-fav-container  */}
          </div>
          {/* col */}
        </div>
        {/* row */}
      </div>
    ) : (
      <p className="nologin-message">Login to see your info....</p>
    );
  }
}

export default Profile;
