import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./css/main.css"


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxywrnEQFWoFBb66hPpXLrp_U91frqvjU",
  authDomain: "ecommerce-c11f8.firebaseapp.com",
  projectId: "ecommerce-c11f8",
  storageBucket: "ecommerce-c11f8.appspot.com",
  messagingSenderId: "16888992277",
  appId: "1:16888992277:web:d9dea75f780c59abdd741c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
