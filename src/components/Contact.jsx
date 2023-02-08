import React from 'react'
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from 'react';
function Contact() {
// use State
    const [ num , setNum ] = useState(0);
    function submitfunc(e){
        e.preventDefault();
        setNum(num + 1)
        let numb = 0;
        numb += 1
        console.log('Clicked'+' '+num+' '+numb);
        // alert('Submit Kro');
    }
    return (
        <>
            <div className='text-center mt-5'>
                <label>Email :</label><input className='ps-2 py-1' type="text" />
                <label>Password :</label><input className='ps-2 py-1' type="text" />
                <button type='submit' onClick={submitfunc}>Submit</button>
            </div>
        </>
    )
}

export default Contact