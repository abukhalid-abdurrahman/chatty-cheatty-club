import React from 'react'
import AccountImage from "../img/account.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chatty</span>
      <div className='user'>
        <img src={AccountImage} />
        <span>Name</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
