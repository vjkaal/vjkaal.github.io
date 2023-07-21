import React from "react";
import "./Skill.sass";

const Skill = (props) => {
  return (
    <div className={props.class + "-skill-content skill-container"}>
      <div
        className="img-container"
        onMouseOver={() => {
          props.setClass(props.class);
          props.setHead(props.name);
          props.setClr(props.clr)
        }}
        // onMouseLeave={() => props.setClass("")}
      >
        <img src={props.icon} alt={props.alt} />
      </div>
    </div>
  );
};

export default Skill;
