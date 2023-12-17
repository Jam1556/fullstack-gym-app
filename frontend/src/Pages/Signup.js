import React, { useState, useContext } from 'react'
import "../Signup.css"
import { Link } from 'react-router-dom'
import { LoginContext } from '../Context/LoginContext'




const Signup = () => {

  const { action } = useContext(LoginContext)
  const { setAction } = useContext(LoginContext)
  console.log(action)


  return (
    <div className='signup-container'>

      <Link to="/" style={{ textDecoration: 'none', color: 'black' }} >
        <i class="bi bi-arrow-left" style={{ fontSize: "2rem" }}></i>
      </Link>

      <div className='panel'>
        <p className='text'>{action}</p>
        <div className='inputs'>
          <div className={action === 'Login' ? '' : 'input'}>
            <i className={action === 'Login' ? '' : "bi bi-person-fill"}></i>
            {action === 'Login' ? '' : <input type='text' placeholder='Name' />}

          </div>
          <div className='input'>
            <i class="bi bi-envelope-at-fill"></i>
            <input type='email' placeholder='Email' />

          </div>
          <div className='input'>
            <i class="bi bi-lock-fill"></i>
            <input type='password' placeholder='Password' />

          </div>
          <div className='continue'>Continue</div>
          <div className='submit-container'>
            <div onClick={() => { setAction("Sign Up") }} className='submit-signup'>Sign Up</div>

            <div onClick={() => { setAction("Login") }} className='submit-login'>Login</div>
          </div>


        </div>


      </div>




    </div>
  )
}

export default Signup
