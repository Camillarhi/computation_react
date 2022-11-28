import { Outlet } from "react-router-dom";
import Login from "../pages/login";
import axiosService from "../services/axiosService";

export default function ProtectedRoutes() {
    return (
        axiosService.Auth.isAuth() ? <Outlet /> : <Login />
    )
}
