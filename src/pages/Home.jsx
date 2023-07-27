import React from 'react'
import Navigation from '../composants/Navigation'
import Logo from '../composants/Logo'
import Countries from '../composants/Countries'
import Footers from '../composants/Footer'

const Home = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Countries />

      <Footers />
    </div>
  )
}

export default Home