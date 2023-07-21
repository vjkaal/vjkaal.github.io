import React from "react";
import Heading from "../HeaderComps/Heading";
// import Image from "../Image/Image";
import Form from "../Form/Form";

import bg from "./../../res/img/bg.jpg";

import "./Contact.sass";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="left-container" /*{style={{'background': `url(${bg})`}}}*/>
        <Heading heading="Have a Project in your mind?" fontSize="3rem" />
      </div>
      <div className="right-container">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
