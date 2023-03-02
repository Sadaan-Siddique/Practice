import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
function AxiosChild() {
    // React Hooks
    const [ user , setUser ] = useState([]);


    let params = useParams();
    console.log(params);

    let url = `https://api.github.com/users/${params.urlData}`

    useEffect(() => {
        axios.get(url).then((res) => {
            console.log(res.data)
            setUser(res.data);

        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <>
            <div className='text-center'>
                <p>AxiosChild</p>
                <img className='w-25' src={user.avatar_url} alt="User Img" />
                <h1>{user.name}({user.login})</h1>
                <h5>I lives in '<b>{user.location}</b>'</h5>
                <a className='fw-bold btn btn-outline-dark' href={user.html_url} target={'_blank'}>Git Account</a>
            </div>
        </>
    )
}

export default AxiosChild