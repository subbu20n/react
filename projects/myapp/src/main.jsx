import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UsersList from './components/UsersList.jsx'
import BirthdayList from './BirthWishes.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/customNavbar.jsx'
import CustomCarousel from './components/customCarousel.jsx'
import { CustomSpinner } from './components/customSpinner.jsx'
import CustomCard from './components/customCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomNavbar/>
    <CustomCarousel/>
    <CustomSpinner/> 
    <CustomCard/>

    <App />
  
  </StrictMode>,
) 
 