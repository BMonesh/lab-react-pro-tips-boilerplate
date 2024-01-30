import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Forms from './Components/Forms'
import About from './Components/About'

const AllRoute = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Squad51 />} />
        <Route path='/About' element={<About />} />
        <Route path='/Register' element={<Forms />}/>
      </Routes>
    </>
  )
}

export default AllRoute