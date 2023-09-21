import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { initializeApp } from "firebase/app";
import App from './App.jsx'
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyBdCe9vlQfShSV5UZ7dqXkNrc5Sp49P_48",
  authDomain: "react-coder-fe34b.firebaseapp.com",
  projectId: "react-coder-fe34b",
  storageBucket: "react-coder-fe34b.appspot.com",
  messagingSenderId: "1049212459634",
  appId: "1:1049212459634:web:55319c47096d82ff2100eb"
};

initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
