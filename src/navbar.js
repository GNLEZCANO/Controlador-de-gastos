import React from "react";

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <h1 className="mx-4 mt-1 navbar-brand navbar-dark bg-primary text-xl-start" href="/#">AHORRAR</h1>

                <div className="collapse navbar-collapse position-absolute top-0 end-0 mt-2 mx-3" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link navbar-dark bg-primary" href="/#">Balance</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link navbar-dark bg-primary" href="/#">Categorias</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link navbar-dark bg-primary" href="/#">Reporte</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;