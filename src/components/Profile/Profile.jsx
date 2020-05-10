import React from 'react';
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return <div>
        <div>
            <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'/>
        </div>
        <div>
            ava + opisanie
        </div>
        <MyPosts/>
    </div>
}

export default Profile;