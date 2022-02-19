import React, { useState, useEffect } from "react";
import MyNavbar from "./navbar";
import Course from "./course";
export function Home() {
  const [courseInfo, setcourseInfo] = useState([]);
  function getCourses() {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setcourseInfo(data));
  }
  useEffect(() => {
    getCourses();
  }, []);
  return (
    <div>
      <MyNavbar />
      <div id="courses-feed">
        {courseInfo.map((elem, idx) => {
          return (
            <Course
              title={elem.title}
              description={elem.description}
              tags={elem.tags}
              key={idx}
              id={idx}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Home;
