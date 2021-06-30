import React, { Component } from "react";
import "./css/About.css";
import Form from "react-bootstrap/Form";
import { Button, Card } from "react-bootstrap/";

import imgNEmh from "./img/Nemh.jpg";
import imgRawan from "./img/Rawan.jpg";
import imgNoor from "./img/Noor.jpg";
import imgIbrahim from "./img/Ibrahim.jpg";
import imgAhmad from "./img/Ahmad.jpg";
import imgNadeen from "./img/Nadeen.jpg";
import headerImg from "./img/hero.png";
import axios from "axios";
import { AiFillGithub, AiFillLinkedin } from "react-icons/all";

class About extends Component {
  // state = {
  //   data: [],
  // };

  // componentDidMount = () => {
  //   const server = process.env.REACT_APP_SERVER;
  //   const getcomment = `${server}/getComment`;

  //   axios
  //     .get(getcomment)
  //     .then((response) => {
  //       this.setState({ data: response.data });
  //     })
  //     .catch((err) => {});
  // };

  // addData = async (event) => {
  //   event.preventDefault();

  //   const commentObj = {
  //     userName: event.target.username.value,
  //     usercomment: event.target.comment.value,
  //   };

  //   const server = process.env.REACT_APP_SERVER;
  //   const postcomment = `${server}/addComment`;
  //   const commentData = await axios.post(postcomment, commentObj);
  //   this.setState({ data: commentData.data });
  // };

