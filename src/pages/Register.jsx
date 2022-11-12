import React from 'react'
import AddAvatar from "../img/addAvatar.png"

export const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chatty</span>
            <span className='title'>Register</span>
            <form>
                <input type="text" placeholder='Name' name="" id="" />
                <input type="email" placeholder='Email as Username' name="" id="" />
                <input type="password" placeholder='Password' name="" id="" />
                <input type="file" name="" id="file" style={{display: "none"}} />
                <label htmlFor="file">
                    <img src={AddAvatar} alt="" />
                    <span>Profile image</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>Do you have an account? Login</p>
        </div>
    </div>
  )
}
