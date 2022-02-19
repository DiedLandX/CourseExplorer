import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Navigate } from "react-router-dom";
import MyNavbar from "./navbar";

export function Login() {
  const [loggedIn, setloggedIn] = useState(false);
  function sendLoginData(username, password) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    };
    fetch("/login/api", requestOptions)
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            console.log(data);
            setloggedIn(data.loggedIn);
          });
        }
        throw res;
      })
      .catch((err) => {
        if (err) {
          //console.log(err);
        }
      });
  }
  {
    if (loggedIn) {
      return <Navigate to="/profile" />;
    }
  }
  return (
    <div>
      <MyNavbar />

      <img id="show-img" src="http://127.0.0.1:8080/homeBackGround.jpg" />
      <img id="login-img" src="http://127.0.0.1:8080/loginbg.jpg" />

      <div className="auth-form">
        <div className="login-container">
          <input
            id="usrname"
            type="text"
            name="username"
            placeholder="Username"
          />
          <br />

          <input
            id="pswd"
            type="password"
            name="password"
            placeholder="Password"
          />
          <br />
          <div
            className="btn-reg"
            onClick={() => {
              let username = document.getElementById("usrname").value;
              let pswd = document.getElementById("pswd").value;
              sendLoginData(username, pswd);
            }}
          >
            Login
          </div>
        </div>
        <div className="registration-container">
          <input
            id="usrname"
            type="text"
            name="username"
            placeholder="Username"
          />
          <br />
          <input
            id="pswd"
            type="password"
            name="password"
            placeholder="Password"
          />
          <br />{" "}
          <input id="email" type="emial" name="email" placeholder="Email" />
          <br />
          <div className="btn-reg">Register</div>
        </div>
      </div>
    </div>
  );
}
export default Login;
