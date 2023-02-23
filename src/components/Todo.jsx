import React, { useState, useEffect, useRef } from 'react'

function Todo() {
    const [ inptData , setInptData] = useState('');
    const [arr , setArr] = useState([]);
    const inptValue = useRef();
    const btnfunc = (e) => {
         e.preventDefault();
         setInptData(inptValue.current.value);
         setArr([...arr,inptData]);
         console.log(arr);
        }
    return (
        <>

            <div className='container justify-content-center'>
                <div className=''>
                    <input type="text" ref={inptValue} className='py-1 ps-2' placeholder='Type Something' />
                    <button onClick={btnfunc} className='btn btn-outline-dark'>Add</button>
                </div>
                <div>
                    <input type="text" className='py-1 ps-2' placeholder='Edit' />
                </div>
            </div>
        </>
    )
}

export default Todo