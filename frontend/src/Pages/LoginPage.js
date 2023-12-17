import React from 'react'
import "../Login.css"

const LoginPage = () => {
  return (
    <div className='login-container'>

      <div className='panel'>

        <p className='text'>Sign up</p>
        <div className='inputs'>
          <div className='input'>
            <i class="bi bi-person-fill"></i>
            <input type='text' placeholder='Name' />

          </div>
          <div className='input'>
            <i class="bi bi-envelope-at-fill"></i>
            <input type='email' placeholder='Email' />

          </div>
          <div className='input'>
            <i class="bi bi-lock-fill"></i>
            <input type='password' placeholder='Password' />

          </div>
          <div className='submit-container'>
            <div className='submit-signup'>Sign Up</div>
            <div className='submit-login'>Login</div>
          </div>


        </div>


      </div>




    </div>
  )
}

export default LoginPage
