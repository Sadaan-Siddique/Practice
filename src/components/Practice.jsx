import React, { useEffect, useState, useRef } from 'react'
import Todo from './Todo';
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
        // props(`Hello${<>
        //     <input type="text" />
        //     <button>Click</button>
        // </>}`)
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
                                        <td className="" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" style={{ cursor: 'pointer' }}>{item}</td>
                                    </tr>
                                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog bg-light rounded">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Edit List</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <form>
                                                        <div className="mb-3">
                                                            <label htmlFor="recipient-name" className="col-form-label">Selected List:</label>
                                                            <input type="text" className="mt-4 form-control" id="recipient-name" placeholder={inptData}/>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div style={{ marginTop: "100px" }} className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-primary">Send message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <Todo/>


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