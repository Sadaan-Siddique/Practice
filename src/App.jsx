import React from 'react';
import { useState } from 'react';
import { UseEffect } from './components/Practice';
import { Link } from "react-router-dom";
function App() {
  // React Hooks

  // JS

  // Html
  return (
    <>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          color:'black'
        }}
      >
        <Link to="/invoices">Invoices</Link> <br />
        <Link to="/expenses">Expenses</Link>
      </nav>
      <UseEffect />

    </>
  );
}
export default App; 