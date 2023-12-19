import React from 'react'
import '../workout.css'

const WorkoutFrom = () => {

  const handleSubmit = () => {


  }

  return (
    <div className='from-container'>
      <form onSubmit={handleSubmit}>
        <label>Add Workouts Here </label>
        <input
          type='text'

        />


      </form>

    </div>
  )
}

export default WorkoutFrom
