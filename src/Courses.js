import React, { Component } from "react";
import { InputGroup, FormControl, Form, Card } from "react-bootstrap";
import "./css/Courses.css";
import { BsSearch } from "react-icons/bs";

class Courses extends Component {
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
          <div className="select-container">
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Level</Form.Label>
              <Form.Control as="select">
                <option value="all">All</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Duration</Form.Label>
              <Form.Control as="select">
                <option value="0">All</option>
                <option value="above">Above 5 weeks</option>
                <option value="less">Below 5 weeks</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Skills</Form.Label>
              <Form.Control as="select">
                <option value="0">All</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="jQuery">jQuery</option>
                <option value="ruby">Ruby</option>
                <option value="heroku">Heroku</option>
                <option value="linux">Linux</option>
                <option value="networking">Networking</option>
                <option value="python">HTTP</option>
              </Form.Control>
            </Form.Group>
          </div>
          <p>Courses (VARAIBEL HERE results)</p>
        </div>
        <div className="cards">
          <Card className="course-card">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="course-card">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="course-card">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="course-card">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Courses;
