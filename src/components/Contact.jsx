import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from 'react';
import axios from 'axios'
import useAuth from '../hooks/authHook';
import ClipLoader from "react-spinners/ClipLoader";

function Contact() {
    let [loading, setLoading] = useState(false);
    // use State
    const [num, setNum] = useState(0);
    const [statusMsg, setStatusMsg] = useState("");
    // use Ref
    const inptPhone = useRef();
    const inptPassword = useRef();
    const inptText = useRef();
    // Auth Hook
    const { auth, setAuth, API_URL } = useAuth();
    // use Navigate
    const navigate = useNavigate();
    //  JS
    function submitfunc(e) {
        setLoading(true)
        e.preventDefault();
        parseInt(inptPhone)
        console.log(inptPhone.current.value);
        console.log(inptPassword.current.value);
        let userData = {
            phone: inptPhone.current.value,
            password: inptPassword.current.value
        }

        let url = API_URL + '/login';
        axios.post(url, userData).then((res) => {
            setStatusMsg('You Have Logged in Successfully');
            console.log(res);
            setLoading(false)
            navigate('/')
        }).catch((err) => {
            setStatusMsg('Not Logged in');
            console.log(err);
            setLoading(false)
            navigate('/about')
        });

        inptPhone.current.value = ' ';
        inptPassword.current.value = ' ';
    }
    return (
        <>
            <form className='form text-center mt-5 container'>
                    {loading ? (<ClipLoader
                        loading={loading}
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />) : (<h1>'Log in'</h1>)}
                <h1>{statusMsg}</h1>
                <h1 className='text-center display-3 fw-bold'>Login Form</h1>
                <h1 className='text-center display-5'>{statusMsg}</h1>
                <label>Phone Number :</label><input ref={inptPhone} className='form-control ps-2 py-1 border-1 border-primary ' type="number" placeholder='Type Phone Number' />
                <label>Password :</label><input ref={inptPassword} className='form-control ps-2 py-1 border-1 border-primary' type="password" placeholder='Type Password' />
                <button type='submit' className='btn btn-outline-primary border-dark text-dark mt-3 fw-bold' onClick={submitfunc}>Submit</button>
                {/* Phone Number : {inptPhoneNumber} */}
                {/* Passsword : {inptPassword} */}
            </form>
        </>
    )
}

export default Contact