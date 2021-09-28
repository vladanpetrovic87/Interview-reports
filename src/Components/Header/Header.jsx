import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

function Header({ isLoggedIn, onLogout }) {
  const onLogoutClick = () => {
    localStorage.removeItem("accessToken");
    onLogout(false);
  };
  return (
    <div>
      <nav className="navbar navbar-dark header">
        <div className="container-fluid">
          <span className="navbar-brand int">Interview Report</span>

          {isLoggedIn && (
            <div className="d-flex">
              <Link to="/" className="btn">
                Candidates
              </Link>

              <Link to="/" className="btn" onClick={onLogoutClick}>
                <i className="fas fa-sign-in-alt"></i> Log Out
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export { Header };
