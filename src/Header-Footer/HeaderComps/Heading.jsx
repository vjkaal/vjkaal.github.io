import React from 'react'

import './../style/Heading.sass'

const Heading = (props) => {
  return (
    <div className='heading'><h1>{props.heading}</h1></div>
  )
}

export default Heading
