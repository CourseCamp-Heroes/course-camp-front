import React, { Component } from "react";
import "./css/About.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import imgNEmh from "./img/Nemh.jpg";
import imgRawan from "./img/Rawan.jpg";
import imgNoor from "./img/Noor.jpg";
import imgIbrahim from "./img/Ibrahim.jpg";
import imgAhmad from "./img/Ahmad.jpg";
import imgNadeen from "./img/Nadeen.jpg";
import axios from "axios";
import {AiFillGithub ,AiFillLinkedin} from 'react-icons/all'
class About extends Component {
  state = {
    data: [],
  };

  addData = (event) => {
    event.preventDefault();
    let name = event.target.userName.Value;
    let usercomment = event.target.comment.Value;
    let serverUrl = process.env.REACT_APP_SERVER;
    let url = `${serverUrl}/feedback`;

    axios.post(url, {
      name: name,
      comment: usercomment,
    });
  };

  // handleClose=()=>{
  //   this.setState({
  //     show:true,
  //   })
  // }

  render() {
    return (
      <div>
        <div className="about-header">
          <div className="container">
            <h1 className="h1">Our Story</h1>
            <p>
              Hero Course Camp We gathered to build a Website to help our
              community to to learn about programming free charges.
            </p>
          </div>
        </div>

        <div className="about-pic-header">
          <div className="container">
            <h1>Hero Course Camp Team</h1>
          </div>
        </div>
        {/* ====================== */}
        <div className="about-pic">
          <div className="container">
            <div className="row pt-5 pb-5">
              <div className="col">
                <div className="box">
                <div className="box-pic">
                  <div className='thumb'>
                  <p> <AiFillGithub />  <AiFillLinkedin /></p>
                  </div> 
                  <img src={imgIbrahim} alt="ibrahem" />
                  
                  
                  <div className="social">
                    
                  </div>
                 
                </div>
                <h4>Ibrahem Aldereni</h4>
                <p>Softwate Development</p>
                </div>
              </div>
              <div className="col">
               
                <div className="box">
                <div className="box-pic">
                  <div className='thumb'>
                  <p> <AiFillGithub />  <AiFillLinkedin /></p>
                  </div> 
                  <img src={imgRawan} alt="rawan" />
                  
                  
                  <div className="social">
                    
                  </div>
                 
                </div>
                <h4>Rawan Alakhras</h4>
                <p>Softwate Development</p>
                </div>
                
              </div>
              <div className="col">
               
                <div className="box">
                <div className="box-pic">
                  <div className='thumb'>
                  <p> <AiFillGithub />  <AiFillLinkedin /></p>
                  </div> 
                  <img src={imgAhmad} alt="ahmad" />
                  
                  
                  <div className="social">
                    
                  </div>
                 
                </div>
                <h4>Ahamd Omar A. Shalein</h4>
                <p>Softwate Development</p>
                </div>
                
              </div>
            </div>
            <div className="row pb-5 pt-5">
              <div className="col">
                <div className="box">
                <div className="box-pic">
                  <div className='thumb'>
                  <p> <AiFillGithub />  <AiFillLinkedin /></p>
                  </div> 
                  <img src={imgNoor} alt="noor" />
                  
                  
                  <div className="social">
                    
                  </div>
                 
                </div>
                <h4>Noor Azar</h4>
                <p>Softwate Development</p>
                </div>
              </div>
              <div className="col">
               
                <div className="box">
                <div className="box-pic">
                  <div className='thumb'>
                  <p> <AiFillGithub />  <AiFillLinkedin /></p>
                  </div> 
                  <img src={imgNadeen} alt="Nadeen" />
                  
                  
                  <div className="social">
                    
                  </div>
                 
                </div>
                <h4>nadeen shuweihat</h4>
                <p>Softwate Development</p>
                </div>
              
              </div>
              <div className="col">
           
                <div className="box">
                <div className="box-pic">
                  <div className='thumb'>
                  <p> <AiFillGithub />  <AiFillLinkedin /></p>
                  </div> 
                  <img src={imgNEmh} alt="nemh" />
                  
                  
                  <div className="social">
                    
                  </div>
                 
                </div>
                <h4>Nemh Ablan</h4>
                <p>Softwate Development</p>
                </div>
            
              </div>
            </div>
          </div>
        </div>

        {/* ======================== */}

       
        {/* form sec */}
        <div>
          <Form onSubmit={this.addData}>
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
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Add Your FeedBack</Form.Label>
              <Form.Control type="text" placeholder="Comment" name="comment" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.handleClose}>
              Comment
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default About;
