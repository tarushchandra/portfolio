import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [current, setCurrent] = useState(1);

  const data = [
    {
      id: 1,
      img: "images/netflix.png",
      title: "Netflix Clone",
      link: "https://github.com/tarushchandra/netflix-clone/tree/main/Netflix%20Clone",
    },
    {
      id: 2,
      img: "images/real-estate-app.png",
      title: "Real Estate Filtering App",
      link: "https://polite-griffin-42fd5b.netlify.app/",
    },
    {
      id: 3,
      img: "images/crypto-tracker.png",
      title: "Cryptocurrency Tracker App",
      link: "https://zingy-stardust-bd85b2.netlify.app/",
    },
    {
      id: 4,
      img: "images/movie-app.png",
      title: "Movies Info App",
      link: "https://legendary-liger-762282.netlify.app/",
    },
    {
      id: 5,
      img: "images/todo-list.png",
      title: "Todo List App",
      link: "https://tubular-moonbeam-588923.netlify.app/",
    },
  ];

  function nextSlide() {
    setCurrent(current === data.length ? 1 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 1 ? data.length : current - 1);
  }

  return (
    <div className="projects" id="projects">
      <h1>My Projects</h1>
      <div className="slider">
        <i
          onClick={prevSlide}
          className="fa-solid fa-angles-left left-icon"
        ></i>
        <div className="container">
          {data.map((item) => {
            return (
              <div
                title={item.title}
                className={item.id === current ? "slide slide-active" : "slide"}
              >
                {current === item.id && (
                  <div>
                    <a href={item.link} target="_blank" rel="noreferrer">
                      <img key={item.id} src={item.img} alt="project-img" />
                    </a>
                  </div>
                )}
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
