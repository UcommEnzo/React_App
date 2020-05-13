import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return <div  className={c.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Send</button>
            </div>
        </div>
        <div className={c.posts}>
            <Post message='Hi, how are you?' likesCount='12'/>
            <Post message='Hi, im fine, thank you.' likesCount='15'/>
        </div>
    </div>
}

export default MyPosts;