import React from "react";

const Attrib = (props) => {
  return (
    <div className={props.class + "-attrib-container"}>
      {props.text}{" "}
      <a href={props.link}>
        {props.auth}
      </a>
    </div>
  );
};

export default Attrib;
