import React, { Component } from "react";
import { InputGroup, FormControl, Form, Card, Spinner } from "react-bootstrap";
import "./css/Courses.css";
import { BsSearch } from "react-icons/bs";

import axios from "axios";

class Courses extends Component {
  state = {
    allCourses: [],
    err: "",
    // for select 3 filterations:
    filterdCourses: [],
    levelFilterdCourses: [],
    durationFilterdCourses: [],
    skillsFilterdCourses: [],
    levelValue: "all",
    durationValue: "all",
    skillsValue: "all",
    // end of select 3 filterations
  };

  componentDidMount = () => {
    const serverUrl = process.env.REACT_APP_SERVER;
    const url = `${serverUrl}/allcourses`;

    axios
      .get(url)
      .then((response) => {
        this.setState({
          allCourses: response.data,
          filterdCourses: response.data,
        });
      })
      .catch((err) => {
        this.setState({ err: "There is and error" });
      });
  };

  // selectFilter = (e) => {
  //   if (e.target.name === "level") {
  //     if (e.target.value !== "all") {
  //       if (
  //         this.state.filterdCourses.length < 33 &&
  //         (e.target.name === "duration" || e.target.name === "skills")
  //       ) {
  //         let newdata = this.state.filterdCourses.filter((course) => {
  //           return e.target.value === course.level;
  //         });
  //         this.setState({ filterdCourses: newdata });
  //       } else {
  //         let newdata = this.state.allCourses.filter((course) => {
  //           return e.target.value === course.level;
  //         });
  //         this.setState({ filterdCourses: newdata });
  //       }
  //     } else {
  //       this.setState({ filterdCourses: this.state.allCourses });
  //     }

  //     ////////////////////////// duartion ////////////////////
  //   } else if (e.target.name === "duration") {
  //     if (e.target.value !== "all") {
  //       if (
  //         this.state.filterdCourses.length < 33 &&
  //         (e.target.name === "level" || e.target.name === "skills")
  //       ) {
  //         let newdata = this.state.filterdCourses.filter((course) => {
  //           let number = parseInt(course.duration);
  //           if (e.target.value === "above") {
  //             return number >= 4;
  //           } else {
  //             return number < 4;
  //           }
  //         });
  //         this.setState({ filterdCourses: newdata });
  //       } else {
  //         let newdata = this.state.allCourses.filter((course) => {
  //           let number = parseInt(course.duration);
  //           if (e.target.value === "above") {
  //             return number >= 4;
  //           } else {
  //             return number < 4;
  //           }
  //         });
  //         this.setState({ filterdCourses: newdata });
  //       }
  //     } else {
  //       this.setState({ filterdCourses: this.state.allCourses });
  //     }

  //     ////////////////////////// skills ////////////////////
  //   } else if (e.target.name === "skills") {
  //     if (e.target.value !== "all") {
  //       const Regex = new RegExp(e.target.value, "g");
  //       let newdata = this.state.allCourses.filter((course) => {
  //         if (course.skills) {
  //           let newskills = course.skills.map((skill) => {
  //             return skill.toLowerCase();
  //           });
  //           return Regex.test(newskills);
  //         }
  //       });
  //       this.setState({ filterdCourses: newdata });
  //     } else {
  //       this.setState({ filterdCourses: this.state.allCourses });
  //     }
  //   }
  // };

  levelFilter = (e) => {
    this.setState({ levelValue: e.target.value });
    let levelValue = e.target.value;

    if (
      levelValue !== "all" &&
      this.state.durationValue === "all" &&
      this.state.skillsValue === "all"
    ) {
      let newdata = this.state.allCourses.filter((course) => {
        return e.target.value === course.level;
      });
      this.setState({ filterdCourses: newdata });
      this.setState({ levelFilterdCourses: newdata });
    } else if (
      levelValue !== "all" &&
      this.state.skillsValue === "all" &&
      this.state.durationValue !== "all"
    ) {
      let newdata = this.state.durationFilterdCourses.filter((course) => {
        return e.target.value === course.level;
      });
      this.setState({ filterdCourses: newdata });
      this.setState({ levelFilterdCourses: newdata });
    } else if (
      levelValue !== "all" &&
      this.state.skillsValue !== "all" &&
      this.state.durationValue === "all"
    ) {
      let newdata = this.state.skillsFilterdCourses.filter((course) => {
        return e.target.value === course.level;
      });
      this.setState({ filterdCourses: newdata });
      this.setState({ levelFilterdCourses: newdata });
    } else {
      if (this.state.durationValue !== "all") {
        this.setState({ filterdCourses: this.state.durationFilterdCourses });
      } else if (this.state.skillsValue !== "all") {
        this.setState({ filterdCourses: this.state.skillsFilterdCourses });
      } else {
        this.setState({ filterdCourses: this.state.allCourses });
      }
    }
  };

