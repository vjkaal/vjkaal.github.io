import React from "react";
import SocialLink from "./SocialLink";

import github from "./../../res/img/github.svg";
import stackoverflow from "./../../res/img/stackoverflow.svg";
import instagram from "./../../res/img/instagram.svg";

import './Social.sass'
import Heading from "../HeaderComps/Heading";

const Social = () => {
  const social_links = [
    {
      class: "github",
      url: "https://github.com/vjkaal",
      img: github,
      text: 'GitHub',
      alt: 'link to my github account',
      width: '8.4vw'
    },
    {
      class: "stackoverflow",
      url: "https://stackoverflow.com/users/12975144/vjkaal",
      img: stackoverflow,
      text: 'StackOverflow',
      alt: 'link to my stackoverflow account',
      width: '11.8vw'
    },
    {
      class: "instagram",
      url: "https://instagram.com/kaushal.vanshaj",
      img: instagram,
      text: 'Instagram',
      alt: 'link to my instagram account',
      width: '9.9vw'
    },
  ];
  return (
    <div className="social-content">
      {social_links.map((link, index) => {
        return (
          <SocialLink
            width={link.width}
            key={index}
            class={link.class}
            url={link.url}
            img={link.img}
            alt={link.alt}
            text={link.text}
          />
        );
      })}
      <Heading heading="Contact me" fontSize="3rem" />
    </div>
  );
};

export default Social;
