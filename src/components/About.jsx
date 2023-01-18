import React from 'react'
import { Link } from "react-router-dom";
import AboutChild from './AboutChild';
import { useEffect, useState } from 'react';
function About() {
    // React Hooks
    const [inptData, setInptData] = useState([]);
    const [variable, setVariable] = useState('');
    // JS
    function inptVlue(e) {
        setVariable(e.target.value);
    }
    function btn() {
        setInptData([...inptData,variable]);
    }
    function btnTwo(){
        inptData.pop();
    }
    let arr = [
        {
            serialNum: '1',
            name: 'Muhammad',
            attendence: '80%',
            obtainedNum: '95'
        },
        {
            serialNum: '2',
            name: 'Sadaan',
            attendence: '85%',
            obtainedNum: '96'
        },
        {
            serialNum: '2',
            name: variable,
            attendence: '85%',
            obtainedNum: '96'
        },
        {
            serialNum: '2',
            name: inptData,
            attendence: '85%',
            obtainedNum: '96'
        }
    ]
    let newArr = arr.map((item) => {
        return <AboutChild data={item} />;
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
            <input type="text" onChange={inptVlue} />
            <button onClick={btn}>Add </button>
            <button onClick={btnTwo}>Subtract </button>
            {newArr}

        </>
    )
}

export default About