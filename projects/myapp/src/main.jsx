
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

// Correct imports with proper capitalization
import UsersList from './components/UsersList.jsx';          // lowercase 'u' matches folder
import BirthdayList from './components/BirthWishes.jsx';     // capital W matches file
import CustomNavbar from './components/customNavbar.jsx';    // PascalCase for component
import CustomCarousel from './components/customCarousel.jsx'; // corrected spelling
import { CustomSpinner } from './components/customSpinner.jsx';
import CustomCard from './components/customCard.jsx';
import Application from './src/Application.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Application />
  </StrictMode>
);
 