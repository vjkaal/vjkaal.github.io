import React from "react";

import github from "src/res/img/github.svg";
import stackoverflow from "src/res/img/stackoverflow.svg";
import instagram from "src/res/img/instagram.svg";

const Social = () => {
  const social_links = [
    {
      class: "github",
      url: "https://github.com/vjkaal",
      img: { github },
    },
    {
      class: "stackoverflow",
      url: "https://stackoverflow.com/users/12975144/vjkaal",
      img: stackoverflow,
    },
    {
      class: "instagram",
      url: "https://instagram.com/kaushal.vanshaj",
      img: instagram,
    },
  ];
  return (
    <div className="social-content">
      {social_links.map((link, index) => {
        return (
          <SocialLink
            key={index}
            class={link.class}
            url={link.url}
            img={link.img}
          />
        );
      })}
    </div>
  );
};

export default Social;
