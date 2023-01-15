import React from 'react'
import { Link } from "react-router-dom";
import { UseEffect, useState } from 'react';
function Others() {
    // React Hooks
    const [icon, setIcon] = useState(0)
    const [inptValue , setInptValue] = useState(""); 
    const [arr , setArr] = useState([]);    
    // JS
    function inptfunc(e){
        setInptValue(e.targetvalue);
        
        console.log(inptValue);
    }
    let strng = 'Reload';
    console.log('Component Reload');
    return (
        <>
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
            <button onClick={()=>{
                setIcon(icon + 1*2);
                console.log(strng.replace('Reload','Component Reload'),icon);
            }}>
                Click
            </button>
            <p>
                {icon},{inptValue}

            </p>
        </>
    )
}

export default Others