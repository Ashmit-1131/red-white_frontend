import React from 'react'
import {Route,Routes} from "react-router-dom"

import Home from '../Component/Home'

import Registration from '../Pages/Signup'
import Login from '../Pages/Login'

const AllRoute = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/signup' element={<Registration />} />
        <Route path='/login' element={<Login />} />
      
    </Routes>
    
    </>
  )
}

export default AllRoute