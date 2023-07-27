import React from 'react'
import Navigation from '../composants/Navigation'
import Logo from '../composants/Logo'
import "./about.css"
import Footers from '../composants/Footer'
import Abouts from '../composants/Abouts'

const About = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <div>
        <h1 id='h1' >A propos</h1>
        <div className="about">
          <Abouts />
        </div>
      </div>

     <Footers />

    </div>
  )
}

export default About