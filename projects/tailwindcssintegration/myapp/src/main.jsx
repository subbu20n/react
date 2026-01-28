import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import Timer from './components/TimerApp.jsx'
import Parent from './components/parent.jsx'
import { createContext } from 'react'; 

export const Snacks = createContext() 

createRoot(document.getElementById('root')).render(
  
  <Snacks value="snacks">  
   <Parent snacks="chips"/>
   {/* //<Timer /> */}
  </Snacks> 
)
  