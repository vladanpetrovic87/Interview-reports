import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getDate } from "../../Utilities/utilities.js";

import "./BasicInfo.css";

export const BasicInfo = ({ candidate }) => {
  return (
    <Container className="info">
      <Row className="mt-4">
        <Col sm={12} md={12} lg={4}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOC9cG-RnDhS3DALFlKk13uBjUOYTQ6x0P1A&usqp=CAU"
            alt=""
          />
        </Col>
        <Col sm={12} md={6} lg={8} className="centered ">
          <Row>
            <Col sm={12} md={12} lg={6} className="g-4">
              <h6>Name:</h6>
              <p className="fs-4"> {candidate.name} </p>
            </Col>
            <Col sm={12} md={12} lg={6} className="g-4">
              <h6>Date of Birth:</h6>
              <p className="fs-4">{getDate(candidate.birthday)}</p>
            </Col>
            <Col sm={12} md={12} lg={6} className="g-4">
              <h6>Email:</h6>
              <p className="fs-4">{candidate.email}</p>
            </Col>
            <Col sm={12} md={12} lg={6} className="g-4">
              <h6>Education:</h6>
              <p className="fs-4">{candidate.education}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
