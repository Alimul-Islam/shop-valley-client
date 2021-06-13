import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand ms-3 " href="/">Shop Valley</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-3">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active me-3" aria-current="page" href="/">Order</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active me-3" aria-current="page" to="/admin">Admin</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active me-3" aria-current="page" href="/">Deals</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active me-3" aria-current="page" to="/login"><button className="btn btn-success" >Login</button></Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;