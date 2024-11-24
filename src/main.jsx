import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import  ThemeProvider from './context/ThemeContext'; // Import ThemeProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>  {/* Wrap the App with ThemeProvider */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
