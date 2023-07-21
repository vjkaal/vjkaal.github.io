import React from 'react'
import Card from './Card'

import './Work.sass'

const Work = (props) => {
  return (
    <div className={props.class + '-content work-container'}>
      {props.projects.map((project, index)=>{
        return <Card key={index} name={project.name} link={project.link} src={project.img} />
      })}
    </div>
  )
}

export default Work
