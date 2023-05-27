import React from "react";
import SocialLink from "./SocialLink";

import github from "./../../res/img/github.svg";
import stackoverflow from "./../../res/img/stackoverflow.svg";
import instagram from "./../../res/img/instagram.svg";

const Social = () => {
  const social_links = [
    {
      class: "github",
      url: "https://github.com/vjkaal",
      img: github,
      alt: 'link to my github account'
    },
    {
      class: "stackoverflow",
      url: "https://stackoverflow.com/users/12975144/vjkaal",
      img: stackoverflow,
      alt: 'link to my stackoverflow account'
    },
    {
      class: "instagram",
      url: "https://instagram.com/kaushal.vanshaj",
      img: instagram,
      alt: 'link to my instagram account'
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
            alt={link.alt}
          />
        );
      })}
    </div>
  );
};

export default Social;
