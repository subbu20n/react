import { useEffect, useState } from "react"

function Timer(){
    const[count,setcount]=useState(0) 
    const[start,setstart]=useState(false) 
     const[stop,setstop]=useState(false) 
    const handleStart=()=>{
        setstart(true) 
    }
    const handleStop=()=>{
        setstop(false) 
    }
    const handleReset=()=>{
        setcount(0)
        setstart(false) 
    }
    useEffect(()=>{
        console.log("usereffect render") 
        let Id; 
        if(start){
         Id=setInterval(()=>{
            setcount((a)=>a+1) 
         },1000)
        } 
        return()=>{clearInterval(Id)} 
    },[start])  
    
    return (
        <>
          <p>count:{count}</p> 
          <button onClick={handleStart}>start</button> 
           <button onClick={handleReset}>restart</button> 
          <button onClick={handleStop}>stop</button> 
        </>
    )
}
export default Timer  
 