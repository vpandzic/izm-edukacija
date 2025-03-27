import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import "./Services.css";
import Img from "../../utility/Img"

const Services = () => {

    const [service, setService] = useState(null);
    const { id } = useParams();
    const [error, setError] = useState(null);
    const REACT_APP_URL = process.env.REACT_APP_URL;


    useEffect(() => {
        fetch(REACT_APP_URL + 'wp-json/wp/v2/posts/' + id)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setService(data))
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                setError(error.message);
            });
    }, [REACT_APP_URL, id]);

    if (error) {
        return <p>Error loading posts: {error}</p>;
    }

    return (
        <div className="about-container">
            <section id="about">
                <div className="container">

                    <div className="row">
                        <div className="col-md-12">
                            <h1 dangerouslySetInnerHTML={{ __html: service?.title?.rendered }} />
                        </div>
                        <div className="col-md-12">
                            <Img id={service?.featured_media} size="medium" />
                        </div>
                        <div className="col-md-12 service-content">
                            <p dangerouslySetInnerHTML={{ __html: service?.content?.rendered }} />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
