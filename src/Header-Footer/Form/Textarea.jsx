import React from "react";

import './Textarea.sass'

const Textarea = (props) => {
  return (
    <div className={props.class + "-container"}>
      <label htmlFor={props.name}>{props.label}</label>
      <textarea
        name={props.name}
        id={props.id}
        cols={props.col}
        rows={props.row}
        value={props.value}
        placeholder={props.placeholder}
        onChange={(e) => props.setFn(e.target.value)}
        required={props.rqd}
      ></textarea>
    </div>
  );
};

export default Textarea;
