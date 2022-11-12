import React from 'react'

export const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chatty</span>
            <span className='title'>Login</span>
            <form>
                <input type="email" placeholder='Username' name="" id="" />
                <input type="password" placeholder='Password' name="" id="" />
                <button>Sign In</button>
            </form>
            <p>You have not an account? Register</p>
        </div>
    </div>
  )
}