import CustomCarousel from "./components/customCarousel.jsx";
import CustomNavbar from "./components/customNavbar.jsx";

import { FetchProducts } from "./components/fetchproducts";


function App(){
  return(
    <>
      <CustomNavbar />
      <CustomCarousel />
      <FetchProducts /> 
    </>
  ) 
}

export default App   