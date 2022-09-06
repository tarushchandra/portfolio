import React, { useEffect, useState } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./Skills.css";
import { resumeArray, techList, toolsList } from "./data";

const Skills = () => {
  const [selected, setSelected] = useState("tech");
  const [resumeActive, setResumeActive] = useState(false);
  const [data, setData] = useState([]);

  const list = [
    {
      id: "tech",
      title: "Technologies",
    },
    { id: "tools", title: "Tools" },
    { id: "resume", title: "My Resume" },
  ];

  useEffect(() => {
    if (selected === "tech") {
      setData(techList);
    } else if (selected === "tools") {
      setData(toolsList);
    } else if (selected === "resume") {
      setData(resumeArray);
    }
  }, [selected]);

  return (
    <div className="skills" id="skills">
      <div className="heading">
        <h1>My Skills</h1>
      </div>
      <ul>
        {list.map((item) => {
          return (
            <PortfolioList
              key={item.id}
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          );
        })}
      </ul>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <a href={item.link} target="_blank" rel="noreferrer">
              <img
                key={item.id}
                src={item.img}
                alt="icon-img"
                title={item.title}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
