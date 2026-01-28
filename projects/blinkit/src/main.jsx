import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx';
import PageNotFound from "./components/PageNotFound.jsx"
import About from "./components/about.jsx"
import Recipe from './blinkitproducts/recipes.jsx';
import TemplateDemo from './components/Timeline.jsx';
import { PrimeReactProvider } from "primereact/api";
import { createContext } from 'react';
import { Provider } from 'react-redux' 
import {  store } from './store/blinkitstore.jsx';
import { Cart } from './components/cart.jsx';
export const Waiter_1= createContext()
createRoot(document.getElementById('root')).render(
 
    <Provider store={store}>
     
     <PrimeReactProvider value={{ unstyled: false }}>
      <BrowserRouter> 
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/recipe/:id" element={<Recipe />} />
      <Route path="*" element={<TemplateDemo />} />
    </Routes>
  </BrowserRouter>,
    </PrimeReactProvider>
    </Provider>
     

) 