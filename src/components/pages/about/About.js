import React, { useEffect, useState } from "react";
import "./About.css";
import Img from "../../utility/Img"

const About = () => {

    const [dentists, setDentists] = useState([]);
    const REACT_APP_URL = process.env.REACT_APP_URL;

    useEffect(() => {
        fetch(REACT_APP_URL + 'wp-json/wp/v2/posts?categories=230')
            .then(response => response.json())
            .then(data => setDentists(data))
    }, [REACT_APP_URL]);

    return (
        <div className="about-container">
            <section id="about">
                <div className="container">

                    <h1>O našem timu</h1>
                    <p>Upoznajte vrhunski tim stomatologa koji se brine o vašem osmijehu.</p>

                    <div className="row">
                        {dentists.map(dentist => (
                            <div className="col-md-4 team-member">
                                <Img id={ dentist.featured_media} size="large" />
                                
                                <h3 dangerouslySetInnerHTML={{ __html: dentist.title.rendered }} />
                                <p dangerouslySetInnerHTML={{ __html: dentist.content.rendered }}/>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
