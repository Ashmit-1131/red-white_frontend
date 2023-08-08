import React from 'react'
import useFetch from './Hooks/useFetch'

const Fetching = () => {
    const {data,error,loading}=useFetch('https://jsonplaceholder.typicode.com/comments')
       console.log(data)
    if(loading){
        return <div>loading...</div>
    }
    if(error){
        return <div>error:{error.message}</div>
    }
  return <div></div>
  
}

export default Fetching