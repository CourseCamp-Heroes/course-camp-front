import React, { Component } from "react";
import "./../css/footer.css";
import logo from "./../img/logo2.png";
import {
  BsFillHouseDoorFill,
  BsPencilSquare,
  BsStarFill,
  BsFillHeartFill
} from "react-icons/bs";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGoogleSquare,
  AiFillCopyrightCircle
} from "react-icons/ai";
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row ">
            <div className="logo-footer w-100">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="row w-100">
            <div className="footer-name pt-3">
              <h2>Course Camp</h2>
              <p>
                {" "}
                offers online courses in web development field, created by a
                team of developers called CourseCamp-heroes.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="all-social ">
              <p>
                <AiFillFacebook />
              </p>
              <p>
                <AiFillGithub />
              </p>
              <p>
                <AiFillLinkedin />
              </p>
              <p>
                <AiFillGoogleSquare />
              </p>
            </div>
            <hr></hr>
            <div className='row w-100 copyright'>
              <p className='text-center'> <AiFillCopyrightCircle /> 2021</p><p className='text-center'> created with <BsFillHeartFill/> by CourseCamp-heroes</p>
            </div>
          </div>
        </div>
        {/* container */}
      </div>
    );
  }
}

export default Footer;
