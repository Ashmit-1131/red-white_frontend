import React from 'react'
import {Route,Routes} from "react-router-dom"

import Home from '../Component/Home'

import Registration from '../Pages/Signup'
import Login from '../Pages/Login'
import BlogsPage from '../Pages/blogs'
import Post from '../Pages/Post'
import Profile from '../Pages/Profile'

const AllRoute = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/signup' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        
        {/* <Route path='/blogs' element={<BlogsPage/>} /> */}
        <Route path='/blogs' element={<Post/>} />
        <Route path='/profile' element={<Profile/>} />
    </Routes>
    
    </>
  )
}

export default AllRoute