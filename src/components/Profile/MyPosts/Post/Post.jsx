import React from 'react';
import c from './Post.module.css';
import userPhoto from '../../../../assets/images/noavatar.png'

function Post(props) {
    return <div className={c.item}>
        <img src={userPhoto}/>
        { props.message }
        <div>
            <span>like</span> {props.likesCount}
        </div>
    </div>
}

export default Post;