  durationFilter = (e) => {
    this.setState({ durationValue: e.target.value });
    let durationValue = e.target.value;

    if (
      durationValue !== "all" &&
      this.state.levelValue === "all" &&
      this.state.skillsValue === "all"
    ) {
      let newdata = this.state.allCourses.filter((course) => {
        let number = parseInt(course.duration);
        if (e.target.value === "above") {
          return number >= 4;
        } else {
          return number < 4;
        }
      });
      this.setState({ filterdCourses: newdata });
      this.setState({ durationFilterdCourses: newdata });
    } else if (
      durationValue !== "all" &&
      this.state.skillsValue === "all" &&
      this.state.levelValue !== "all"
    ) {
      let newdata = this.state.levelFilterdCourses.filter((course) => {
        let number = parseInt(course.duration);
        if (e.target.value === "above") {
          return number >= 4;
        } else {
          return number < 4;
        }
      });
      this.setState({ filterdCourses: newdata });
      this.setState({ durationFilterdCourses: newdata });
    } else if (
      durationValue !== "all" &&
      this.state.skillsValue !== "all" &&
      this.state.levelValue === "all"
    ) {
      let newdata = this.state.skillsFilterdCourses.filter((course) => {
        let number = parseInt(course.duration);
        if (e.target.value === "above") {
          return number >= 4;
        } else {
          return number < 4;
        }
      });
      this.setState({ filterdCourses: newdata });
      this.setState({ durationFilterdCourses: newdata });
    } else {
      if (this.state.levelValue !== "all") {
        this.setState({ filterdCourses: this.state.levelFilterdCourses });
      } else if (this.state.skillsValue !== "all") {
        this.setState({ filterdCourses: this.state.skillsFilterdCourses });
      } else {
        this.setState({ filterdCourses: this.state.allCourses });
      }
    }
  };

  skillsFilter = (e) => {
    this.setState({ skillsValue: e.target.value });
    let skillsValue = e.target.value;

    if (
      skillsValue !== "all" &&
      this.state.levelValue === "all" &&
      this.state.durationValue === "all"
    ) {
      const Regex = new RegExp(e.target.value, "g");
      let newdata = this.state.allCourses.filter((course) => {
        if (course.skills) {
          let newskills = course.skills.map((skill) => {
            return skill.toLowerCase();
          });
          return Regex.test(newskills);
        }
      });
      this.setState({ filterdCourses: newdata });
      this.setState({ skillsFilterdCourses: newdata });
    } else if (
      skillsValue !== "all" &&
      this.state.durationValue === "all" &&
      this.state.levelValue !== "all"
    ) {
      const Regex = new RegExp(e.target.value, "g");
      let newdata = this.state.levelFilterdCourses.filter((course) => {
        if (course.skills) {
          let newskills = course.skills.map((skill) => {
            return skill.toLowerCase();
          });
          return Regex.test(newskills);
        }
      });
      this.setState({ filterdCourses: newdata });
      this.setState({ skillsFilterdCourses: newdata });
    } else if (
      skillsValue !== "all" &&
      this.state.durationValue !== "all" &&
      this.state.levelValue === "all"
    ) {
      const Regex = new RegExp(e.target.value, "g");
      let newdata = this.state.durationFilterdCourses.filter((course) => {
        if (course.skills) {
          let newskills = course.skills.map((skill) => {
            return skill.toLowerCase();
          });
          return Regex.test(newskills);
        }
      });
      this.setState({ filterdCourses: newdata });
      this.setState({ skillsFilterdCourses: newdata });
    } else {
      if (this.state.levelValue !== "all") {
        this.setState({ filterdCourses: this.state.levelFilterdCourses });
      } else if (this.state.durationValue !== "all") {
        this.setState({ filterdCourses: this.state.durationFilterdCourses });
      } else {
        this.setState({ filterdCourses: this.state.allCourses });
      }
    }
  };

  render() {
    return (
      <div>
        <div className="search-container">
          <Form.Label htmlFor="basic-url">Search Courses</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <BsSearch />
            </InputGroup.Text>
            <FormControl
              placeholder="What do you want to learn?"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <InputGroup.Text id="basic-addon2" className="btn btn-success">
              Search
            </InputGroup.Text>
          </InputGroup>
          <Form className="select-container">
            {" "}
            {/*onChange={this.selectFilter} */}
            <Form.Group controlId="exampleForm.SelectCustom1">
              <Form.Label>Level</Form.Label>
              <Form.Control
                as="select"
                name="level"
                onChange={this.levelFilter}
              >
                <option value="all">All</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustom2">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                as="select"
                name="duration"
                onChange={this.durationFilter}
              >
                <option value="all">All</option>
                <option value="above"> {">= month"} </option>
                <option value="less">{"< month"}</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustom3">
              <Form.Label>Skills</Form.Label>
              <Form.Control
                as="select"
                name="skills"
                onChange={this.skillsFilter}
              >
                <option value="all">All</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="jquery">jQuery</option>
                <option value="ruby">Ruby</option>
                <option value="heroku">Heroku</option>
                <option value="linux">Linux</option>
                <option value="networking">Networking</option>
                <option value="python">HTTP</option>
              </Form.Control>
            </Form.Group>
          </Form>
          <p>Courses ({this.state.filterdCourses.length} results)</p>
        </div>
        <div className="course-cards">
          {this.state.filterdCourses.length === 0 ? (
            <>
              <Spinner animation="border" variant="success" />
              <p style={{ color: "green" }}>Loading...</p>
            </>
          ) : (
            this.state.filterdCourses.map((course, i) => {
              return (
                <Card className="course-card" key={i}>
                  <Card.Img
                    variant="top"
                    src={course.image}
                    style={{ height: 160 }}
                  />
                  <Card.Body>
                    <Card.Title className="pb-2">{course.title}</Card.Title>
                    <Card.Text>{course.subtitle}</Card.Text>
                    <Card.Text>{course.level}</Card.Text>
                    <Card.Text>{course.duration}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })
          )}
        </div>
      </div>
    );
  }
}

export default Courses;
