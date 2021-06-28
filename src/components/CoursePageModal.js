import React, { Component } from "react";
import { Modal, Button, ListGroup } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import {
  BsReverseLayoutTextSidebarReverse,
  BsCardChecklist,
  BsBookHalf,
  IoPersonCircleOutline,
} from "react-icons/all";

class CoursePageModal extends Component {
  render() {
    console.log(this.props.showEnrollbtn);
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.closeFunc}>
          <Modal.Header>
            <Modal.Title>
              <h2>{this.props.data.title}</h2>
            </Modal.Title>
            <span className="course-modal-close" onClick={this.props.closeFunc}>
              &times;
            </span>
          </Modal.Header>
          <Modal.Body className="course-modal-body">
            <ListGroup horizontal>
              <ListGroup.Item>{this.props.data.level}</ListGroup.Item>
              <ListGroup.Item>{this.props.data.duration}</ListGroup.Item>
              <ListGroup.Item>
                {new Date().toISOString().slice(0, 10)}
              </ListGroup.Item>
            </ListGroup>

            <h3 className="mt-3 mb-3">
              {" "}
              <BsReverseLayoutTextSidebarReverse /> Summary:{" "}
            </h3>
            <p> {this.props.data.shortSummary}</p>

            <h3 className="mt-3 mb-3">
              {" "}
              <BsCardChecklist /> Expected Learning:{" "}
            </h3>
            <p> {ReactHtmlParser(`${this.props.data.expectedLearning}`)}</p>

            <h3 className="mt-3 mb-3">
              {" "}
              <BsBookHalf /> Syllabus:{" "}
            </h3>
            <p> {ReactHtmlParser(`${this.props.data.syllabus}`)} </p>

            <h3 className="mt-3 mb-3">
              {" "}
              <IoPersonCircleOutline /> Instructors:{" "}
            </h3>
            {this.props.data.instructors && (
              <>
                <img
                  src={this.props.data.instructors[0].image}
                  alt="img"
                  className="instructor-img"
                />
                <p>{this.props.data.instructors[0].name}</p>
              </>
            )}
          </Modal.Body>
          <Modal.Footer className="pt-4 pb-4 modal-footer">
            <div className="modal-footer-tags">
              {this.props.data.skills &&
                this.props.data.skills.map((item, i) => {
                  return <span key={i}>#{item}</span>;
                })}
            </div>
            {this.props.showEnrollbtn.length > 0 ? (
              <p>You Enrolled</p>
            ) : (
              <Button
                variant="success"
                onClick={this.props.EnrollFunc}
                style={{ width: 90 }}
              >
                Enroll
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CoursePageModal;
