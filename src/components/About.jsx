import React from 'react'
import { Link } from "react-router-dom";
import AboutChild from './AboutChild';
import { useEffect , useState } from 'react';
function About() {
    // React Hooks
    
    // JS
     let arr = [
        {
            heading : 'S.No',
            names : 'Names',
            attendence : 'Attendence',
            marks : 'Obtained Marks'
        },
        {
            firstStudent : 'Muhammad',
            secondStudent : 'Sadaan',
            thirdStudent : 'Siddique',
            fourthStudent : 'Irfan'
        }
     ]
     let newArr = arr.map((item)=>{
        return <AboutChild data={item}/> ;
     })
    // HTML
    return (
        <>
            <nav>
                <Link style={{ color: 'white', textDecoration: 'none' }} to="/">Home</Link>:
                <Link style={{ color: 'white', textDecoration: 'none' }} to="/about">About</Link>:
                <Link style={{ color: 'white', textDecoration: 'none' }} to="/contact">Contact</Link>:
                <Link style={{ color: 'white', textDecoration: 'none' }} to="/others">Others</Link>
            </nav>
            {newArr}    
            
        </>
    )
}

export default About