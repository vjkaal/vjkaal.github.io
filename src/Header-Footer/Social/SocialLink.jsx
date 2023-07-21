import React from "react";

import "./SocialLink.sass";

// interface social{
//   class: string,
//   url: string,
//   img: string,
//   alt: string
// }

const SocialLink = (props) => {
  return (
    <div className={props.class + "-content social-link-container"} style={{'minWidth': props.width}}>
      <div className="img-container">
        <img src={props.img} alt={props.alt} />
      </div>
      <a href={props.url}>
        <span>{props.text}</span>
      </a>
    </div>
  );
};

export default SocialLink;
