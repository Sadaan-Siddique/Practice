import React, { useState, useEffect, useRef } from 'react'

function Todo() {
    const [inptData, setInptData] = useState('');
    const [secondInptData, setSecondInptData] = useState('');
    const [arr, setArr] = useState([]);
    const inptValue = useRef();
    const btnfunc = (e) => {
        e.preventDefault();
        setInptData(inptValue.current.value);
        console.log(arr);
    }
    useEffect(() => {
        setArr([...arr, inptData]);

    }, [inptData])
    const deletefunc = (index) => {
       let newArr =  arr.filter((item,ind) => {
            return (ind != index)

        })
        setArr(newArr)
    }
    return (
        <>

            <div className='container justify-content-center'>
                <div className=''>
                    <input type="text" ref={inptValue} className='py-1 ps-2' placeholder='Type Something' />
                    <button onClick={btnfunc} className='btn btn-outline-dark'>Add</button>
                </div>
                <ol>
                    {arr.map((item, index) => {
                        return (
                            <div className='d-flex' key={index}>
                                <li>{item}</li>
                                <button onClick={() => { deletefunc(index) }}>Delete</button>
                                <input type="text" className='py-1 ps-2' value={item} placeholder='Edit' />
                
                            </div>
                        )
                    })}
                </ol>
                {/* <div>
                    <input type="text" className='py-1 ps-2' value={''} placeholder='Edit' />
                </div> */}
            </div>
        </>
    )
}

export default Todo