import React from "react";

export const Nav = (props) => {
  return (
    <div>
      <div className="nav bg-dark text-light d-flex justify-content-around">
        <div className="web">
          <button className="my-btn" onClick={props.toggleContent}>Web Development</button>
        </div>
        <div className="soft">
          <button className="my-btn"onClick={props.toggleContent}>Software Development</button>
        </div>
      </div>
    </div>
  );
};
