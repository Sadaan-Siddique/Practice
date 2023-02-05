import React from 'react';
import { UseEffect } from './components/Practice';
import './app.css'
import Axios from './components/Axios';
import AxiosCoinGecko from './components/AxiosCoinGecko';
import { Link } from "react-router-dom";
import { Routes, Route, } from "react-router-dom";
import Practice from './components/Practice';
import Contact from './components/Contact';
import About from './components/About';
import Others from './components/Others';
import CoinData from './components/CoinData';
import UseParams from './components/UseParams';
import AxiosChild from './components/AxiosChild';
function App() {
  // React Hooks

  // JS

  // Html
  return (
    <>
      <nav>
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/">Home</Link>:
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/about">About</Link>:
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/contact">Contact</Link>:
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/others">Others</Link>:
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/coin">CoinGecko</Link>:
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/axios">GitAPI</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Practice />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/others" element={<Others />} />
        <Route path="/coin" element={<AxiosCoinGecko />} />
        <Route path="/data" element={<CoinData />} >
          <Route path=":params" element={<UseParams />} />
        </Route>
        <Route path="/axios" element={<Axios />} />
        <Route path="/axios/:urlData" element={<AxiosChild />} />
        <Route path="*" element={<div className='text-center mt-5'><h1>Invalid URL </h1><h3>404 Page not found</h3></div>} />
      </Routes>


    </>
  );
}
export default App; 