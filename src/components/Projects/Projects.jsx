import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const data = [
    {
      id: 1,
      title: "E-Commerce Application",
      github_link: "https://github.com/tarushchandra/Little-Basket",
      live_link: "https://littlebasket.netlify.app/",
      video: "videos/littleBasket.mp4",
      desc: "Created a full stack E-Commerce Application using MERN Stack, with all the major features like Cart Manipulation, Payment Integration followed by a confirmatory section on the front-end about the successful order with all the information persisted in the database including number of users, products, orders and carts. Used Redux-toolkit for state management and JSON Web Tokens, Firebase OAuth for web security.",
    },
    {
      id: 2,
      title: "Netflix Clone",
      github_link:
        "https://github.com/tarushchandra/netflix-clone/tree/main/Netflix%20Clone",
      live_link:
        "https://github.com/tarushchandra/netflix-clone/tree/main/Netflix%20Clone",
      video: "videos/netflix2.mp4",
      desc: "Implemented the landing page with the help of HTML, CSS and JavaScript by taking the original Netflix website as the reference. Used font awesome for icons",
    },
  ];

  function nextSlide() {
    setCurrent(current < data.length - 1 ? current + 1 : 0);
  }

  function prevSlide() {
    setCurrent(current > 0 ? current - 1 : data.length - 1);
  }

  return (
    <div className="projects" id="projects">
      <h1>My Projects</h1>
      <div className="slider">
        <i
          onClick={prevSlide}
          className="fa-solid fa-angles-left left-icon"
        ></i>
        <div className="items-container">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className="item"
                style={{ transform: `translateX(-${current * 100}vw)` }}
              >
                <a
                  className="live-link"
                  href={item.live_link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <video autoPlay muted loop>
                    <source src={item.video} type="video/mp4" />
                  </video>
                  <p>{item.desc}</p>
                  <a
                    className="github-icon"
                    href={item.github_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </a>
              </div>
            );
          })}
        </div>
        <i
          onClick={nextSlide}
          className="fa-solid fa-angles-right right-icon"
        ></i>
      </div>
    </div>
  );
};

export default Projects;
