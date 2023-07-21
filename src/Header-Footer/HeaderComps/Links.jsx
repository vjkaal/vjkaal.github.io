import React from "react";
import Link from "./Link";


import './Links.sass'

const Links = () => {
  const links = [
    {
      class: 'home',
      href: "/",
      name: "home",
    },
    // {
    //   class: 'skills',
    //   href: "#",
    //   name: 'skills'
    // },
    {
      class: 'my works',
      href: "/",
      name: 'my works'
    },
    {
      class: 'about me',
      href: "#about",
      name: 'about me'
    }
  ];

  return <div className="links">
    {links.map((link, index)=>{
      return <Link key={index} class={link.class} href={link.href} name={link.name} />
    })}
  </div>;
};

export default Links;
