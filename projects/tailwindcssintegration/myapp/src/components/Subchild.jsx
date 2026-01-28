import { useContext } from "react"
import { Snacks } from "../main"


function SubChild(props){ 
    const {data}=useContext(Snacks)  
    console.log(data) 
  
    return (
        <h1> {data.snacks} </h1>
    )
}
export default SubChild    