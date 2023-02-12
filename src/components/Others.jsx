import React, { createContext,useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import useAuth from '../hooks/authHook';
function Others() {
    // React Hooks
     const {auth,git} = useAuth();
    // JS
    return (
        <>
        <h1>{auth}</h1>
        <h4>{git[0].login}</h4>
        </>
    )
}

export default Others