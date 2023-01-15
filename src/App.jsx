import React from 'react';
import { useState } from 'react';
import { UseEffect } from './components/Practice';
import './app.css'
import { Link } from "react-router-dom";
function App() {
  // React Hooks

  // JS

  // Html
  return (
    <>
      <nav>
        <Link style={{color:'white',textDecoration:'none'}}  to="/">Home</Link>:
        <Link style={{color:'white',textDecoration:'none'}} to="/about">About</Link>:
        <Link style={{color:'white',textDecoration:'none'}} to="/contact">Contact</Link>:
        <Link style={{color:'white',textDecoration:'none'}} to="/others">Others</Link>
      </nav>
      <UseEffect />

    </>
  );
}
export default App; 