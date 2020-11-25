import React from 'react';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

export default () => {
  return(
    <div className='container'>
      <h1>My Blog</h1>
      <CreatePost/>
      <hr/>
      <h2>Posts</h2>
      <PostList/>
    </div>
  );
}
