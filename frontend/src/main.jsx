import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App';
const clientid ='940349131020-s57f7m14qucq0d4cdb1bpaa6v77s3fv9.apps.googleusercontent.com'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId={clientid}>
      <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);