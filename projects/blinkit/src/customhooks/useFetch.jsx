import { useEffect, useState } from "react"


function useFetch(url){
   const [data,setdata]=useState("")
   const [loading,setloading]= useState(true)
  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then((jsonresponse)=>{
      setdata(jsonresponse) // response ni state ki update cheystunna
    setloading(false)
    });
    
   },[])
   return {data,loading}
} 
export default useFetch  