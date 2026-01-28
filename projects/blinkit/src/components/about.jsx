import { useContext } from "react"
import ControlledCom from "./controlledComponents"
import CustomCarousel from "./customCarousel"
import CustomNavbar from "./customNavbar"
import { Counter } from "./blinkitusers"



function About(){
  
   return(
    <>
    <CustomNavbar/>
    <CustomCarousel/>
    
    <Counter/>

    </>
   ) 
}
export default About