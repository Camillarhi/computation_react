import React, { useEffect, useState } from 'react';
import axiosService from '../services/axiosService';

export default function Authorize({ authorize, notAuthorized }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (axiosService.Auth.isAuth()) {
            console.log(axiosService.Auth.isAuth())
            setIsAuthenticated(true)
        } else {
            console.log(axiosService.Auth.isAuth())
            setIsAuthenticated(false)
        }
    }, [isAuthenticated])
    return (
        <>
            {isAuthenticated ? authorize : notAuthorized}
        </>
    )
}
