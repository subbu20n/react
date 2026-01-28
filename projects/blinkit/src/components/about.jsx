import CustomCarousel from "./customCarousel";
import CustomNavbar from "./customNavbar";
import { FetchProducts } from "./fetchproducts";
import ControlledCom from "./controlledComponents.jsx";

function About(){
  return(
    <>
      <CustomNavbar />
      <CustomCarousel />
      <FetchProducts /> 
      <ControlledCom />
      <h1>this is about page</h1> 
    </>
  )
} 
 
export default About   