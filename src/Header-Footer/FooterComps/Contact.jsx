import React from "react";
import Heading from "../HeaderComps/Heading";
import Image from "../Image/Image";
import Form from "../Form/Form";

import bg from './../../res/img/bg.jpg';

const Contact = () => {
  return (
    <div className="contact-content">
      <div className="left-container">
        <div className="heading">
          <Heading heading="Have a Project in your mind?" />
        </div>
        <div className="image-container">
          <Image class="bg" src={bg} alt="Image containing abstract technical content" />
        </div>
      </div>
      <div className="right-container">
        <div className="form-contianer">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
