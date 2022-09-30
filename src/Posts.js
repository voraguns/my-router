import React from 'react';
import PostItem from './Post-item';

const Posts = (props) => {
    return (
        <div>
            <PostItem title="Hello World" content="This is a contentog Hello World" />
            <PostItem title="Goobye World" content="This is a speech of say goodbye." />
        </div>
    );
}

export default Posts;