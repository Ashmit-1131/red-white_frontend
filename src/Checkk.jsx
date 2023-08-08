import React,{useEffect} from 'react'



const Checkk = (props) => {
    useEffect(()=>{
    alert("Smile please")
    },[props.count])
  return (
    <div>
        <h1>Count:{props.count}</h1>
        <h1>Data:{props.data}</h1>

    </div>
  )
}

export default Checkk