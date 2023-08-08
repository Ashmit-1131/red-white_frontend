import  { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)

    async function getData(){
        setLoading(true)
        try{
            const response=await fetch(url)
            const data=await response.json()
            setData(data)
        }catch(error){
            setError(error)
        }
        setLoading(false)
    }
    useEffect(()=>{
        getData()
    },[url])
  return [data,loading,error]
     

}

export default useFetch