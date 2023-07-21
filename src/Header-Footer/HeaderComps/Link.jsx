import React from 'react'

interface link{
  class: string,
  href: string,
  name: string
}

const Link = (props:link) => {
  return (
    <div className={props.class + '-link nav-link'}>
      <a href={props.href}>{props.name}</a>
    </div>
  )
}

export default Link
