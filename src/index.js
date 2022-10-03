import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/* import { initializeApp } from 'firebase/appmundial'; */


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYh1tA5BbvNYeIjtbczgPNFXJNVBhy3tE",
  authDomain: "appmundial-a53b7.firebaseapp.com",
  projectId: "appmundial-a53b7",
  storageBucket: "appmundial-a53b7.appspot.com",
  messagingSenderId: "110964388677",
  appId: "1:110964388677:web:3e6ea3b8bf62fb6930c42c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
