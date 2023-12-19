import React from 'react'
import HomePageBar from '../Components/HomePageBar'
import Footer from '../Components/Footer'

const HomePage = () => {
  return (
    <>
      <HomePageBar />

      <div className='homepage-Container'>
        <div className='section-one-container'>
          <p className='big-title'>GET FIT... </p>
          <p className='big-title' >GET STRONG... </p>
          <p className='big-title'>GET STARTED... </p>

        </div>
        <div className='section-two-container'>
          <div className='sub-section-one-container'>
            <p className='sign-up'>Sign in</p>
            <i class="bi bi-arrow-right"></i>


          </div>
          <div className='sub-section-two-container'>
            <p className='description-text'>FitnessUplink app transforms your fitness journey. Seamlessly track exercises record progress, and
              achieve milestones effortlessly. Elevate your fitness experience, turning aspirations into
              achievements with cutting-edge technology</p>
          </div>


        </div>


      </div>
      <Footer />

    </>
  )
}

export default HomePage
