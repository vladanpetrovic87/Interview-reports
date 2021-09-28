import React, { Fragment, useState } from "react";
import { Route, Switch } from "react-router-dom";

import { Login } from "./Pages/Login/Login";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { SingleCandidate } from "./Pages/SingleCandidate/SingleCandidate";
import { Candidates } from "./Pages/Candidates/Candidates";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("accessToken")
  );

  return (
    <Fragment>
      <Header isLoggedIn={isLoggedIn} onLogout={setIsLoggedIn} />
      {isLoggedIn ? (
        <Switch>
          <Route
            path="/single-candidate/:candidateId"
            component={SingleCandidate}
          />
          <Route path="/" component={Candidates} />
        </Switch>
      ) : (
        <Login onLogin={setIsLoggedIn} />
      )}
      <Footer />
    </Fragment>
  );
}
export default App;
