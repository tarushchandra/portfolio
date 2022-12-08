import React from "react";

const ContactLogo = ({ item }) => {
  return (
    <a href={item.link} target="_blank" rel="noreferrer">
      <i title={item.title} className={item.class}></i>
    </a>
  );
};

export default ContactLogo;
