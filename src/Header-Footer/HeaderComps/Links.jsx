import React from "react";
import Link from "./Link";

const Links = () => {
  const links = [
    {
      class: 'home',
      href: "#",
      name: "home",
    },
    {
      class: 'skills',
      href: "#",
      name: 'skills'
    },
    {
      class: 'works',
      href: "#",
      name: 'works'
    },
    {
      class: 'about',
      href: "#",
      name: 'about'
    }
  ];

  return <div className="links">
    {links.map((link)=>{
      return <Link id={link.name} class={link.class} href={link.href} name={link.name} />
    })}
  </div>;
};

export default Links;
