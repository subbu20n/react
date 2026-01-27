import CustomCarousel from "./customCarousel";
import CustomNavbar from "./customNavbar";
import { FetchProducts } from "./fetchproducts";


function About(){
  return(
    <>
      <CustomNavbar />
      <CustomCarousel />
      <FetchProducts /> 
      <h1>this is about page</h1> 
    </>
  )
} 

export default About  