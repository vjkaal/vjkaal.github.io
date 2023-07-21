import React from 'react'

import './SkillHeading.sass'

const SkillHeading = (props) => {
  return (
    <div className='skill-heading' style={{'color': props.clr, 'border': '1px solid'+props.clr, 'boxShadow': '0 0 1rem'+ props.clr}}>
      <h1>{props.heading}</h1>
    </div>
  )
}

export default SkillHeading
