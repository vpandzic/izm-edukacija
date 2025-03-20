import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about-container">
            <section id="about">
                <div className="container">
                    <h1>O našem timu</h1>
                    <p>Upoznajte vrhunski tim stomatologa koji se brine o vašem osmijehu.</p>

                    <div className="row">
                        <div className="col-md-4 team-member">
                            <img src="img/doktor1.jpeg" alt="Dr. Marko Petrović" />
                            <h3>Dr. Marko Petrović</h3>
                            <p>Specijalist protetike s 20 godina iskustva. Stručnjak za estetsku stomatologiju.</p>
                        </div>
                        <div className="col-md-4 team-member">
                            <img src="img/doktor2.jpeg" alt="Dr. Ana Kovačević" />
                            <h3>Dr. Ana Kovačević</h3>
                            <p>Specijalist oralne kirurgije, poznata po bezbolnim zahvatima i vrhunskom radu.</p>
                        </div>
                        <div className="col-md-4 team-member">
                            <img src="img/doktor3.jpeg" alt="Dr. Ivan Jurić" />
                            <h3>Dr. Ivan Jurić</h3>
                            <p>Ekspert za ortodonciju, koji vraća osmijehe pacijentima svih uzrasta.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
