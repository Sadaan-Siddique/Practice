import React, { useEffect, useState, useRef } from 'react'
import './Practice.css'
function Practice() {
    // React Hooks
    const [inptData, setInptData] = useState([]);
    const [inptArr, setInptArr] = useState([]);
    const inptText = useRef();
    // js
    const btnfunc = (e) => {
        e.preventDefault();
        setInptData(inptText.current.value)
    }
    useEffect(() => {
        console.log(inptArr);
        setInptArr([...inptArr, inptData])
        inptText.current.value = '';
        // setInptData('');
    }, [inptData]);
    return (
        <>
            <div className='container text-center mt-5'>
                <input ref={inptText} type="text" className='p-1' />
                <button onClick={btnfunc} className='btn btn-outline-dark fw-bold'>Click</button>
                <table className='table'>
                    <tbody>
                        {inptArr.map((item) => {
                            return (
                                <>
                                    {/* <li>{item.inptObj.inptData}</li> */}
                                    <tr>
                                        <td>{item}</td>
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