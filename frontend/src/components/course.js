import React, { useState, useEffect } from "react";
import ImageComponent from "./imageComponent";
export function Course({ title, description, tags, length, id }) {
  const [urls, seturls] = useState([]);

  function loadImgs() {
    let url;
    for (let i = 0; i < tags.length; i++) {
      url =
        "https://api.unsplash.com/search/photos?query=" +
        tags[i].tag +
        "&per_page=10&client_id=s-Jku04LSu1r_Tgq1EHXVr50yf_GRZ5EODEqLeAzigo";
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          seturls(data.results);
        });
    }
  }
  useEffect(() => {
    loadImgs();
  }, []);

  let randoms = [];
  for (let i = 0; i < 10; i++) {
    let rand = Math.floor(Math.random() * urls.length);
    if (randoms.indexOf(rand) === -1) randoms.push(rand);
  }

  return (
    <div className="course-container">
      <div id={id} className="image-container">
        <ImageComponent urls={urls} rand={randoms[0]} />
        <ImageComponent urls={urls} rand={randoms[1]} />
        <ImageComponent urls={urls} rand={randoms[2]} />
      </div>
      <div className="course-title">
        <h3>{title}</h3>
      </div>
      <div className="course-description">{description}</div>

      <button>Details</button>
    </div>
  );
}
export default Course;
