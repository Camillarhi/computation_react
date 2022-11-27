import React from 'react';

export default function NavBar() {
    const openNav = () => {
        var navCollapse = document.querySelector("#navbarToggler");
        if (
            navCollapse.classList.contains("show")
        ) {
            navCollapse.classList.remove("show");
        } else {
            navCollapse.classList.add("show");
        }
    };

    return (
        <>
            {/* start nav */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" onClick={() => openNav()}>
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a href='/' className="nav-link active fw-bolder mx-2" aria-current="page" >History</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* end nav */}


        </>
    )
}
