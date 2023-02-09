import React from 'react'
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from 'react';
import axios from 'axios'
function Contact() {
    // use State
    const [num, setNum] = useState(0);
    const [statusMsg, setStatusMsg] = useState("");
    // use Ref
    const inptEmail = useRef();
    const inptPassword = useRef();

    function submitfunc(e) {
        e.preventDefault();
        console.log(inptEmail.current.value);
        console.log(inptPassword.current.value);
        let userData = {
            email : inptEmail.current.value,
            password : inptPassword.current.value
        }

        let url = 'https://comfortable-gold-belt.cyclic.app/signup';
        axios.post(url, userData).then((res)=>{
            setStatusMsg('You Have Signed in Successfully');
            console.log(res);
        }).catch((err)=>{
            setStatusMsg('You have not signed in');
            console.log(err);
        });

        inptEmail.current.value = ' ';
        inptPassword.current.value = ' ';
    }
    return (
        <>
            <form className='form text-center mt-5 container'>
                <h1 className='text-center display-1 fw-bold'>Login Form</h1>
                <h1 className='text-center display-3'>{statusMsg}</h1>
                <label>Email :</label><input ref={inptEmail} className='form-control ps-2 py-1' type="text" placeholder='Type Email' />
                <label>Password :</label><input ref={inptPassword} className='form-control ps-2 py-1' type="text" placeholder='Type Password' />
                <button type='submit' onClick={submitfunc}>Submit</button>
            </form>
        </>
    )
}

export default Contact