import React from 'react'

import './../style/UserName.sass'

const UserName = (props) => {
  return (
    <div className='user-name'>
      <p>{props.username}</p>
    </div>
  )
}

export default UserName
