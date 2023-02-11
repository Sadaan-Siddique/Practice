import React, { useContext } from "react";
import ContextAuth from "../context/AuthContext";
const useAuth = () => {
        return (
            useContext(ContextAuth)
        )
}

export default useAuth