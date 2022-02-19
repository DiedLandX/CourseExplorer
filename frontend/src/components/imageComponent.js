import React, { Component } from "react";

export function ImageComponent({ urls, rand }) {
  return (
    <div
      className="img-div"
      style={
        urls[0] != undefined
          ? {
              backgroundImage: "url(" + urls[rand].urls.thumb + ")",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              margin: "5px",
            }
          : {}
      }
    ></div>
  );
}

export default ImageComponent;
