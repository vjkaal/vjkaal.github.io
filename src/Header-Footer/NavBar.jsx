import React from "react";
import Heading from "./HeaderComps/Heading";
import Links from "./HeaderComps/Links";
// import UserName from "./HeaderComps/UserName";

import "./NavBar.sass";

import "./ImageHandling.sass";

import icon from "./../res/img/icon_light.png";
import menu from "./../res/img/menu_light.svg";
import close from "./../res/img/close_light.svg";
import Image from "./Image/Image";
import { useEffect, useState } from "react";

function NavBar() {
  const [showNav, setShowNav] = useState(false);

  const updateNavState = () => {
    if (showNav === false) setShowNav(true);
    else setShowNav(false);
  };

  useEffect(() => {
    const windowWidthUpdate = () => {
      // create a condition to check window width
      let container = document.querySelector("#nav-dropdown");
      if (window.innerWidth < 768) {
        let menu = document.querySelector("#menu-icon");
        let close = document.querySelector("#close-icon");
        if (showNav === true) {
          container.style.display = "block";
          // menu.classList.remove('show-image')
          menu.classList.add("hide-image");
          close.classList.remove("hide-image");
          close.classList.add("show-image");
        } else {
          container.style.display = "none";
          menu.classList.remove("hide-image");
          menu.classList.add("show-image");
          // close.classList.remove('show-image')
          close.classList.add("hide-image");
        }
      } else {
        container.style.display = "block";
      }
    };
    window.addEventListener("resize", windowWidthUpdate);

    return () => window.removeEventListener("resize", windowWidthUpdate);
  }, [showNav]);

  return (
    <nav>
      <div className="left-content">
        <Image
          id=""
          class="icon"
          src={icon}
          alt="portfolio icon"
          width="30rem"
          display="block"
        />
        <Heading heading="algo-js" />
      </div>

      <button className="ham-container" onClick={updateNavState}>
        <Image
          id="menu-icon"
          class="menu"
          src={menu}
          alt="menu"
          width="30rem"
          display="block"
        />
        <Image
          id="close-icon"
          class="close"
          src={close}
          alt="close"
          width="30rem"
          display="block"
        />
      </button>

      <div className="right-content" id="nav-dropdown">
        <Links />
        {/* <UserName username="Vanshaj Kaushal" /> */}
      </div>
    </nav>
  );
}

export default NavBar;
