import React from 'react'

const Link = (props) => {
  return (
    <div className={props.class + '-link'}>
      <a href={props.href}>{props.name}</a>
    </div>
  )
}

export default Link
