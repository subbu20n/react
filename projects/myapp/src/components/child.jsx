import React from "react"
import SubChild from "./subchild"

class Child extends React.PureComponent{
    render(){
        console.log("child is render ..")
        return (
            <>
               child component  
               <SubChild />
            </>
        ) 
    }  
}

export default Child 