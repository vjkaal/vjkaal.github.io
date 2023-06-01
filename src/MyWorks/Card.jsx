import React from "react";

const Card = (props) => {
  return (
    <div className={props.name + "-container"}>
      <a href={props.link}>
        <div className="heading">
          <h3>{props.name}</h3>
        </div>
      </a>
    </div>
  );
};

export default Card;
