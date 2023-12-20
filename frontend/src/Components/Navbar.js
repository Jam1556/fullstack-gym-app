import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const NavBar = () => {
  return (
    <div className='Container-Nav'>
      <div className='header'>
        <Link to="/" className='title'>FitnessUplink &#8482; </Link>
        <i class="bi bi-x-diamond-fill" style={{ fontSize: "2.5rem" }}></i>
        <Link to="/workout" className='workout'>Workouts</Link>
        <Link to="/statspage" className='stats'>Stats</Link>

        <i className="bi bi-search" style={{ fontSize: "2.5rem" }}></i>
        <i className="bi bi-person-circle" style={{ fontSize: "2.5rem" }}></i>
      </div>
    </div>
  );
}

export default NavBar;