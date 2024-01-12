import { Outlet, Navigate, useLocation } from "react-router-dom";


import React from 'react'
import { useSelector } from "react-redux";

const ProtectedRoute = () => {

    const {token} = useSelector(state => state.user)
    console.log(token);
    const location = useLocation()

    return (
      token ? <Outlet /> : <Navigate to={"auth/login"} state={{ from: location }} replace/>
    )
}

export default ProtectedRoute