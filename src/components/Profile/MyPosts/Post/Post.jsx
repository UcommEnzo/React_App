import React from 'react';
import c from './Post.module.css';

function Post() {
    return <div className={c.item}>
        <img src='https://masterdent23.ru/wp-content/uploads/2017/10/noavatar.png'/>
        post 1
        <div>
            <span>like</span>
        </div>
    </div>
}

export default Post;