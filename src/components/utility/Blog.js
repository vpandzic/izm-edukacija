import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Img from "./Img";
import PostDate from "../metadata/PostDate/PostDate";
import PostAuthor from "../metadata/PostAuthor/PostAuthor";

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const REACT_APP_URL = process.env.REACT_APP_URL;

    useEffect(() => {
        fetch(REACT_APP_URL + 'wp-json/wp/v2/posts?categories=234')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setPosts(data))
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                setError(error.message);
            });
    }, [REACT_APP_URL]);

    if (error) {
        return <p>Error loading posts: {error}</p>;
    }

    if (!posts.length) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container blog">
            <h1>Blog</h1>
            {Array.isArray(posts) && posts.map(post => (
                <div className="row mb-5" key={post.id}>
                    <div className="col-md-5">
                        <Img id={post.featured_media} size="medium" />
                    </div>
                    <div className="col-md-6 offset-md-1">
                        <Link to={'/blog/' + post.slug}>
                            <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        </Link>
                        <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                        <PostDate postdate={post.date} />
                        <PostAuthor postauthorid={post.author} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Blog;
