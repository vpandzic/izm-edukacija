import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import Blog from "../../utility/Blog";
import "./Home.css";

const Home = () => {
    return (
        <div>
            {/* Services Section */}
            <section id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="col-md-12 mt-4 mx-2 content-box">
                                <Link to="/dijagnostika">
                                    <h2>Dijagnostika</h2>
                                </Link>
                                <img src="img/narucite-se.jpeg" alt="Dijagnostika" />
                                <span className="content-box-text">
                                    Specijalna ordinacija TransceDENTAL nudi vam širok dijapazon usluga vezanih za zube, počevši
                                    od dijagnostike kao prvog nužnog koraka do zadovoljnog osmijeha!
                                </span>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="col-md-12 mt-4 mx-2 content-box">
                                <Link to="/zahvati">
                                    <h2>Zahvati na zubima</h2>
                                </Link>
                                <img src="img/dentist-team.jpeg" alt="Zahvati na zubima" />
                                <span className="content-box-text">
                                    Obučeni smo za veliku većinu stomatoloških zahvata potrebnih za zdravi osmijeh, a odnedavno
                                    smo voljni
                                    pokušati raditi i zahvate za koje nismo nužno obučeni.
                                </span>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="col-md-12 mt-4 mx-2 content-box">
                                <Link to="/naplata">
                                    <h2>Naplata</h2>
                                </Link>
                                <img src="img/za-nove-pacijente.jpeg" alt="Naplata" />
                                <span className="content-box-text">
                                    Kao najbitniju komponentu iskrenog osmijeha, prihvaćamo sve oblike plaćanja i veoma smo
                                    ležerni oko alternativnih oblika naplate.
                                    <br /><br />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section id="intro">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="col-md-12 mt-4 mx-2 intro-box">
                                <img src="img/intro-1.jpeg" alt="Intro Image 1" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="col-md-12 mt-4 mx-2 intro-box">
                                <p>
                                    Imamo preko 40 godina iskustva u stomatologiji gdje smo, koristeći najmodernije tehnologije
                                    stomatologije, ostvarili suradnju sa preko 50 zadovoljnih klijenata, o čemu dovoljno govori
                                    ova nagrada koju smo dobili.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="col-md-12 mt-4 mx-2 intro-box">
                                <p>Pridružite se desetinama nasmijanih korisnika naših usluga!</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="col-md-12 mt-4 mx-2 intro-box">
                                <img src="img/zubi.jpeg" alt="Zubi" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr />

            {/* News Section */}
            <section id="novosti">
                <Blog />
                {/* <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="col-md-12 mt-4 mx-2 novosti-box">
                                <img src="img/zubi-rad.jpeg" alt="Novosti iz svijeta zubarstva" />
                                <p>Novosti iz svijeta zubarstva</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="col-md-12 mt-4 mx-2 novosti-box">
                                <img src="img/zubi-pokvareni.jpeg" alt="Pokvareni zubi" />
                                <p>Pokvareni zubi: Potrebno liječiti ili samo zavjera zubarskog lobija?</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="col-md-12 mt-4 mx-2 novosti-box">
                                <img src="img/zubi-macka.jpeg" alt="Veterinarska stomatologija" />
                                <p>Veliko istraživanje: primjena veterinarske stomatologije na ljudskim pacijentima</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="col-md-12 mt-4 mx-2 novosti-box">
                                <img src="img/zubi-stolica.jpeg" alt="Zubarske stolice" />
                                <p>10 zubarskih stolica zbog kojih vas konkurencija mrzi!</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>
        </div>
    );
};

export default Home;
