import React from "react";
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 footer-background">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>TransceDENTAL</h5>
                        <p>Vaša stomatološka ordinacija s 40 godina iskustva.</p>
                        <p><strong>Adresa:</strong> Ulica imena 123, 10000 Zagreb</p>
                        <p><strong>Telefon:</strong> +385 1 1234 567</p>
                        <p><strong>Email:</strong> info@transcedental.hr</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Korisni linkovi</h5>
                        <ul className="list-unstyled">
                            <li><a href="/about">O nama</a></li>
                            <li><a href="/services">Usluge</a></li>
                            <li><a href="/contact">Kontakt</a></li>
                            <li><a href="/faq">Često postavljana pitanja</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Radno vrijeme</h5>
                        <p>Pon - Pet: 08:00 - 20:00</p>
                        <p>Subota: 09:00 - 14:00</p>
                        <p>Nedjelja: Zatvoreno</p>
                        <h5>Pratite nas</h5>
                        <div>
                            <a href="#" className="text-dark mr-2"><i className="fab fa-facebook fa-lg"></i></a>
                            <a href="#" className="text-dark mr-2"><i className="fab fa-twitter fa-lg"></i></a>
                            <a href="#" className="text-dark mr-2"><i className="fab fa-instagram fa-lg"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12 text-center">
                        <p>&copy; 2023 TransceDENTAL. Sva prava pridržana.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
