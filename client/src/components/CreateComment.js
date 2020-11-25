import React, { useState } from 'react';

export default ({ postId }) => {

    const [content, setContent] = useState('');

    const contentChangeHandler = (event) => {
        setContent(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        fetch(`http://localhost:4001/api/v1/${postId}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content })
        })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
            setContent('');
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div className='form-group'>
                    <input onChange={contentChangeHandler} className='form-control' placeholder='Enter text' value={content} />
                </div>
                <button className="btn btn-primary">Add</button>
            </form>
        </div>
    );
}