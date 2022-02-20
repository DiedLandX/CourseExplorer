import React, { useState, useEffect, Component } from "react";
import { Navigate } from "react-router-dom";
import MyNavbar from "./navbar";

export function Home() {
  const [userInfo, setuserInfo] = useState([]);

  function Logout() {
    fetch("https://course--explorer.herokuapp.com/logout", { method: "post" })
      .then((res) => {
        res.json().then((data) => setuserInfo(data));
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }

  useEffect(() => {
    fetch("https://course--explorer.herokuapp.com/profile")
      .then((res) =>
        res.json().then((data) => {
          setuserInfo(data);
        })
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!userInfo.loggedIn && userInfo.loggedIn != null) {
    return <Navigate to="/login" />;
  }
  console.log(userInfo);
  return (
    <div>
      <MyNavbar />

      <h1 style={{ color: "white" }}>
        Profile User: {userInfo != null ? userInfo.username : ""}
      </h1>
      <button
        onClick={() => {
          Logout();
        }}
      >
        Logout
      </button>
    </div>
  );
}
export default Home;
