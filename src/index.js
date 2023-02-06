import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
 import RouteSwitch from './RouteSwitch';
 import { initializeApp } from "firebase/app"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);



const firebaseConfig = {
  apiKey: "AIzaSyA0iNVhiUigHDDTyhdXq8wDnEe3MGAO7_w",
  authDomain: "findme-6821c.firebaseapp.com",
  projectId: "findme-6821c",
  storageBucket: "findme-6821c.appspot.com",
  messagingSenderId: "590476702975",
  appId: "1:590476702975:web:10c9bb606b4855c5c308ca",
  measurementId: "G-5Z5BWJRNYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
reportWebVitals();
