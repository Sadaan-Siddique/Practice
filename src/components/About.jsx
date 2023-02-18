import React from 'react'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import useAuth from '../hooks/authHook';
import ClipLoader from "react-spinners/ClipLoader";
function About() {
    // React Hooks
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [statusMsg, setStatusMsg] = useState('')
    let [loading, setLoading] = useState(false);
    // JS
    const { msg, setMsg, API_URL } = useAuth()
    const submitfunc = (e) => {
        e.preventDefault();
        let obj = {
            phoneNumber,
            password
        };
        console.log(phoneNumber, password)
        let url = API_URL + '/login';
        axios.post(url, obj).then((res) => {
            setMsg(true);
            setStatusMsg('You have Signed in Successfully')
            console.log(res)
        }).catch((err) => {
            setMsg(false)
            setStatusMsg('Sorry')
            console.log(err)
        })
    }
    // HTML
    return (
        <>
            <div className='container mt-4 text-center'>
               {loading ? (<ClipLoader
                    loading={loading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />) : ('React-Spinners')} 
                {msg ? (<h1>{statusMsg}</h1>) : (<h1>{statusMsg}</h1>)}
                <div className='mt-3'>
                    <label>Phone Number :  </label>
                    <input type="text" value={phoneNumber} placeholder='Phone number' className='px-2 py-1' onChange={(e) => {
                        setPhoneNumber(e.target.value);
                        parseInt(phoneNumber);
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
                <div className='mt-3'>
                    <p>Phone Number : {phoneNumber}</p>
                    <p>Password : {password}</p>
                </div>
            </div>
        </>
    )
}

export default About