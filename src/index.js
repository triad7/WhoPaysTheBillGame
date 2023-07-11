import React from 'react';
import ReactDOM from 'react-dom/client';
import { MyProvider } from './context';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyProvider>
    <App />
    </MyProvider>
    
  </React.StrictMode>
);


