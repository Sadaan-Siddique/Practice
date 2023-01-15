import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { UseEffect, useState } from 'react';
import Product from '../Product';
function Others() {
    // React Hooks
    const [icon, setIcon] = useState(0)
    const [inpt, setInpt] = useState('');
    const [arr, setArr] = useState([]);
    // JS
    function inptfunc(e){
        setInpt(e.target.value);
        setArr([inpt])
      }
    function newfunc(){
      console.log(arr);
    }   
    //   UseEffect
      useEffect(newfunc,[icon]);

    let strng = 'Reload';
    return (
        <>
        <Product/>
            <nav>
                <Link style={{ color: 'white', textDecoration: 'none' }} to="/">Home</Link>:
                <Link style={{ color: 'white', textDecoration: 'none' }} to="/about">About</Link>:
                <Link style={{ color: 'white', textDecoration: 'none' }} to="/contact">Contact</Link>:
                <Link style={{ color: 'white', textDecoration: 'none' }} to="/others">Others</Link>
            </nav>
            <h1>
                Others
            </h1>
            <input type="text" onChange={inptfunc} />
            <button onClick={() => {
                setIcon(icon + 1 * 2);
                console.log(strng.replace('Reload', 'Component Reload'), icon);
            }}>
                Click
            </button>
            <p>
                {icon+' '+inpt}

            </p>
        </>
    )
}

export default Others