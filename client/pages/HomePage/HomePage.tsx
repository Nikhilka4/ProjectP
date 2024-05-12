import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
      <NavBar />
      <Hero />
    </div>
  )
}

export default HomePage