import React from 'react';
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return <div>
        <div>
            <img src='https://i.ibb.co/DtP795s/Ge-Fv-Qk-Bb-SLa-Mdp-KXF1-Zv-bigstock-Aerial-View-Of-Blue-Lakes-And-227291596.jpg'/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>
}

export default Profile;