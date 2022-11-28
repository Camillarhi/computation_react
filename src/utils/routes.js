import React from 'react'
import { Route, Routes } from 'react-router-dom'
import History from '../pages/history'
import Home from '../pages/home'
import Login from '../pages/login'
import Register from '../pages/register'
import ProtectedRoutes from './protectedRoutes'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoutes />}>
                <Route path="/history" element={<History />} />
                <Route path="/home" element={<Home />} />
            </Route>

            <Route path="*" element={<Login />} />
        </Routes>
    )
}
