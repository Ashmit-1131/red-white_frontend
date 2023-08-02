import React from 'react'
import {Route,Routes} from "react-router-dom"

import Home from '../Component/Home'

import Registration from '../Pages/Signup'

const AllRoute = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/signup' element={<Registration />} />
      
    </Routes>
    
    </>
  )
}

export default AllRoute