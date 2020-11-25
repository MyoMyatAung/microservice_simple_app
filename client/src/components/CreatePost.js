import React, { useState } from 'react';

export default () => {

    const [title, setTitle] = useState('');

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        fetch('http://localhost:4000/api/v1/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title })
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
            setTitle('');
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>Title</label>
                    <input value={title} onChange={titleChangeHandler} className="form-control" type='text' placeholder='Enter your title' />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}