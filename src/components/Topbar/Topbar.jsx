import React from "react";
import ContactLogo from "./ContactLogo";
import "./Topbar.css";

const Topbar = () => {
  const contactLogoData = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/tarush-chandra-8a78ab176/",
      title: "My LinkedIn Profile",
      class: "fa-brands fa-linkedin",
    },
    {
      id: 2,
      link: "https://github.com/tarushchandra",
      title: "My Github Profile",
      class: "fa-brands fa-github",
    },
    {
      id: 3,
      link: "https://www.youtube.com/channel/UC6ZvKbdOcDExc5UNijCbowQ",
      title: "My Youtube Channel",
      class: "fa-brands fa-youtube",
    },
    {
      id: 4,
      link: "https://www.instagram.com/tarush_music/",
      title: "My Instagram Profile",
      class: "fa-brands fa-instagram",
    },
    {
      id: 5,
      link: "https://www.fiverr.com/tarush06?up_rollout=true",
      title: "My Audio Engineering and Music Production Services",
      class: "fa-solid fa-headphones",
    },
  ];

  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <div className="logo">
            <a href="#intro">Tarush.</a>
          </div>
          <div className="contact-info">
            {contactLogoData.map((item) => {
              return <ContactLogo key={item.id} item={item} />;
            })}
          </div>
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
