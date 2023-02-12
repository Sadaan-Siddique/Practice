import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import useAuth from '../hooks/authHook';
function Axios() {
    // React Hooks
   const { git } = useAuth();
    // JS
    
    return (
        <>
            <div>Axios</div>
            {git.map((item) => {
                return (
                    <>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={item.avatar_url} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.login}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href={item.html_url} target={'_blank'} className="btn btn-primary">Go somewhere</a>
                                <Link to={`/axios/${item.login}`} className="btn btn-success mt-1">Go somewhere</Link>
                            </div>
                        </div>
                    </>
                )
            })}
        </>

    )
}

export default Axios