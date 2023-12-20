import React from 'react'
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div className='footer-container'>
      <p className='footer-string-1'>FitnessUplink  © 2023 </p>
      <p className='footer-string-1'>FitnessUplink@free-Palestine.com </p>
      <Link to="/about" className='footer-string-1' >About us</Link>






    </div>
  )
}

export default Footer
