import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { UseEffect } from './Practice';
import axios from 'axios';
function AxiosChild() {
    let params = useParams();
    console.log(params);
    let url = `https://api.github.com/users/${params}`
    useEffect(() => {
        axios.get(url).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <>
            <div>AxiosChild</div>
            <h1>{params.urlData}</h1>
        </>
    )
}

export default AxiosChild