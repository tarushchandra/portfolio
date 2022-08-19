import React, { useEffect, useState } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./Skills.css";
import { techList, toolsList } from "./data";

const Skills = () => {
  const [selected, setSelected] = useState("tech");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "tech",
      title: "Technologies",
    },
    { id: "tools", title: "Tools" },
  ];

  useEffect(() => {
    if (selected === "tech") {
      setData(techList);
    } else if (selected === "tools") {
      setData(toolsList);
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
            <img
              key={item.id}
              src={item.img}
              alt="icon-img"
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
