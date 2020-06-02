import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts(props) {
    let postsElements = props.state.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    function addPost() {
        let text = newPostElement.current.value;
        alert(text);
    }

    return <div className={c.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Send</button>
            </div>
        </div>
        <div className={c.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;