import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Img from "./Img";
import './Blog.css';
import PostDate from "../../metadata/PostDate/PostDate";
import PostAuthor from "../../metadata/PostAuthor/PostAuthor";

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/posts?author=13')
        .then(response => response.json())
        .then(data => setPosts(data))
    }, []);

    return (
        <div className="container blog">
            <h1>Blog</h1>
                {Array.isArray(posts) && posts.map(post => (
                    <div className="row mb-5">
                        <div className="col-md-5">
                            <Img id={post.featured_media} size="thumbnail" />
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
