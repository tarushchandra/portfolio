import React from "react";
import "./PortfolioList.css";

const PortfolioList = ({ title, active, setSelected, id }) => {
  return (
    <li className={active ? "active" : ""} onClick={() => setSelected(id)}>
      {title}
    </li>
  );
};

export default PortfolioList;
