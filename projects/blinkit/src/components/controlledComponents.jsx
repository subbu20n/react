import { useRef, useState } from "react";


function ControlledCom (){
    let name=useRef("")
    let password=useRef("")
    
    

    const handlesubmit=(e)=>{
        // form refres 
        e.preventDefault ()  
        console.log("form is submitted",name.current.value,name.current.value) // submit cheyagane data ni fetch cheyali  
    }
    return (
        <>
          <form onSubmit={handlesubmit}> 

          <input type="text" placeholder="Enter your name"  ref={name}/>
          <input type="password" placeholder="Enter your password"  ref={password}/> 
          <button type="submit">save</button> 

          </form>
        </> 
    ) 
}
export default ControlledCom 