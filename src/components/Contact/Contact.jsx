import React, { useRef, useState } from "react";
import "./Contact.css";
import { imageSource } from "./imageSource";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [sentMail, setSentMail] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { value, name } = e.target;

    setUserData((prevValue) => {
      if (name === "user_name") {
        return {
          name: value,
          subject: prevValue.subject,
          email: prevValue.email,
          message: prevValue.message,
        };
      } else if (name === "user_subject") {
        return {
          name: prevValue.name,
          subject: value,
          email: prevValue.email,
          message: prevValue.message,
        };
      } else if (name === "user_email") {
        return {
          name: prevValue.name,
          subject: prevValue.subject,
          email: value,
          message: prevValue.message,
        };
      } else if (name === "user_message") {
        return {
          name: prevValue.name,
          subject: prevValue.subject,
          email: prevValue.email,
          message: value,
        };
      }
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ozy2x98",
        "template_4gqjidp",
        formRef.current,
        "-tDSAaMxCJSsWUR6L"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSentMail(true);
          setUserData({ name: "", subject: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="contact" id="contact">
      <div className="left-contact">
        <img alt="svgImg" src={imageSource} />
      </div>
      <div className="right-contact">
        <h1>Get in Touch.</h1>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Name"
            name="user_name"
            value={userData.name}
          />
          <input
            onChange={handleChange}
            type="text"
            placeholder="Subject"
            name="user_subject"
            value={userData.subject}
          />
          <input
            onChange={handleChange}
            type="email"
            placeholder="Email Address"
            name="user_email"
            value={userData.email}
          />
          <textarea
            onChange={handleChange}
            rows="5"
            placeholder="Message"
            name="user_message"
            value={userData.message}
          />
          <button>Submit</button>
          {sentMail &&
            alert("Thank You. I will get back to you as soon as I can :)")}
        </form>
      </div>
    </div>
  );
};

export default Contact;
