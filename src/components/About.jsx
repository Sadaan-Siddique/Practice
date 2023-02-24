import React from 'react'
import { Link,useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import useAuth from '../hooks/authHook';
import ClipLoader from "react-spinners/ClipLoader";
function About() {
    // React Hooks
    const [phone, setphone] = useState('')
    const [password, setPassword] = useState('')
    const [statusMsg, setStatusMsg] = useState('')
    let [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    // JS
    const { msg, setMsg, API_URL } = useAuth()
    
    const submitfunc = (e) => {
        e.preventDefault();
        setLoading(true)
        let obj = {
            phone,
            password
        };
        console.log(phone, password)
        let url = API_URL + '/signup';
        axios.post(url, obj).then((res) => {
            setLoading(false)
            setMsg(false);
            setStatusMsg('You have Signed in Successfully')
            console.log(res)
            navigate('/contact')
        }).catch((err) => {
            setLoading(false)
            setMsg(false)
            setStatusMsg('Sorry')
            console.log(err)
            navigate('/about')
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
                />) : (<h1>'Sign In'</h1>)}
                <h1>{statusMsg}</h1>
                <div className='mt-3'>
                    <label>Phone Number :  </label>
                    <input type="number" value={phone} placeholder='Phone number' className='px-2 py-1' onChange={(e) => {
                        setphone(e.target.value);
                        parseInt(phone);
                    }} />
                </div>
                <div className='mt-3'>
                    <label>Password :  </label>
                    <input type="password" value={password} placeholder='Password' className='px-2 py-1' onChange={(e) => {
                        setPassword(e.target.value);
                    }} />
                </div>
                <div>
                    <button type='submit' className='mt-3 fw-bold btn btn-dark btn-outline-danger' onClick={(e)=>{submitfunc(e)}}>Submit</button>
                </div>
                <div className='mt-3'>
                    <p>Phone Number : {phone}</p>
                    <p>Password : {password}</p>
                </div>
            </div>
        </>
    )
}

export default About