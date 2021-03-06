import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo isOwner={props.isOwner} profile={props.profile} savePhoto={props.savePhoto}
                         status={props.status} updateUserStatus={props.updateUserStatus}
                         saveProfile={props.saveProfile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;