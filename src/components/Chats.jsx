import React from 'react'
import AccountImage from "../img/account.png"

const Chats = () => {
  return (
    <div className='chats'>
      <div className='userChat'>
        <img src={AccountImage} alt="" />
        <div className="userChatInfo">
          <span>Name</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats
