import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Header.css';

const Header = () => {

    const [username, setUsername] = useState(null);
    useEffect(() => {
        const user = localStorage.getItem('username');
        if (user) setUsername(user);
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        window.location.reload();
      }

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                <Link className="navbar-brand" to="/">
                        TransceDENTAL <img src="./img/logo.png" alt="Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <Link className="nav-link active" to="/about">Nas i Vas tim zubara</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/history">Povijest ustanove</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Usluge
                                </a>
                                <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/services/ortodoncija">Ortodoncija</Link></li>
                                    <li><Link className="dropdown-item" to="/services/konzervativna">Konzervativna stomatologija</Link></li>
                                    <li><Link className="dropdown-item" to="/services/progresivna">Progresivna stomatologija</Link></li>
                                    <li><Link className="dropdown-item" to="/services/dijagnostika">Dijagnostika</Link></li>
                                    <li><Link className="dropdown-item" to="/services/prognostika">Prognostika</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/services/ostale">Ostale medicinske usluge</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/payment">Placanje</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/important-payment">Bitno! - za placanje</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Registracija</Link>
                            </li>
                        </ul>
                        {username ? (<button onClick={logout} className="btn">Welcome {username}</button>) : (<Link to="/login">Prijava</Link>)}
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Unesite trazeni pojam"
                                aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Pretrazi</button>
                        </form>
                    </div>
                </div>
            </nav>

            {/* Header Section */}
            <header>
                <div className="container">
                    <img src="img/header.jpeg" alt="Header Image" />
                    <h1>Specijalna ordinacija TransceDENTAL</h1>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>
                                <img src="img/logo.png" style={{ height: "24px", width: "24px" }} alt="Logo" /> 40 godina uz vas <img
                                    src="img/logo.png" style={{ height: "24px", width: "24px" }} alt="Logo" />
                            </p>
                            <hr />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
