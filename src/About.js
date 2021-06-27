import React, { Component } from "react";
import "./css/About.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import imgNEmh from "./img/Nemh.jpg";
import imgRawan from './img/Rawan.jpg'
import imgNoor from './img/Noor.jpg'
import imgIbrahim from './img/Ibrahim.jpg'
import imgAhmad from './img/Ahmad.jpg'
import imgNadeen from './img/Nadeen.jpg'
import axios from "axios";
class About extends Component {
state ={

  data:[],

}

addData=(event)=>{
  event.preventDefault();
  let name=event.target.userName.Value;
  let usercomment=event.target.comment.Value;
  let serverUrl= process.env.REACT_APP_SERVER;
  let url=`${serverUrl}/feedback`;

  axios.post(url,{
    name:name,
    comment:usercomment
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
      <div>
        <h1 className="h1">
          Our Story
        </h1>
        <h2 className="h2">
        Hero Course Camp  We gathered to build a Website to help our community to to learn about programming free charges.
        </h2>
      </div>

      <div>
        <p className="pic">
        Hero Course Camp Team
        </p>
      </div>
      <div>
      </div>




      {/*  */}
      <div class="rowphoto">
        {/* div one for grid */}
        <section>

      <div class="container">
        <div class="box">
          <div class="thumb">
            <img src={imgNEmh} alt="nemh" />

            <div class="social">
              <a href>
                <i class="fa fa-githup"></i>
              </a>
              <a href>
           <i class="fab fa-linkedin"></i>
              </a>
              <p>Nemh Ablan</p>
            </div>
          </div>
        </div>
      </div>

<div class="container">
<div class="box">
  <div class="thumb">
    <img src={imgRawan} alt="*" />

    <div class="social">
      <a href>
        <i class="fa fa-githup"></i>
      </a>
      <a href>
   <i class="fab fa-linkedin"></i>
      </a>
      <p>Rawan Alakhras</p>
    </div>
  </div>
</div>
</div>



<div class="container">
<div class="box">
  <div class="thumb">
    <img src={imgNoor} alt="*" />

    <div class="social">
      <a href>
        <i class="fa fa-githup"></i>
      </a>
      <a href>
   <i class="fab fa-linkedin"></i>
      </a>
      <p>Noor Azar</p>
    </div>
  </div>
</div>
</div>


{/* </div> */}
</section>
{/* div tow for photo grid */}

<section>

<div class="container">
<div class="box">
  <div class="thumb">
    <img src={imgIbrahim} alt="*" />

    <div class="social">
      <a href>
        <i class="fa fa-githup"></i>
      </a>
      <a href>
   <i class="fab fa-linkedin"></i>
      </a>
      <p>Ibrahim Aldereni</p>
    </div>
  </div>
</div>
</div>


<div class="container">
<div class="box">
  <div class="thumb">
    <img src={imgAhmad} alt="*" />

    <div class="social">
      <a href>
        <i class="fa fa-githup"></i>
      </a>
      <a href>
   <i class="fab fa-linkedin"></i>
      </a>
      <p>Ahmad Omar A. Shalein</p>
    </div>
  </div>
</div>
</div>


<div class="container">
<div class="box">
  <div class="thumb">
    <img src={imgNadeen} alt="*" />

    <div class="social">
      <a href>
        <i class="fa fa-githup"></i>
      </a>
      <a href>
   <i class="fab fa-linkedin"></i>
      </a>
      <p> 
nadeen shuweihat </p>
    </div>
  </div>
</div>
</div>

</section>

</div>
{/* form sec */}
<div>
<Form onSubmit={this.addData}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Enter Your Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Your Name" name="username"/>
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
  </Button >
</Form>
  </div>
  
</div>
    );
  }
}

export default About;
