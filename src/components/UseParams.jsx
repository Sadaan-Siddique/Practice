import React from 'react'
import { useParams } from 'react-router-dom'
function UseParams() {
    let paramsData = useParams();
    console.log(paramsData);
    return (
        <>
            <div>UseParams</div>
            <h1>{paramsData.params}</h1>
        </>
    )
}

export default UseParams