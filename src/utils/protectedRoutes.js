import React, { useEffect, useState } from 'react';
import axiosService from '../services/axiosService';

export default function ProtectedRoutes({ authorize, notAuthorized }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (axiosService.Auth.isAuth()) {
            setIsAuthenticated(true)
        } else {
            setIsAuthenticated(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            {isAuthenticated ? authorize : notAuthorized}
        </>
    )
}
