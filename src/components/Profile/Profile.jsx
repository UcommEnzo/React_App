import React from 'react';
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return <div>
        <ProfileInfo/>
        <MyPosts state={props.state.posts}/>
    </div>
}

export default Profile;