import { Outlet, Navigate, useLocation } from "react-router-dom";


import React from 'react'
import { useSelector } from "react-redux";

const AuthRoute = () => {

    const {token} = useSelector(state => state.user)
    const location = useLocation()

    return (
      !token ? <Outlet /> : <Navigate to={"/user"} state={{ from: location }} replace/>
    )
}

export default AuthRoute