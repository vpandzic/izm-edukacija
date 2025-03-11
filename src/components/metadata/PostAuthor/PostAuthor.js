import React, { useEffect, useState } from "react";


const PostAuthor = ({ postauthorid }) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        if (!postauthorid) return;
        console.log('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/users/' + postauthorid)
        fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/users/' + postauthorid)
            .then(response => response.json())
            .then(data => setUser(data))
    }, [postauthorid]);
    console.log(user.name)
    if (!user) return <p>Loading...</p>;
    return (
        <p>{user.name}</p>
    );
};

export default PostAuthor;
