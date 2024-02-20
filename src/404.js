import React from 'react';
import ReactDOM from 'react-dom/client';
import NotFound from './components/NotFound.js';
import { ThemeProvider } from './components/ThemeContext';

import './css/notfound.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider>
        <NotFound />   
      </ThemeProvider>
  </React.StrictMode>
);
