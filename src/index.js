import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import Practice from './components/Practice';
import Contact from './components/Contact';
import About from './components/About';
import Others from './components/Others';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/others" element={<Others />} />
      </Routes>
    </BrowserRouter>


  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
