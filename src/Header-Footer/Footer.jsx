import React from 'react'
import Copy from './FooterComps/Copy'
import Contact from './FooterComps/Contact'
import Social from './Social/Social'
import Attributions from './Attributions/Attributions'

const Footer = () => {
  return (
    <footer>
        <Contact />
        <Social />
        <Attributions />
        <Copy />
    </footer>
  )
}

export default Footer
