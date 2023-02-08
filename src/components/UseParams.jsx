import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
function UseParams() {
    // use State
       const [user, setUser ] = useState([]);
    // use Effect
    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${paramsData.params}`).then(
            (res) => {
                console.log(res.data);
                setUser(res.data)
            }
        ).catch((err) => { console.log(err) });
    }, []);
    let paramsData = useParams();
    console.log(paramsData);
    return (
        <>
            <div>UseParams</div>
            <h1>{paramsData.params}</h1>
            <h2 className='text-center'>{user.symbol}</h2>
        </>
    )
}

export default UseParams