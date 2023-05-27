import React from "react";
import Field from "./Field";

const Form = () => {
  const form_content = [
    {
      class: "name",
      type: "text",
      value: "",
      name: "name",
      id: "input-name",
      placeholder: "Enter your name",
      label: "Name",
    },
    {
      class: "email",
      type: "email",
      value: "",
      name: "mail",
      id: "input-mail",
      placeholder: "Enter Email here",
      label: "Mail",
    },
    {
      class: "desc",
      type: "textarea",
      value: "",
      name: "desc",
      id: "input-desc",
      placeholder: "Enter Your Project Query here",
      label: "Project Description",
      row: 5,
      col: 50,
    },
    {
      class: 'submit',
      type: 'submit',
      value: 'submit',
      name: 'submit',
      id: 'input-submit',
      placeholder: '',
      label: ''
    }
  ];

  return (
    <div className="form-content">
      <form action="">
        <fieldset disabled="disabled">
          {form_content.map((field) => {
            return (
              <Field
                key={field.id}
                class={field.class}
                name={field.name}
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
                maxlen={field.maxlen}
                row={field.row}
                col={field.col}
              />
            );
          })}
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
