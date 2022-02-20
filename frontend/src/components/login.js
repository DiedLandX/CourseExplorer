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
    fetch("https://course--explorer.herokuapp.com/login/api", requestOptions)
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
  function registerUser(username, email, password) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    };
    fetch(
      "https://course--explorer.herokuapp.com/login/register",
      requestOptions
    )
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            console.log(data);
          });
        }
        throw res;
      })
      .catch((err) => {
        if (err) {
          console.log(err);
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

      <img id="show-img" src="" />
      <img id="login-img" src="" />

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
            id="usrname-register"
            type="text"
            name="username"
            placeholder="Username"
          />
          <br />
          <input
            id="pswd-register"
            type="password"
            name="password"
            placeholder="Password"
          />
          <br />{" "}
          <input
            id="email-register"
            type="emial"
            name="email"
            placeholder="Email"
          />
          <br />
          <div
            className="btn-reg"
            onClick={() => {
              let usrname = document.getElementById("usrname-register").value;
              let email = document.getElementById("email-register").value;
              let pswd = document.getElementById("pswd-register").value;
              registerUser(usrname, email, pswd);
            }}
          >
            Register
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
