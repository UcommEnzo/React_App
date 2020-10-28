import React from 'react';
import c from './Post.module.css';

function Post(props) {
    return <div className={c.item}>
        <img src='https://i.ibb.co/612Pbtz/image.png'/>
        { props.message }
        <div>
            <span>like</span> {props.likesCount}
        </div>
    </div>
}

export default Post;