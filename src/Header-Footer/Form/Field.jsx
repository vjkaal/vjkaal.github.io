import React from "react";

const Field = (props) => {
  return (
    <div className={props.class + "-container"}>
      <label htmlFor={props.name}>
        {props.label}
      </label>
      <input
        type={props.type}
        value={props.value}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        maxLength={props.maxlen?props.maxlen:0}
        rows={props.row?props.row:0}
        columns={props.cols?props.cols:0}
      />
    </div>
  );
};

export default Field;
