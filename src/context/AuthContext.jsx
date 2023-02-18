import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [msg, setMsg] = useState(false)
    const [auth, setAuth] = useState('hello')
    const [git, setGit] = useState('hello')
    // const [loginArr, setLoginArr] = useState([]);
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
    let API_URL = 'https://comfortable-gold-belt.cyclic.app';
    return (
        <>
            <AuthContext.Provider value={{ auth, setAuth, git,msg,setMsg,API_URL  }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}
export default AuthContextProvider;