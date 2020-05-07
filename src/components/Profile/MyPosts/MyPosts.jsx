import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Publish</button>
        </div>
        <div className={c.posts}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    </div>
}

export default MyPosts;