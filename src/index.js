import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RouteSwitch from './RouteSwitch';
import {app} from './firebase/firebase'

import {
  getFirestore,
} from 'firebase/firestore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);



// Initialize Firebase
const myApp = app

//Initialize database
const db = getFirestore(app);




reportWebVitals();
