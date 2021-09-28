import React from "react";

import "./CandidateInfo.css";

export const CandidateInfo = ({ name, email }) => {
  return (
    <div className="card-body">
      <h5 className="card-title"> {name}</h5>
      <p className="card-text">{email}</p>
    </div>
  );
};
