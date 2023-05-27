import React from 'react'
import Copy from './FooterComps/Copy'
import Contact from './FooterComps/Contact'
import Social from './Social/Social'
import Attributions from './Attributions/Attributions'

const Footer = () => {
  return (
    <footer>
      <div className="contact-container">
        <Contact />
      </div>
      <div className="social-container">
        <Social />
      </div>
      <div className="attributions">
        <Attributions />
      </div>
      <div className="copy-container">
        <Copy />
      </div>
    </footer>
  )
}

export default Footer
