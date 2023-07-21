import React from "react";

// interface attrib{
//   class: string,
//   text: string,
//   link: string,
//   auth: string
// }

import './Attrib.sass'

const Attrib = (props) => {
  return (
    <div className={props.class + "-attrib-content attrib-container"}>
      {props.text}{" "}
      <a href={props.link}>
        {props.auth}
      </a>
    </div>
  );
};

export default Attrib;
