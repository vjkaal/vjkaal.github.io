import React from 'react'
import Copy from './FooterComps/Copy'
import Contact from './FooterComps/Contact'
import Social from './Social/Social'

const Footer = () => {
  return (
    <footer>
      <div className="contact-container">
        <Contact />
      </div>
      <div className="social-container">
        <Social />
      </div>
      <div className="copy-container">
        <Copy />
      </div>
    </footer>
  )
}

export default Footer
