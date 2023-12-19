import React from 'react'
import "../App.css"
import "../HomePageBar.css"
import { Link } from 'react-router-dom'
import Signup from '../Pages/Signup'
import { useState, useContext } from 'react'
import { LoginContext } from '../Context/LoginContext'

const HomePageBar = () => {

  const { setAction } = useContext(LoginContext)


  return (
    <div className='homepage-Container-Nav'>
      <div className='homepage-header'>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <p className='homepage-title'>FitnessUplink &#8482; </p>

        </Link>
        <Link to="/Signup" style={{ textDecoration: 'none', color: 'black' }}>

          <button onClick={() => { setAction('Login') }} type="button" class="btn btn-secondary">Login</button>
        </Link>
        <Link to="/Signup" style={{ textDecoration: 'none', color: 'black' }}>

          <button onClick={() => { setAction('Sign Up') }} type="button" className="btn btn-primary">Sign Up</button>
        </Link>

      </div>



    </div >
  )
}

export default HomePageBar
