import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import './Header.css';

const Header = () => {
    const [username, setUsername] = useState(null);
    const [services, setServices] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const REACT_APP_URL = process.env.REACT_APP_URL;

    useEffect(() => {
        const user = localStorage.getItem('username');
        if (user) setUsername(user);

        // Service Category posts fetch
        fetch(REACT_APP_URL + 'wp-json/wp/v2/posts?categories=232')
            .then(response => response.json())
            .then(data => setServices(data))
            .catch(error => console.error('Error fetching services:', error));
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        window.location.reload();
    };

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
                                <Link className="nav-link" to="/about">Nas i Vas tim zubara</Link>
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
                                    {services.slice().reverse().map(service => (
                                        <li key={service.id}>
                                            <Link className="dropdown-item" to={`/services/${service.id}`}>
                                                {service.title.rendered}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/payment">Placanje</Link>
                            </li>
                        </ul>
                        {username ? (
                            <button onClick={logout} className="btn">Dobrodosao {username} !</button>
                        ) : (
                            <Link className="nav-link" to="/login">Prijava</Link>
                        )}
                        <form className="d-flex" role="search" action="https://www.google.com/search" method="GET">
                            <input className="form-control me-2" type="search" name="q" placeholder="Unesite trazeni pojam"
                                aria-label="Search" required />
                            <input type="hidden" name="q" value="site:vpandzic.frontend.internetskimarketing.eu" />
                            <button className="btn btn-outline-success" type="submit">Pretrazi</button>
                        </form>
                    </div>
                </div>
            </nav>

            {location.pathname === "/" && (
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
            )}
        </div>
    );
};

export default Header;
