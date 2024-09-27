import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBgmG4Os53L7Yw2vq7a7t3rAC8F_7WnYCE",
  authDomain: "proyectofinalreact-barnesjulio.firebaseapp.com",
  projectId: "proyectofinalreact-barnesjulio",
  storageBucket: "proyectofinalreact-barnesjulio.appspot.com",
  messagingSenderId: "817824692403",
  appId: "1:817824692403:web:08c203a0bee34a7ac2d8c6"
};


const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
