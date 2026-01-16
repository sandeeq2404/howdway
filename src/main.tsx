import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/600.css';
import { HelmetProvider } from 'react-helmet-async'; // <--- You imported it here


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>  {/* <--- 1. ADD THIS WRAPPER */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider> {/* <--- 2. CLOSE IT HERE */}
  </React.StrictMode>
);