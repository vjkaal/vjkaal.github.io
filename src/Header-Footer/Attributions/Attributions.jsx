import React from "react";
import Attrib from "./Attrib";
import Heading from "../HeaderComps/Heading";

import './Attributions.sass'

const Attributions = () => {
  const attribs = [
    {
      class: "skills-icons",
      text: "Skills Icons by",
      link: "https://icons8.com",
      auth: "Icons8",
    },
    {
      class: "social-icons",
      text: "Social Icons by",
      link: "https://www.svgrepo.com",
      auth: "SVG Repo",
    }
  ];
  return (
    <div className="attribs-container">
      <Heading heading="Attributions" fontSize="3rem" />
      <div className="attributions">
        {attribs.map((attrib, index) => {
          return (
            <Attrib
              key={index}
              class={attrib.class}
              text={attrib.text}
              link={attrib.link}
              auth={attrib.auth}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Attributions;
