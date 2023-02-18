import React from 'react'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import useAuth from '../hooks/authHook';
function About() {
    // React Hooks
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    // JS
    const { setLoginObj } = useAuth()
    const submitfunc = (e) => {
        e.preventDefault();
        setLoginObj({
            phoneNumber,
            password
        });
        console.log(phoneNumber,password)
    }
    // HTML
    return (
        <>
            <div className='container mt-4 text-center'>
                <div className='mt-3'>
                    <label>Phone Number :  </label>
                    <input type="text" value={phoneNumber} placeholder='Phone number' className='px-2 py-1' onChange={(e) => {
                        setPhoneNumber(e.target.value);
                    }} />
                </div>
                <div className='mt-3'>
                    <label>Password :  </label>
                    <input type="password" value={password} placeholder='Password' className='px-2 py-1' onChange={(e) => {
                        setPassword(e.target.value);
                    }} />
                </div>
                <div>
                    <button type='submit' className='mt-3 fw-bold btn btn-dark btn-outline-danger' onClick={submitfunc}>Submit</button>
                </div>
                <div>
                    <p>Phone Number : {phoneNumber}</p>
                    <p>Password : {password}</p>
                </div>
            </div>
        </>
    )
}

export default About