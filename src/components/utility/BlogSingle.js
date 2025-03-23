import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Img from "./Img";
import "./BlogSingle.css"

const BlogSingle = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/posts?slug=' + id)
            .then(response => response.json())
            .then(data => setPost(data[0]));
    }, [{ id }]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container article">
            <div className="row">
                <div className="col-md-12">
                    <Img id={post.featured_media} size="full" />
                    <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    <p dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                </div>

            </div>

        </div>
    );
};

export default BlogSingle;