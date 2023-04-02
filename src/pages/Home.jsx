import React from 'react'
import Header from '../components/Header'
import backgroundImage from '../assets/backGround.jpg'

const Home = () => {
  return (
    <div>
    <Header />
    <img className="h-[500px] w-full object-cover" src={backgroundImage}></img>
    </div>
  )
}

export default Home