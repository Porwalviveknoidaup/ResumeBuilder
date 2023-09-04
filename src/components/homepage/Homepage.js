import React from 'react'
import HomePageBanner from './HomePageBanner'
import CreateResume from './CreateResume'
import ResumeSlider from './ResumeSlider'
import HomePageContainer from './HomePageContainer'


function Homepage() {
  return (
    <>
      <HomePageBanner />
      <CreateResume />
      <ResumeSlider />
      <HomePageContainer />
    </>
  )
}

export default Homepage