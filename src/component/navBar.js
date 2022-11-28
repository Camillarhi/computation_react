import React from 'react';
import { Link } from 'react-router-dom';
import axiosService from '../services/axiosService';
import Authorize from '../utils/authorize';

export default function NavBar() {
    const openNav = () => {
        var navCollapse = document.querySelector("#navbarToggler");
        if (
            navCollapse.classList.contains("show")
        ) {
            navCollapse.classList.remove("show");
        } else {
            navCollapse.classList.add("show");
        };
    };

    const logout = () => {
        axiosService.Auth.logout()
    }

    return (
        <>
            {/* start nav */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/home">Home</Link>
                    <button className="navbar-toggler" type="button" onClick={() => openNav()}>
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Authorize
                                authorize={
                                    <>
                                        <li className="nav-item">
                                            <Link to='/history' className="nav-link active fw-bolder mx-2" aria-current="page" >History</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/' onClick={() => logout()} className="nav-link active fw-bolder mx-2 text-danger" aria-current="page" >Logout</Link>
                                        </li>
                                    </>}
                                notAuthorized={
                                    <>
                                        <li className="nav-item">
                                            <Link to='/register' className="nav-link active fw-bolder mx-2" aria-current="page" >Register</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/' className="nav-link active fw-bolder mx-2" aria-current="page" >Login</Link>
                                        </li>
                                    </>
                                }
                            />
                        </ul>
                    </div>
                </div>
            </nav>
            {/* end nav */}


        </>
    )
}
