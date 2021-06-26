import React, { Component } from "react";
import "./css/Home.css";
import { Carousel } from "react-bootstrap";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import{ BsLaptop ,BsFillHeartFill ,BsFillCollectionPlayFill} from 'react-icons/bs'
class Home extends Component {
  render() {
    return (
      <div>
        {/* start hero img */}
        <div className="hero-img">
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
                    <img src={img2} alt={img1} className='slideUp' />
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className="background3 " interval={3000}>
              <div className="ovelay" ></div>
              <div className="container w-100 h-100">
                <div className="header-img3">
                  <img src={img3} alt={img3} className='slideUp' />
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        {/* end hero img */}
        {/* start our service section  */}
          <section className='our-services'>
            <div className='container'>
                <div className='our-services-header pb-5'>
                  <h1>Our service</h1>
                  </div>
                  <div className='all-service'>
                      <div className='row pt-5'>
                        <div className='col d-flex justify-content-center flex-column align-items-center service-box'>
                        <BsLaptop className='icons pb-2'/>
                        <p>Take computer science courses</p>
                        </div>
                        <div className='col d-flex justify-content-center flex-column align-items-center service-box'>
                        <BsFillHeartFill className='icons pb-2'/>
                        
                        <p>Take computer science courses</p>
                        </div>
                        <div className='col d-flex justify-content-center flex-column align-items-center service-box'>
                          <BsFillCollectionPlayFill className='icons pb-2'/>
                          <p>Take computer science courses</p>
                        </div>
                      </div>
                  </div>

            </div>
          
          </section>
         {/* end our service section  */}

      </div>
    );
  }
}

export default Home;
