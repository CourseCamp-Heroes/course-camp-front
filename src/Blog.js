import React, { Component } from "react";
import { Card, Button, Spinner } from "react-bootstrap/";
import "./css/Blog.css";
import axios from "axios";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogData: [],
      // showModel:'',
      error: "",
    };
  }

  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER}/blog`)
      .then((response) => {
        console.log(response.data.news);

        let filteredData = response.data.news.filter((blog) => {
          return blog.image !== "None";
        });

        this.setState({
          blogData: filteredData,
          // showModel: true
        });
        // console.log(this.state.blogData);
      })
      .catch((error) => {
        this.setState({ error: "Something went wrong!" });
      });
  };

  render() {
    return (
      <div>
        <div className="blog">
          <div className="container">
            <h1>Blog Page</h1>
            <p>
              Hero Course Camp We gathered to build a Website to help our
              community to learn about programming free charges.
            </p>
          </div>
        </div>
        {this.state.blogData.length === 0 ? (
          <div className="spinner">
            <Spinner animation="border" variant="success" />
            <p style={{ color: "green" }}>Loading...</p>
          </div>
        ) : (
          <div className="container mt-5 pt-5">
            <div className="row row-cols-3 mb-5">
              {this.state.blogData.map((item, index) => {
                return (
                  <div className="col mb-5">
                    <Card className="blogCard">
                      <Card.Body>
                        <Card.Title className="blogTitle">
                          {item.title}
                        </Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <Card.Img
                          className="blogImg"
                          variant="top"
                          src={item.image}
                        />

                        <a
                          href={item.url}
                          target="_blank"
                          className="btn btn-success header-btn btn-blog mt-5"
                        >
                          Read More
                        </a>
                        {/* <Button onClick={item.url} target="_blank" type="Read More" value="Read More" />{' '}*/}
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Blog;
