import React, {useState} from 'react';
import {Nav} from './Nav';
import './css/Nav.css';

export const MyWorks = () => {

  const [showContent, setshowContent] = useState("web")

  const toggleContent = ()=> {
    setshowContent(showContent === "web"?"soft":"web");
    console.log(showContent);
    
  }

  return (
    <div>
      <Nav toggleContent={toggleContent}></Nav>
      
    </div>
  )
}
