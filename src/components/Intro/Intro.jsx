import React, { useEffect, useRef } from "react";
import "./Intro.css";
import { init } from "ityped";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Front-End Developer", "Web Designer", "Music Producer :) "],
    });
  });

  return (
    <div className="intro" id="intro">
      <div className="left-intro">
        <div className="intro-text">
          <h2>Hi there, I'm</h2>
          <h1>Tarush Chandra</h1>
          <h3>
            A <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#skills">
          <i className="fa-solid fa-angles-down"></i>
        </a>
      </div>
      <div className="right">
        <div className="image-container">
          <img src="images/3.png" alt="tarush-img" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
