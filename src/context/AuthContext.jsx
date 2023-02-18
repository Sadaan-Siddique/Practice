import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {

    const [auth, setAuth] = useState('hello')
    const [git, setGit] = useState('hello')
    // const [loginArr, setLoginArr] = useState([]);
    const [loginObj, setLoginObj] = useState({});
    useEffect(() => {
        axios.get('https://api.github.com/users').then(
            (res) => {
                setGit(res.data)
                console.log(res.data);
            }
        ).catch(
            (err) => {
                console.log(err)
            }
        )
    }, [])
    let url = 'https://comfortable-gold-belt.cyclic.app/signup';
    axios.post(url,loginObj).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
    return (
        <>
            <AuthContext.Provider value={{ auth, setAuth, git, setLoginObj }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}
export default AuthContextProvider;