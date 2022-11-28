import { Outlet } from "react-router-dom";
import Login from "../pages/login";
import axiosService from "../services/axiosService";

export default function ProtectedRoutes() {
    console.log(axiosService.Auth.isAuth())
    return (
        axiosService.Auth.isAuth() ? <Outlet /> : <Login />
    )
}
