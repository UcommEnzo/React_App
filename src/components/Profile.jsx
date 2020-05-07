import React from 'react';
import c from './Profile.module.css';

function Profile() {
    return <div className={c.content}>
        <div>
            <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'/>
        </div>
        <div>
            ava + opisanie
        </div>
        <div>
            my posts
            <div>
                new post
            </div>
            <div>
                <div  className={c.item}>
                    post 1
                </div>
                <div className={c.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>
}

export default Profile;