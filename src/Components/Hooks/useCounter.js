import {useState} from 'react'

const useCounter = (initialValue=0) => {
    let [count,setCount]=useState(initialValue)

    function increment(){
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }
  return {count,increment,decrement}


}

export default useCounter