import React, { useState } from "react";
import Input from "./Input";

import "./Form.sass";
import Textarea from "./Textarea";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");

  const form_content = [
    {
      class: "name",
      type: "text",
      name: "name",
      id: "name",
      value: name,
      placeholder: "Enter your Name",
      // label: "Name: ",
      maxlen: 30,
      setFn: setName,
      rqd: true,
    },
    {
      class: "email",
      type: "email",
      name: "mail",
      id: "mail",
      value: email,
      placeholder: "Enter your email",
      // label: "Mail: ",
      maxlen: 50,
      setFn: setEmail,
      rqd: true,
    },
    {
      class: "desc",
      type: "textarea",
      name: "desc",
      id: "desc",
      value: desc,
      // label: "Project Description: ",
      placeholder: "Explain Project Briefly",
      row: 5,
      col: 50,
      setFn: setDesc,
      rqd: true,
    },
    {
      class: "submit",
      type: "submit",
      value: "submit",
      name: "submit",
      id: "submit",
      placeholder: "",
      label: "",
      maxlen: 6,
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Thank you.\n Your Project Description has been submitted.\n We will contact you regarding your project ASAP.`
    );
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <fieldset className="main-form">
          {form_content.map((field, index) => {
            console.log(field.type);
            if (field.type === "textarea") {
              return (
                <Textarea
                  key={index}
                  class={field.class}
                  value={field.value}
                  name={field.name}
                  id={field.id}
                  placeholder={field.placeholder}
                  label={field.label}
                  row={field.row}
                  col={field.col}
                  setFn={field.setFn}
                  rqd={field.rqd}
                />
              );
            } else {
              return (
                <Input
                  key={index}
                  class={field.class}
                  type={field.type}
                  value={field.value}
                  name={field.name}
                  id={field.id}
                  placeholder={field.placeholder}
                  label={field.label}
                  maxlen={field.maxlen}
                  setFn={field.setFn}
                  rqd={field.rqd}
                />
              );
            }
          })}
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
