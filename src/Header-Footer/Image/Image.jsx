import React from "react";

// interface image{
//   id: string,
//   class: string,
//   src: string,
//   alt: string,
//   width: string,
//   display: string
// }

const Image = (props) => {
  return (
    <div id={props.id} className={props.class + "-content"}>
      <img
        src={props.src}
        alt={props.alt}
        width={props.width}
        style={{'display': props.display}}
      />
    </div>
  );
};

export default Image;
