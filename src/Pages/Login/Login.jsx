import React, { useState } from "react";
import "./Login.css";

export const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();

    const loginData = {
      email,
      password,
    };

    fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((loginObj) => {
        localStorage.setItem("accessToken", loginObj.accessToken);
        onLogin(true);
      });
  };

  return (
    <div className="form1">
      <div className="main">
        <p className="sign" align="center">
          Sign in
        </p>
        <input
          className="un"
          type="email"
          align="center"
          placeholder="e-mail"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          className="pass"
          type="password"
          align="center"
          placeholder="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button className="submit" align="center" onClick={login}>
          Sign in
        </button>
      </div>
    </div>
  );
};
