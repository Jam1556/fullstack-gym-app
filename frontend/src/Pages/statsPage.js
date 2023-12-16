import React from 'react'

const StatsPage = () => {
  return (
    <div className='statsPage-container'>
      <h1 className="performance-title"><strong> "User Name" </strong> Peformance</h1>
      <div className='boxes'>
        <div className='performance-box'>
          <p className='performance-box-strings'> Time Spent: </p>
          <p className='performance-box-strings'> Total Reps: </p>
          <p className='performance-box-strings'> Total Sets: </p>

        </div>
        <div className='goal-box'>
          <p className='goal-box-strings'> Goals: </p>
          <ol className='goal-box-strings'>
            <li>Example</li>
            <li>Example</li>
            <li>Example</li>
            <li>Example</li>
            <li>Example</li>
            <li>Example</li>


          </ol>

        </div>

      </div>


    </div>
  )
}

export default StatsPage
