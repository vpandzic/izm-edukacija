import React, { useEffect, useState } from "react";
import Img from "../../utility/Img"

const History = () => {

    const [history, setHistory] = useState(null);
    const REACT_APP_URL = process.env.REACT_APP_URL;

    useEffect(() => {
        fetch(REACT_APP_URL + 'wp-json/wp/v2/posts/294522')
            .then(response => response.json())
            .then(data => setHistory(data))
    }, [REACT_APP_URL]);
    console.log(history)
    if (!history) {
        return <p>Loading...</p>
    }

    return (
        <div className="about-container">
            <section id="about">
                <div className="container">

                    <div className="row">
                        <div className="col-md-12">
                            <h1 dangerouslySetInnerHTML={{ __html: history?.title?.rendered }} />
                        </div>
                        <div className="col-md-12">
                            <Img id={history?.featured_media} size="medium" />
                        </div>
                        <div className="col-md-12">
                            <p dangerouslySetInnerHTML={{ __html: history?.content?.rendered }} />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default History;
