import { useState, useEffect } from 'react'
import React from 'react'
import Workout from '../Pages/Workout'
import "../workout.css"

const WorkoutDetails = ({ workouts }) => {



  return (
    <div className='workouts-detial'>
      {workouts}


    </div>
  )
}

export default WorkoutDetails
