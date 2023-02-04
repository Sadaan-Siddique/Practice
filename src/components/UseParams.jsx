import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
function UseParams() {
    // use State
       
    // use Effect
    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${paramsData}`).then(
            (res) => {
                console.log(res.data);
            }
        ).catch((err) => { console.log(err) });
    }, []);
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