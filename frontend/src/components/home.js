import React, { useState, useEffect } from "react";
import MyNavbar from "./navbar";
export function Home() {
  return (
    <div>
      <MyNavbar />
      <div className="show-case">
        <img id="show-img-home" src="" />
        <div className="img-content">
          <div className="img-content-container">
            <h1>We are here to deliver the best courses for you!</h1>
            <h4>
              This is a very accurate description about the site and what you
              can do. Its so accurate I might even repeat it. This is a very
              accurate description about the site and what you can do.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
