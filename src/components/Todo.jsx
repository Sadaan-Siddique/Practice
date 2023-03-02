import React, { useState, useEffect, useRef } from 'react'
import '../app.css';
function Todo() {
    const [inptData, setInptData] = useState('');
    const [forNewInptData, setForNewInptData] = useState('');
    const [secondInptData, setSecondInptData] = useState('');
    const [checked, setChecked] = useState(false);
    const [secondArr, setSecondArr] = useState([]);
    const [arr, setArr] = useState([]);
    const inptValue = useRef();

    const btnfunc = (e) => {
        if (inptValue.current.value === '') {
            alert('Type Some Value String');
        } else {
            e.preventDefault()
            setInptData(inptValue.current.value);
        }
    }

    useEffect(() => {
        setArr([...arr, inptData])
        inptValue.current.value = ''
    }, [inptData])

    const deletefunc = (index) => {
        let newArr = arr.filter((item, ind) => {
            return (ind !== index)
        })
        setArr(newArr)
    }

    const editfunc = (item, index) => {
        let newInptData = arr.filter((item, ind) => {
            return (ind === index)
        })
        console.log(newInptData);
        setForNewInptData(newInptData);
        // setNewInptData(newInptData)
    }

    const checkedfunc = (item,index) =>{
          let a = arr[index];
          console.log(a);
    }                                          
    return (
        <>

            <div className='todo-div text-center container justify-content-center'>
                <h1>Todo List</h1>
                <div className=''>
                    <input type="text" ref={inptValue} className='py-1 ps-2' placeholder='Type Something' />
                    <button onClick={(e)=>{btnfunc(e)}} className='btn btn-outline-dark'>Add</button>
                </div>
                <ul>
                    {arr.map((item, index) => {
                        return (
                            <div key={index}>
                                <p>{index + 1}. </p>
                                <li className={checked }>{item}</li>
                                
                                <div>
                                    <svg onClick={() => { deletefunc(index) }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                    </svg>
                                    <svg onClick={() => { editfunc(item, index) }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                    </svg>
                                    <svg onClick={()=>{checkedfunc(item,index)}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                    </svg>
                                </div>
                            </div>
                        )
                    })}
                </ul>
            </div>
            <i class="bi bi-0-circle"></i>
            <input type="text" className='py-1 ps-2' onChange={(e)=>{
                    setSecondInptData(e.target.value);
                    setSecondArr([...secondArr,secondInptData])
                    // console.log(secondInptData)
            }} value={forNewInptData} placeholder='Edit' />
        </>
    )
}

export default Todo