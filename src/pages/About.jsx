import React from 'react'
import Navigation from '../composants/Navigation'
import Logo from '../composants/Logo'
import "./about.css"

const About = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <div>
        <h1 id='h1' >A propos</h1>
        <div className="about">
          
        </div>
      </div>

      
    </div>
  )
}

export default About