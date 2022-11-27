import React from 'react'
import { Route, Routes } from 'react-router-dom'
import History from '../pages/history'
import Home from '../pages/home'
import Login from '../pages/login'
import Register from '../pages/register'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/history" element={<History />} />
            <Route path="/home" element={<Home />} />

            <Route path="*" element={<Login />} />
        </Routes>
    )
}
