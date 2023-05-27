import React from "react";

import Skill from "./Skill";

import cpp from "./../res/img/cpp.svg";
import java from "./../res/img/java.svg";
import python from  "./../res/img/python.svg";
import js from  "./../res/img/js.svg";
import react from "./../res/img/react.svg"

const Skills = () => {
  const skills_list = [
    {
      class: "c/c++",
      name: "C++",
      icon: cpp,
      alt: "skill: cpp",
    },
    {
      class: "java",
      name: "Java",
      icon: java,
      alt: "skill: java",
    },
    {
      class: "python",
      name: "Python",
      icon: python,
      alt: "skill: python",
    },
    {
      class: "js",
      name: "JS",
      icon: js,
      alt: "skill: js",
    },
    {
      class: "react",
      name: "React",
      icon: react,
      alt: "skill: react",
    },
  ];
  return (
    <div className="skills-container">
      {skills_list.map((skill, index) => {
        return (
          <Skill
            key={index}
            class={skill.class}
            icon={skill.icon}
            alt={skill.alt}
            name={skill.name}
          />
        );
      })}
    </div>
  );
};

export default Skills;
