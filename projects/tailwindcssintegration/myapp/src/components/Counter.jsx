// -----------------functional base components-------------- 

//---------------use state hook ---------------- 

// -----rules---- 

// only call hooks at the top level 
// do not call hooks inside loops, conditions, or nested functions  
// only call hooks from react functions  
// do not call hooks from regular javascript functions   

//---------------useEffect------for sideeffects calling api,onclickevents,eventlisteners  

// useEffect: excute only once 

import { useEffect, useState } from "react"



export function Toggle(){
    const[show,setshow]=useState(true) 

    const hideCom=()=>{
        setshow(false) 
    }
    return(
        <>
          <button>show</button> 
          <button onClick={hideCom}>hide</button> 
          {show?<TimerApp/>:"time app is cleared"} 
        </>
    )
}

function TimerApp(){
    let [count,setcount] = useState(0) 
    const increment=()=>{
        // batch updates 
        // setcount((prev)=>prev+1)
        // setcount((prev)=>prev+1)
        // setcount((prev)=>prev+1)
        // setcount((prev)=>prev+1)
        // //setcount((prev)=>{return prev+1})
    }
    useEffect(()=>{
        let interId=setInterval(()=>{
            console.log("interval rendering") 
            setcount((a)=>a+1) 
        },1000)
        return()=>{clearInterval(interId)} //clarnup function like unmount 
    },[]) //here array wont keep means it will iterate infinite loop 
    return(
        <>
          <button>decrement</button> 
          <p>count:{count}</p>
          <button onClick={increment}>increment</button>
        </>
    )
}
export default TimerApp 
 