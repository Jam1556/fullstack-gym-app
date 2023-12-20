import React from 'react'
import "../Login.css"
import { useState } from 'react'
import { useLogin } from '../Context/useLogin'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (

    <div className='login-container'>

    {/* Login Form container */}
      <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button disabled={isLoading}>Log in</button>
      {error && <div className="error">{error}</div>}
    </form>


    {/* A lot of divs */}
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
