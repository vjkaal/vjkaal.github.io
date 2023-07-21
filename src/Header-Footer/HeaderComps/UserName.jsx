import React from 'react'

import './UserName.sass'

interface username{
  username: string
}

const UserName = (props:username) => {
  return (
    <div className='user-name'>
      <p>{props.username}</p>
    </div>
  )
}

export default UserName
