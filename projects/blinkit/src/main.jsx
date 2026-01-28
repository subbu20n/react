import { StrictMode } from 'react'
import "./index.css"
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Description from './components/sample.jsx'
import CustomNavbar from './components/customNavbar.jsx'
import CustomCarousel from './components/customCarousel.jsx';
import {FetchProducts} from './components/fetchproducts.jsx'
import { BrowserRouter, Routes, Route } from "react-router";

import App from '../../blinkit/src/App.jsx';
import About from './components/about.jsx';
//import PageNotFound from './components/PageNotFound.jsx';
import Recipe from './components/Recipie.jsx';
import TemplateDemo from './components/Timeline.jsx';

createRoot(document.getElementById('root')).render(

     <BrowserRouter>  
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
    
       <Route path="/recipe/:id" element={<Recipe />} /> 
       <Route path="*" element={<TemplateDemo />} /> 
    </Routes> 
  </BrowserRouter> 
    
  
) 
  