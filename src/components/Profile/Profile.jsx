import React from 'react';
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export let posts =  [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Hi, im fine, thank you.', likesCount: 15}
    ]

export function Profile() {
    return <div>
        <ProfileInfo/>
        <MyPosts/>
    </div>
}

export default Profile;