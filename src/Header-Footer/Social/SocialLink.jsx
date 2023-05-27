import React from 'react'

const SocialLink = (props) => {
  return (
    <div className={props.class + '-container'}>
      <a href={props.url}>
        <img src={props.img} alt={props.alt} />
      </a>
    </div>
  )
}

export default SocialLink
