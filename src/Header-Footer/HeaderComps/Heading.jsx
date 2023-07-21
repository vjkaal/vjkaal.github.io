import React from 'react'

import './Heading.sass'

// interface heading{
//   heading: string
// }

const Heading = (props) => {
  return (
    <div className='heading' style={{'height': "100%", 'fontSize': `${props.fontSize}`}} ><h1>{props.heading}</h1></div>
  )
}

export default Heading
