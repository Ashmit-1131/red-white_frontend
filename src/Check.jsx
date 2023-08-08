import React from 'react'
import {useState } from 'react'
import Checkk from './Checkk'
const Check = () => {
  const [count,setCount]=useState(0)
  const [data,setData]=useState(10)



  return (
    <div>
     <Checkk count={count} data={data}/>
<button onClick={()=>setCount(count+1)}>Increment</button>
<button onClick={()=>setCount(count-1)}>Decrement</button>

<button onClick={()=>setData(data+5)}>increData</button>
<button onClick={()=>setData(data-5)}>decreData</button>

    </div>
  )
}

export default Check