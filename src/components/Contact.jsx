import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from 'react';
import axios from 'axios'
import useAuth from '../hooks/authHook';
import ClipLoader from "react-spinners/ClipLoader";

function Contact() {
    const [arr, setArr] = useState([]);
    const [editValue , setEditValue] = useState('')
    const [editCheck, setEditCheck] = useState(false);
   const inptValue = useRef();
    const btnfunc = () => {
        if (inptValue.current.value === '') {
            alert('Please Write something')
        } else {
            if (editCheck) {
                 arr[editValue] = inptValue.current.value;
                 setArr(arr)
                 setEditCheck(false)
            } else {
                setArr([...arr, inptValue.current.value])
                console.log(arr)
                inptValue.current.value = '';

            }

        }
    }
    const deletefunc = (index) => {
        let newArr = [...arr]
        newArr.splice(index, 1)
        console.log(newArr)
        setArr(newArr)
    }

    const editfunc = (index) => {
        console.log(index)
        inptValue.current.value = arr[index];
        setEditValue(arr[index])
        setEditCheck(true)
    }

    const deleteAllFunc = () => {
        setArr([]);
    }
    return (
        <>
            <div className='container text-center'>
                <h1>Todo List</h1>
                <input type="text" ref={inptValue} placeholder='Enter Something' className='ps-2 py-1' />
                <button className='btn btn-primary' onClick={btnfunc}>Add</button>
                <ul>
                    {
                        arr.map((item, index) => {
                            return (
                                <>
                                    <li key={index}>{item}
                                        <button onClick={() => { deletefunc(index) }}>Delete</button>
                                        <button onClick={() => { editfunc(index) }}>Edit</button>
                                    </li>
                                </>
                            )
                        })
                    }
                </ul>
                <button onClick={deleteAllFunc}>Delete All</button>
            </div>
        </>
    )
}

export default Contact