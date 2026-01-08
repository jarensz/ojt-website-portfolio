import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';   // reset / base styles (optional)
import './App.css';     // ← THIS must include your :root and .dark rules
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
