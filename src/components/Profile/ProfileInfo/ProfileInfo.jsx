import React from 'react';
import c from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile)
        return <Preloader/>

    return <div>
        <div>
            <img
                src='https://i.ibb.co/DtP795s/Ge-Fv-Qk-Bb-SLa-Mdp-KXF1-Zv-bigstock-Aerial-View-Of-Blue-Lakes-And-227291596.jpg'/>
        </div>
        <div className={c.profileBlock}>
            <img className={c.Block1} src={props.profile.photos.large}/>
            <div className={c.Block2}>Обо мне: {props.profile.aboutMe}</div>
            <div className={c.Block3}>Контакты: {props.profile.contacts.vk}</div>
        </div>
    </div>
}

export default ProfileInfo;