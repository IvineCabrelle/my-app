// index.js (ou index.tsx)
import React from 'react';
import ReactDOM from 'react-dom/client';  // Importation de `createRoot`
import App from './App';

// Créez une racine avec `createRoot`
const root = ReactDOM.createRoot(document.getElementById('root'));

// Utilisation de `root.render` au lieu de `ReactDOM.render`
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
