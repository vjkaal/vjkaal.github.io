import React from 'react'
import Copy from './FooterComps/Copy'
import Contact from './FooterComps/Contact'

const Footer = () => {
  return (
    <footer>
      <div className="contact-container">
        <Contact />
      </div>
      <div className="social-container"></div>
      <div className="copy-container">
        <Copy />
      </div>
    </footer>
  )
}

export default Footer
