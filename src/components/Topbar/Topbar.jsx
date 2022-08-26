import React from "react";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <div className="logo">
            <a href="#intro">Tarush.</a>
          </div>
          <div className="contact-info">
            <a href="https://www.linkedin.com/in/tarush-chandra-8a78ab176/">
              <i
                title="My LinkedIn Profile"
                className="fa-brands fa-linkedin"
              ></i>
            </a>
            <a href="https://github.com/tarushchandra">
              <i title="My Github Profile" className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.youtube.com/channel/UC6ZvKbdOcDExc5UNijCbowQ">
              <i
                title="My Youtube Channel"
                className="fa-brands fa-youtube"
              ></i>
            </a>
            <a href="https://www.instagram.com/tarush_music/">
              <i
                title="My Instagram Profile"
                className="fa-brands fa-instagram"
              ></i>
            </a>
            <a href="https://www.fiverr.com/tarush06?up_rollout=true">
              <i
                title="My Audio Engineering and Music Production Services"
                className="fa-solid fa-headphones"
              ></i>
            </a>
          </div>
          <div></div>
        </div>
        <div className="right">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
