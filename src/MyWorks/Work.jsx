import React from 'react'
import Card from './Card'

const Work = (props) => {
  return (
    <div className={props.class + '-container'}>
      <div className="heading">
        <h2>{props.class}</h2>
      </div>
      {props.projects.map((project, index)=>{
        return <Card key={index} name={project.name} link={project.link} />
      })}
    </div>
  )
}

export default Work
