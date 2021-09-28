import React from "react";
import { Container, Row, Modal, Col } from "react-bootstrap";
import { getDate } from "../../Utilities/utilities.js";

export const ModalReport = ({ report, onHide }) => {
  return (
    <Modal
      show={!!report}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="lg"
    >
      <Modal.Header closeButton className="btn btn-primary">
        <Modal.Title id="contained-modal-title-vcenter">
          {report.candidateName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <h6>Company</h6>
              <p>{report.companyName}</p>
              <h6>Interview Date</h6>
              <p>{getDate(report.interviewDate)}</p>
              <h6>Phase</h6>
              <p>{report.phase}</p>
              <h6>Status</h6>
              <p>{report.status}</p>
            </Col>

            <Col xs={12} md={8}>
              <h6>Notes</h6>
              <p>{report.note}</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
