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
            <Post message='Hi, how are you?' likesCount='12'/>
            <Post message='Hi, im fine, thank you.' likesCount='15'/>
        </div>
    </div>
}

export default MyPosts;