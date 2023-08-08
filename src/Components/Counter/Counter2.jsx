import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { increment,decrement } from "../../Redux/action";

 function Counter2(){
  let value=useSelector((el)=>el.count)
  console.log(value)
 let dispatch=useDispatch()
  return(
    <div>
        <h1>{value}</h1>
<button onClick={()=>dispatch(increment())}>Inc</button>
<button onClick={()=>dispatch(decrement())}>DEC</button>
    </div>
  )
 }
 export default Counter2

