import React, { useState,createContext } from 'react'
export const CounterContext=createContext()
const CounterProvider = ({props}) => {
    const [count,setCount]=useState(0)
    const increment=()=>setCount(count+1)
    const decrement=()=>setCount(count-1)

    const value={
        count,increment,decrement
    }
  return (
    <CounterContext.Provider value={value}>
    {  props}
    </CounterContext.Provider>
  )
}

export default CounterProvider