import React from 'react';
import c from './Post.module.css';

function Post(props) {
    return <div className={c.item}>
        <img src='https://masterdent23.ru/wp-content/uploads/2017/10/noavatar.png'/>
        { props.message }
        <div>
            <span>like</span> {props.likesCount}
        </div>
    </div>
}

export default Post;