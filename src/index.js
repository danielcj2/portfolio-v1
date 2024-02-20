import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';

import './css/index.css'

const fourofour = ReactDOM.createRoot(document.getElementById('fourofour'));
fourofour.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />   
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
