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
                    <a className="navbar-brand" href="#">TransceDENTAL <img src="./img/logo.png" alt="Logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Nas i Vas tim zubara</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Povijest ustanove</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Usluge
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Ortodoncija</a></li>
                                    <li><a className="dropdown-item" href="#">Konzervativna stomatologija</a></li>
                                    <li><a className="dropdown-item" href="#">Progresivna stomatologija</a></li>
                                    <li><a className="dropdown-item" href="#">Dijagnostika</a></li>
                                    <li><a className="dropdown-item" href="#">Prognostika</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Ostale medicinske usluge</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Placanje</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Bitno! - za placanje</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Registracija</a>
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
