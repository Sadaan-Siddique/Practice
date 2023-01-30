import React from 'react';
import { UseEffect } from './components/Practice';
import './app.css'
import Axios from './components/Axios';
import AxiosCoinGecko from './components/AxiosCoinGecko';
import { Link } from "react-router-dom";
function App() {
  // React Hooks

  // JS

  // Html
  return (
    <>
    <AxiosCoinGecko/>
    <hr />
    <Axios/>
      {/* <nav>
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/">Home</Link>:
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/about">About</Link>:
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/contact">Contact</Link>:
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/others">Others</Link>
      </nav>
      <UseEffect /> */}

    </>
  );
}
export default App; 