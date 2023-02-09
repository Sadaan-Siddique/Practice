import React from 'react'
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from 'react';
import axios from 'axios'
function Contact() {
    // use State
    const [num, setNum] = useState(0);
    // use Ref
    const inptEmail = useRef();
    const inptPassword = useRef();

    function submitfunc(e) {
        e.preventDefault();
        console.log(inptEmail.current.value);
        console.log(inptPassword.current.value);
        inptEmail.current.value = ' ';
        inptPassword.current.value = ' ';
        let url = 'https://comfortable-gold-belt.cyclic.app/signup';
        axios.post(url, data, { headers }).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        });
    }
    return (
        <>
            <form className='form text-center mt-5 container'>
                <label>Email :</label><input ref={inptEmail} className='form-control ps-2 py-1' type="text" placeholder='Type Email' />
                <label>Password :</label><input ref={inptPassword} className='form-control ps-2 py-1' type="text" placeholder='Type Password' />
                <button type='submit' onClick={submitfunc}>Submit</button>
            </form>
        </>
    )
}

export default Contact