import React from 'react'
import { Link } from "react-router-dom";
import AboutChild from './AboutChild';
import { useEffect, useState } from 'react';
function About() {
    // React Hooks
    const [inptData, setInptData] = useState([]);
    const [variable, setVariable] = useState('');
    const [newvar, setNewVar] = useState([]);
    // JS
    function inptVlue(e) {
        setVariable(e.target.value);
    }
    function btn() {
        setInptData([...inptData, variable]);
    }
    useEffect(() => {
        console.log(arr[3].name);
    }, [inptData]);
    function btnTwo() {
        inptData.splice(-1)
        setInptData (inptData)
        console.log(inptData);
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
        return ( <AboutChild data={item} />)
    })
    // HTML
    return (
        <>     
            <input type="text" onChange={inptVlue} />
            <button onClick={btn}>Add </button>
            <button onClick={btnTwo}>Subtract </button>

            <table border={'5px'} cellPadding={'5px'} cellSpacing={'5'} align={'center'}>
                <caption>Table</caption>
                <tr>
                    <td>S.No</td>
                    <td>Names</td>
                    <td>Attendence</td>
                    <td>Obtained Marks</td>
                </tr>
                {newArr}
                </table>

            
            <footer>
                <div class="social-icons">
                    <a href="#">
                        <i class="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                        <i class="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i class="fa fa-linkedin"></i>
                    </a>
                </div>
                <p>Copyright ©2022 My Website</p>
            </footer>

        </>
    )
}

export default About