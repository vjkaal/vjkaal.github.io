import React from "react";
import "./Card.sass";
import Image from "../../Header-Footer/Image/Image";

const Card = (props) => {
  return (
    <div className={props.name + "-container mywork-card"}>
      <a href={props.link}>
        <div className="img-container">
          <Image
            id={props.name + "-project-image"}
            class={props.name + "-project-image"}
            src={props.src}
            alt={props.name}
            width="100rem"
            display="block"
          />
        </div>
        <div className="heading">
          <h4>{props.name}</h4>
        </div>
      </a>
    </div>
  );
};

export default Card;
