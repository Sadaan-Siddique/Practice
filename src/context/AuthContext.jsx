import React, { createContext, useState ,useEffect} from "react";
import axios from "axios";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {

    const [auth, setAuth] = useState('hello')
    const [git, setGit] = useState('hello')
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
    return (
        <>
            <AuthContext.Provider value={{ auth, setAuth ,git}}>
                {children}
            </AuthContext.Provider>
        </>
    )
}
export default AuthContextProvider;