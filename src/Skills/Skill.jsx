import React from "react";

const Skill = (props) => {
  return (
    <div className={props.class + "-skill-container"}>
      <div className="img-container">
        <img src={props.icon} alt={props.alt} />
      </div>
      <div className="text-container">
        {props.name}
      </div>
    </div>
  );
};

export default Skill;
