import React, { useEffect, useState } from "react";

import MyWorks from "./MyWorks/MyWorks";
import SkillHeading from "./SkillHeading";
import Skill from "./Skill";

import c from "./../res/img/c.svg";
import cpp from "./../res/img/cpp.svg";
import java from "./../res/img/java.svg";
import python from "./../res/img/python.svg";
import js from "./../res/img/js.svg";
import react from "./../res/img/react.svg";

import "./Skills.sass";

const Skills = () => {
  const skills_list = [
    {
      class: "c",
      name: "C Programming Language",
      icon: c,
      alt: "skill: c",
      clr: "#283593",
    },
    {
      class: "c++",
      name: "C++ Programming Language",
      icon: cpp,
      alt: "skill: cpp",
      clr: "#00549d",
    },
    {
      class: "java",
      name: "Java n SpringBoot",
      icon: java,
      alt: "skill: java",
      clr: "#f44336",
    },
    {
      class: "python",
      name: "Python Programming Language",
      icon: python,
      alt: "skill: python",
      clr: "#ffc107",
    },
    {
      class: "js",
      name: "Front End using HTML/CSS/JS",
      icon: js,
      alt: "skill: js",
      clr: "#f7df1e",
    },
    {
      class: "react",
      name: "Front End using React.JS",
      icon: react,
      alt: "skill: react",
      clr: "#80deea",
    },
  ];

  const [currClass, setCurrClass] = useState("");
  const [currHead, setCurrHead] = useState("");
  const [currClr, setCurrClr] = useState("#000");
  useEffect(() => {
    console.log(currClass, "heading: ", currHead, "color: ", currClr);
    // let icon_container = document.querySelector(".skills-container");
    if (currClass === "") {
      setCurrHead("");
      setCurrClr("#000");
    }
    // console.log('yes')
  }, [currClass, currHead, currClr]);

  return (
    <div className="skills">
      <div className="curr-skill-heading-container">
        <SkillHeading heading={currHead} clr={currClr} />
      </div>
      <div className="skills-container">
        {skills_list.map((skill, index) => {
          return (
            <Skill
              key={index}
              class={skill.class}
              icon={skill.icon}
              alt={skill.alt}
              name={skill.name}
              bg={skill.bg}
              clr={skill.clr}
              setClass={setCurrClass}
              setHead={setCurrHead}
              setClr={setCurrClr}
            />
          );
        })}
      </div>
      <MyWorks cc={currClass} />
    </div>
  );
};

export default Skills;