  render() {
    return (
      <div>
        <div className="about-header">
          <div className="about-header-img">
            {/*  <img src={headerImg}/> */}
           
              <div className="container h-100">
                <div className="row row-cols-2 h-100">
                  <div className="col about-header-text">
                    <h1>Start your journey</h1>
                    <Button
                      href="/Courses"
                      variant="success"
                      className="about-btn mt-4"
                    >
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </div>
            
          </div>
        </div>

        <div className="about-pic-header pt-5 pb-5">
          <div className="container">
            <h1>Our Genesis</h1>
            <p>
              We at <strong>Course Camp</strong> strive to make quality
              education affordable to the masses. Over the years, the cost of
              education has increased many folds to make it beyond the reach of
              many. You may be appalled to learn that even in most developed
              nations students resort to prostitution to pay up for their
              college tuition fees. We want to remove this financial barrier to
              a good education. The only barrier to education must be an
              individual’s thirst for knowledge.
            </p>
          </div>
        </div>

        <div>
          <hr id="hr" />
        </div>

        <div className="about-pic-header pt-5 pb-5">
          <div className="container">
            <h1>Our Mission</h1>
            <p>
              As a group of young volunteers who believe in fun and free
              education for all. Created this free courses webpage to support
              the people with passion to learn around the world.
            </p>
          </div>
        </div>

        <div>
          <hr id="hr" />
        </div>

        <div className="about-pic-header pt-5 mt-5">
          <div className="container">
            <h1>Our Team</h1>
          </div>
        </div>
        {/* ====================== */}
        <div className="about-pic">
          <div className="row pt-5 pb-5 row-cols-6 w-100">
            <div className="col">
              <div className="box">
                <div className="box-pic">
                  <div className="thumb">
                    <p>
                      {" "}
                      <a href="https://github.com/Ibrahim-Aldereni">
                        <AiFillGithub />
                      </a>{" "}
                      <a href="https://www.linkedin.com/in/ibrahim-aldereni/">
                        <AiFillLinkedin />
                      </a>
                    </p>
                  </div>
                  <img src={imgIbrahim} alt="ibrahem" />
                </div>
                <h4>Ibrahem Aldereni</h4>
                <p>B.Sc. in Electrical Engineering</p>
              </div>
            </div>
            <div className="col">
              <div className="box">
                <div className="box-pic">
                  <div className="thumb">
                    <p>
                      {" "}
                      <a href="https://github.com/RawanAlakhras">
                        <AiFillGithub />
                      </a>{" "}
                      <a href="https://www.linkedin.com/in/rawan-alakhras-8375481a3/">
                        <AiFillLinkedin />
                      </a>
                    </p>
                  </div>
                  <img src={imgRawan} alt="rawan" />
                </div>
                <h4>Rawan Alakhras</h4>
                <p>B.Sc. in Software Engineering</p>
              </div>
            </div>
            <div className="col">
              <div className="box">
                <div className="box-pic">
                  <div className="thumb">
                    <p>
                      {" "}
                      <a href="https://github.com/AhmadShalein">
                        <AiFillGithub />
                      </a>{" "}
                      <a href="https://www.linkedin.com/in/ahmad-shalein/">
                        <AiFillLinkedin />
                      </a>
                    </p>
                  </div>
                  <img src={imgAhmad} alt="ahmad" />
                </div>
                <h4>Ahamd Shalein</h4>
                <p>B.Sc. in Electrical Engineering</p>
              </div>
            </div>

            <div className="col">
              <div className="box">
                <div className="box-pic">
                  <div className="thumb">
                    <p>
                      {" "}
                      <a href="https://github.com/NoorAzar11">
                        <AiFillGithub />
                      </a>{" "}
                      <a href="https://www.linkedin.com/in/noor-azar/">
                        <AiFillLinkedin />
                      </a>
                    </p>
                  </div>
                  <img src={imgNoor} alt="noor" />
                </div>
                <h4>Noor Azar</h4>
                <p>B.Sc. in Computer Information Systems</p>
              </div>
            </div>
            <div className="col">
              <div className="box">
                <div className="box-pic">
                  <div className="thumb">
                    <p>
                      {" "}
                      <a href="https://github.com/Nadeen-Shuweihat">
                        <AiFillGithub />
                      </a>{" "}
                      <a href="https://www.linkedin.com/in/nadeen-shuweihat-a07242163/">
                        <AiFillLinkedin />
                      </a>
                    </p>
                  </div>
                  <img src={imgNadeen} alt="Nadeen" />
                </div>
                <h4>Nadeen Shuweihat</h4>
                <p>B.Sc. in Interior Design</p>
              </div>
            </div>
            <div className="col">
              <div className="box">
                <div className="box-pic">
                  <div className="thumb">
                    <p>
                      {" "}
                      <a href="https://github.com/Nemeh998">
                        <AiFillGithub />
                      </a>{" "}
                      <a href="https://www.linkedin.com/in/nemh-ablan/">
                        <AiFillLinkedin />
                      </a>
                    </p>
                  </div>
                  <img src={imgNEmh} alt="nemh" />
                </div>
                <h4>Nemah Ablan</h4>
                <p className="ne">B.Sc. in Computer Science</p>
              </div>
              {/* box */}
            </div>
            {/* col */}

            {/* </div> */}
          </div>
        </div>

        <div>
          <hr id="hr" />
        </div>

        <div className="about-pic-header">
          <h1 className="mt-3 mb-4">Conntact Us</h1>
          <div className="conntactUsCom">
            <div className="container">
              <h3>ADDRESS:</h3>
              <p>Airport Road, Bridge</p>
              <p>P.O.Box 183334 Amman 11118 Jordan</p>
              <h3>E-MAIL:</h3>
              <p>info@ltuc.com</p>
              <h3>CALL US:</h3>
              <p>+ 962 (6) 4000 700</p>
            </div>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13549.275555664257!2d35.8688197!3d31.897932!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8693a9183825010b!2z2YPZhNmK2Kkg2YTZiNmF2YrZhtmI2LMg2KfZhNis2KfZhdi52YrYqSDYp9mE2KrZgtmG2YrYqSAtIChMdW1pbnVzIFRlY2huaWNhbCBVbml2ZXJzaXR5IENvbGxlZ2UgKExUVUM!5e0!3m2!1sen!2sjo!4v1619341119094!5m2!1sen!2sjo"
            width={"100%"}
            height={"450"}
          ></iframe>
        </div>

        {/* ======================== */}

        {/* form sec */}
        {/* <div className="container pt-5 pb-5 mt-5 mb-5">
          <div className="row mb-5 row-cols-2">
            <div className="col">
              {this.state.data.map((item, i) => {
                return (
                  <Card className="commentCard" key={i}>
                    <Card.Header>{item.name}</Card.Header>
                    <p>{item.date}</p>
                    <Card.Body>
                      <Card.Text>{item.comment}</Card.Text>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
            <div className="col">
              <Form onSubmit={this.addData} className="about-form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Enter Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Name"
                    name="username"
                  />
                  <Form.Text className="text-muted">
                    Please Add Your FeedBack
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="comment">
                  <Form.Label>Your feedback</Form.Label>
                  <Form.Control as="textarea" rows={3} name="comment" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Comment
                </Button>
              </Form>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default About;
