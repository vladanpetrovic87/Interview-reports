import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { CandidateInfo } from "../../Components/SingleCandidateCard/CandidateInfo/CandidateInfo";
import { getCandidates } from "../../Services/service";

import "./Candidates.css";

export const Candidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    getCandidates().then((candidates) => {
      setCandidates(candidates);
      setFilteredCandidates(candidates);
    });
  }, []);

  const onTyping = (e) => {
    setInputValue(e.target.value);
    const filtered = candidates.filter((element) =>
      element.name.toLowerCase().includes(e.target.value.toLowerCase().trim())
    );
    setFilteredCandidates(filtered);
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light navigate">
        <div className="container">
          <span
            className="navbar-brand cand"
            style={{ color: "rgb(108, 137, 176)" }}
          >
            Candidates
          </span>
          <form className="d-flex">
            <input
              value={inputValue}
              onChange={onTyping}
              className="form-control me-2 fas"
              type="search"
              placeholder="&#xf002; Search"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>

      <div className="card-group">
        {filteredCandidates.map((element, key) => (
          <div className="ourCard" key={key}>
            <Link to={`/single-candidate/${element.id}`}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOC9cG-RnDhS3DALFlKk13uBjUOYTQ6x0P1A&usqp=CAU"
                className="card-img-top"
                alt="..."
              />
              <CandidateInfo name={element.name} email={element.email} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
