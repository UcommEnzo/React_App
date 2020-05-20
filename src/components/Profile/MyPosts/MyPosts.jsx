import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts(props) {
    let postsElements = props.state.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return <div className={c.postsBlock}>
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
            {postsElements}
        </div>
    </div>
}

export default MyPosts;