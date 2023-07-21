import React from "react";

import './Input.sass'

// interface field{
//   class: string,
//   type: string,
//   defValue: string,
//   name: string,
//   id: string,
//   placeholder: string,
//   label: string,
//   maxlen: number,
//   row: number,
//   col: number
// }

const Input = (props) => {
  return (
    <div className={props.class + "-container input-container"}>
      {/* <label htmlFor={props.name}>
        {props.label}
      </label> */}
      <input
        type={props.type}
        defaultValue={props.value}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        maxLength={props.maxlen?props.maxlen:0}
        // rows={props.row?props.row:0} // these 2 not needed anymore added textarea input type
        // cols={props.col?props.col:0}
        // contentEditable={true}: didn't work
        onChange={(e)=>props.setFn(e.target.value)}
        required={props.rqd}
      />
    </div>
  );
};

export default Input;
