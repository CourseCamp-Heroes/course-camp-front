import React, { Component } from "react";
import "./css/Home.css";
import Blog from "./Blog";
import axios from "axios";
import {
  BsLaptop,
  BsFillBriefcaseFill,
  BsFillAlarmFill,
  BsAwardFill,
} from "react-icons/bs";
import {
  AiOutlineGoogle,
  SiUdacity,
  SiUdemy,
  FaMicrosoft,
  AiOutlineAmazon,
} from "react-icons/all";
import { Tab, Row, Nav, Col, Card } from "react-bootstrap";
import img1 from "./img/p1.jpg";
import img2 from "./img/p2.jpg";
import img3 from "./img/p3.jpg";

class Home extends Component {
  state = {
    allCourses: [],
  };

  componentDidMount() {
    const serverUrl = process.env.REACT_APP_SERVER;
    const url = `${serverUrl}/allcourses`;

    axios
      .get(url)
      .then((response) => {
        this.setState({
          allCourses: response.data,
        });
        console.log(this.state.allCourses);
      })
      .catch((err) => {
        this.setState({ err: "There is and error" });
      });
  }

  render() {
    return (
      <div>
        {/* start hero img */}
        {/*  <div className="hero-img">
          <Carousel className="w-100" fade>
            <Carousel.Item className="w-100 background1" interval={3000}>
              <div className="ovelay"></div> 
              <div className="container w-100 h-100">
                <div className="all-header">
                  <div className="header-img ">
                   <img src={img1} alt={img1} className='slideUp' /> 
                  </div>
                  <div className="header-text">
                    <h1>First slide label</h1>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className="background2" interval={3000}>
              <div className="ovelay"></div>
              <div className="container w-100 h-100">
                <div className="all-header">
                  <div className="header-text">
                    <h1>First slide label</h1>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </div>
                  <div className="header-img ">
                    <img src={img2} alt={img1} className="slideUp" />
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className="background3 " interval={3000}>
              <div className="ovelay"></div>
              <div className="container w-100 h-100">
                <div className="header-img3">
                  <img src={img3} alt={img3} className="slideUp" />
                </div>
              </div>
            </Carousel.Item>
          </Carousel> 
          */}
        <div className="hero-img">
          <div className="container h-100">
            <div className="all-header">
              <h1>CourseCamp</h1>
              <h4>Home of Online Courses</h4>
              <p>Aim for the future. Pursue your passion. Keep learning.</p>
            </div>
          </div>
        </div>
        {/* end hero img */}
        {/* start our service section  */}
        <section className="our-services">
          <div className="container">
            <div className="our-services-header pb-5 pt-2">
              <p>Take your first step into the web development world </p>
            </div>
            <div className="all-service pt-5 pb-5">
              <div className="row ">
                <div className="col d-flex justify-content-center flex-column align-items-center h-50">
                  <BsLaptop className="icons pb-2" />
                  <p>Take computer science courses</p>
                </div>
                <div className="col d-flex justify-content-center flex-column align-items-center h-50">
                  <BsFillBriefcaseFill className="icons pb-2" />

                  <p>Get real employable skills</p>
                </div>
                <div className="col d-flex justify-content-center flex-column align-items-center h-50">
                  <BsAwardFill className="icons pb-2" />
                  <p>Project-based, active learning</p>
                </div>
                <div className="col d-flex justify-content-center flex-column align-items-center h-50">
                  <BsFillAlarmFill className="icons pb-2" />
                  <p>Learn on your schedule</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end our service section  */}
        {/* ================= */}
        <div className="cards-section ">
          <div className="container w-100">
            <div className="our-services-header pb-5">
              <h1>Explore Top Courses</h1>
            </div>
            <div>
              <Tab.Container
                id="left-tabs-example"
                defaultActiveKey="first"
                className="w-100 pt-5 pb-5"
              >
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Most Popular </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Top Rated </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <div className="home-mostpoular-container">
                          {this.state.allCourses &&
                            this.state.allCourses
                              .sort((a, b) => {
                                if (a.enrollCount > b.enrollCount) {
                                  return -1;
                                }
                                if (a.enrollCount < b.enrollCount) {
                                  return 1;
                                }
                              })
                              .slice(0, 4)
                              .map((course) => {
                                return (
                                  <Card
                                    style={{ width: "12rem", height: 260 }}
                                    bg="success"
                                    text="light"
                                  >
                                    <Card.Img
                                      variant="top"
                                      src={course.image}
                                      style={{ height: 150 }}
                                    />
                                    <Card.Body>
                                      <Card.Title>{course.title}</Card.Title>
                                    </Card.Body>
                                  </Card>
                                );
                              })}
                          <a href="/courses" className="home-card-link">
                            See More
                          </a>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="home-mostpoular-container">
                          {this.state.allCourses &&
                            this.state.allCourses
                              .sort((a, b) => {
                                if (a.reviewCount > b.reviewCount) {
                                  return -1;
                                }
                                if (a.reviewCount < b.reviewCount) {
                                  return 1;
                                }
                              })
                              .slice(0, 4)
                              .map((course) => {
                                return (
                                  <Card
                                    style={{ width: "12rem", height: 260 }}
                                    bg="success"
                                    text="light"
                                  >
                                    <Card.Img
                                      variant="top"
                                      src={course.image}
                                      style={{ height: 150 }}
                                    />
                                    <Card.Body>
                                      <Card.Title>{course.title}</Card.Title>
                                    </Card.Body>
                                  </Card>
                                );
                              })}
                          <a href="/courses" className="home-card-link">
                            See More
                          </a>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </div>
        </div>
        {/* ================ */}
        {/* ===================== */}
        <div className="dis pt-5 pb-5 mt-5 mb-5">
          <div className="container">
            <h1 className="pb-4">Learn From the Best</h1>
            <p>
              Our online courses are built in partnership with technology
              leaders and are relevant to industry needs. Upon completing a
              Online course, you’ll rseceive a verified completion certificate
              recognized by industry leaders.
            </p>
            <div className="icons-udemy">
              <p>
                {" "}
                <SiUdemy />
              </p>
              <p>
                <SiUdacity />
              </p>
              <p>
                <AiOutlineGoogle />
              </p>
              <p>
                <FaMicrosoft />
              </p>
              <p>
                <AiOutlineAmazon />
              </p>
            </div>
          </div>
        </div>

        {/* ====================== */}
        {/* ========================= */}
        <div className="succes-story ">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="container">
                    <div className="img-card">
                      <img src={img1} alt="img" />
                    </div>
                    <h4>Ibrahim</h4>
                    <p className="pb-5">
                      "One of the things that attracted me to course camp was a
                      curriculum developed by people that worked for some of the
                      biggest and most successful tech companies.”
                    </p>
                  </div>
                  <div className="footer-card">
                    <p className="pt-2">NOW AT</p>
                    <p>Chain Reaction | Data Administrator</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="container">
                    <div className="img-card">
                      <img src={img2} alt="img" />
                    </div>
                    <h4>Osama</h4>
                    <p className="pb-5">
                      "The curriculum was aligned with what I wanted to study.
                      The assignments are specific to the industry I’m in. I was
                      able to develop new language translation tools for my
                      company."
                    </p>
                  </div>
                  <div className="footer-card">
                    <p className="pt-2">NOW AT</p>
                    <p>ESKADENIA | Front End Developer</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="container">
                    <div className="img-card">
                      <img src={img3} alt="img" />
                    </div>
                    <h4>Ahmad</h4>
                    <p className="pb-5">
                      "The curriculum was directly targeted toward applied
                      techniques with high profile projects – real datasets with
                      industry partners. It helped me achieve my career
                      transition goal."
                    </p>
                  </div>
                  <div className="footer-card">
                    <p className="pt-2">NOW AT</p>
                    <p>Zain | Back End Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ========================= */}
      </div>
    );
  }
}

export default Home;
