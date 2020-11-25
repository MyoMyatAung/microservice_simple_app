import React, { useEffect, useState } from 'react';

export default ({ postId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4001/api/v1/${postId}/comments`)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log(response);
                setComments(response.comment || []);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const renderComments = comments.map((comment) => {
        return <li key={comment.id}>
            {comment.content}
        </li>
    })

    return(
        <div>
            <ul>
                {renderComments}
            </ul>
        </div>
    );
}