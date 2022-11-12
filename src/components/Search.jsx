import React from 'react'
import AccountImage from "../img/account.png"

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" placeholder='Find a user...'/>
      </div>
      <div className='userChat'>
        <img src={AccountImage} alt="" />
        <div className="userChatInfo">
          <span>Name</span>
        </div>
      </div>
    </div>
  )
}

export default Search