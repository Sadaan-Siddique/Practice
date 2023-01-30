import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function Axios() {
    // React Hooks
    const [user, setUser] = useState([]);
    // JS
    axios.get('https://api.github.com/users').then(
        (res) => {
            setUser(res.data)
            // console.log(res);
        }
    ).catch(
        (err) => {
            console.log(err)
        }
    )
    return (
        <>
            <div>Axios</div>
            {user.map((item) => {
                return (
                    <>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={item.avatar_url} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.login}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href={item.html_url} target={'_blank'} className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </>
                )
            })}
        </>

    )
}

export default Axios