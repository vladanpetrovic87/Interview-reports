import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BasicTable } from "../../Components/SingleInfo/BasicTable";
import { BasicInfo } from "../../Components/SingleInfo/BasicInfo";
import { getCandidates } from "../../Services/service";

export const SingleCandidate = () => {
  const [candidates, setCandidates] = useState([]);

  const candidateId = useParams().candidateId;

  useEffect(() => {
    getCandidates().then((candidates) => {
      setCandidates(candidates);
    });
  }, []);

  const candidate = candidates.filter((element) => {
    return element.id === parseInt(candidateId);
  })[0];

  return (
    <Fragment>
      {candidate ? <BasicInfo candidate={candidate} /> : null}
      {candidate ? <BasicTable candidate={candidate} /> : null}
    </Fragment>
  );
};
