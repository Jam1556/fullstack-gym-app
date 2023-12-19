import React, { useEffect, useState } from 'react'
import NavBar from '../Compoents/navBar'
import Footer from '../Compoents/Footer'
import WorkoutDetails from '../Compoents/WorkoutDetails'
import '../workout.css'

const Workout = () => {

  const [workouts, setWorkOuts] = useState(null)

  useEffect(() => {
    const fetchWorkOuts = async () => {

      const response = await fetch('/exercise/items')

      const json = await response.json()

      if (response.ok) {
        setWorkOuts(json.exercise)
        console.log(json)
      }
      if (!response) {
        console.log(json)
      }

    }
    fetchWorkOuts()





  }, [])




  return (
    <>
      <NavBar />
      <div className='workout-conatiner'>
        {workouts && workouts.map((workouts) => (
          <WorkoutDetails workouts={workouts.text} key={workouts._id} />
        ))}



      </div>
      <Footer />
    </>
  )
}

export default Workout
