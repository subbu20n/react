import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Description from './components/sample.jsx'
import CustomNavbar from './components/customNavbar.jsx'
import CustomCarousel from './components/customCarousel.jsx';
import CounterApp from './classcomponents/counterApp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomNavbar/>
    <CustomCarousel/>
    <CounterApp/> 
    <Description/>
  </StrictMode>,
) 
  