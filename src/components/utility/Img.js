import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import "./BlogSingle.css"

const Img = ({ id, size }) => {
    const [img, setImg] = useState(null);

    useEffect(() => {
        if (!id) { return }
        fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/media/' + id)
            .then(response => response.json())
            .then(data => setImg(data));
    }, [ id ]);

    if (!img) {
        return <img src="https://placehold.co/600x400?text=Loading..." alt="wassup"/>;
    }

    return <img src={img.media_details.sizes[size].source_url} />
};

export default Img;