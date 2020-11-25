import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import CreateComment from './CreateComment';

export default () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/api/v1/posts')
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const renderPost = posts.map(post => {
        return <div className="card col-md-3 col-6 mx-1" key={post.id}>
            <div className='card-body'>
                <h4>{ post.title }</h4>
                <CommentList postId={post.id}/>
                <CreateComment postId={post.id}/>
            </div>
        </div>
    });

    return (
        <div className='row'>
            {renderPost}
        </div>
    );
}