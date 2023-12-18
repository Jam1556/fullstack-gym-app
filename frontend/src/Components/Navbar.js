import React from 'react'
import "../App.css"



const NavBar = () => {
  return (
    <div className='Container-Nav'>

      <div className='header'>
        <p className='title'>FitnessUplink &#8482; </p>

        <i class="bi bi-x-diamond-fill" style={{ fontSize: "2.5rem" }}></i>
        <p className='workout'>Workouts</p>
        <p className='stats'>Stats</p>
        <i class="bi bi-search" style={{ fontSize: "2.5rem" }}></i>
        <i class="bi bi-person-circle" style={{ fontSize: "2.5rem" }}></i>


      </div>

    </div >
  )
}

export default NavBar