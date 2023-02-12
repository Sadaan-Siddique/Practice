import React, { useEffect, useState, useRef } from 'react'
import './Practice.css'
function Practice() {
    // React Hooks
    const [inptData, setInptData] = useState([]);
    const [inptArr, setInptArr] = useState([]);
    const inptText = useRef();
    // js
    const btnfunc = (e) => {
        if (inptText.current.value == '') {
            alert('Type some Value');
        } else {
            e.preventDefault();
            setInptData(inptText.current.value)
        }
    }
    const editfunc = () => {
        
    }
    useEffect(() => {
        console.log(inptArr);
        setInptArr([...inptArr, inptData])
        inptText.current.value = '';
        // setInptData('');
    }, [inptData]);
    return (
        <>

            <div className='container w-50 text-center mt-4 ps-5 pe-5'>
                <h1>Todo List In React  </h1>
                <input ref={inptText} type="text" className='ps-3 w-100 text-center py-1 mt-3' />
                <button onClick={btnfunc} className='ms-1 my-2 btn btn-outline-dark fw-bold'>Click</button>
                <table className='table border'>
                    <thead>
                        <tr>
                            <th className='h3 fw-bold'>List</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inptArr.map((item) => {
                            return (
                                <>
                                    {/* <li>{item.inptObj.inptData}</li> */}
                                    <tr>
                                        <td onClick={editfunc}>{item}</td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}









export function UseEffect() {
    // State Variables
    return (
        <>
            <h3>This is "useEffect(component) Named Export from './components/Practice' "</h3>
        </>
    )
}

export default Practice