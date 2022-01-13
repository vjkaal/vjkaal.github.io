import React from "react";
import profileImg from "../res/img/profile.jpg";
import "./css/Profile.css";

export const Profile = () => {
  return (
    <div className="profile">
      <div className="imgContainer">
        <img src={profileImg} alt="" />
      </div>
      <span className="intro">
        <span className="animate__animated animate__slideInRight" lang='ja-jp' title="Hello">こんにちは</span>
        <br />
        <span className="animate__animated animate__slideInRight animate__delay-2s">I am Vanshaj Kaushal</span>
        <br />
        <span className="skill animate__animated animate__slideInRight animate__delay-1s"></span>
      </span>
    </div>
  );
};
