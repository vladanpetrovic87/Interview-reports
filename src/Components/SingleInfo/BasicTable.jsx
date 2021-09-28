import React, { useState, useEffect } from "react";
import { Table, Container } from "react-bootstrap";

import { getReports } from "../../Services/service";
import { ModalReport } from "../Modals/ModalReport";
import { getDate } from "../../Utilities/utilities.js";

import "./BasicTable.css";

export const BasicTable = ({ candidate }) => {
  const [reports, setReports] = useState([]);
  const [reportToShow, setReportToShow] = useState(null);

  useEffect(() => {
    getReports().then((reports) => {
      setReports(
        reports.filter((element) => element.candidateId === candidate.id)
      );
    });
  }, [candidate.id]);

  return (
    <Container className="tab">
      {!!reportToShow && (
        <ModalReport
          report={reportToShow}
          onHide={() => setReportToShow(null)}
        />
      )}
      <h2 className="mt-4 mb-3">Reports:</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Company</th>
            <th>Interview date</th>
            <th colSpan="2">Status</th>
          </tr>
        </thead>
        <tbody>
          {reports
            ? reports.map((element, index) => (
                <tr key={index}>
                  <td>{element.companyName}</td>
                  <td>{getDate(element.interviewDate)}</td>
                  <td>{element.status}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-link-dark"
                      onClick={() => setReportToShow(element)}
                    >
                      <i className="fas fa-eye"></i>
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    </Container>
  );
};
