import React from 'react';
import c from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import needJob from "../../../assets/images/needjob.png"
import dontNeedJob from "../../../assets/images/dontneedjob.png"
import ProfileStatus from "./ProfileStatus";
import userPhoto from "./../../../assets/images/noAvatarProfile.png"

const ProfileInfo = ({profile, status, updateUserStatus}) => {
    if (!profile)
        return <Preloader/>

    return <div>
        <div>
            <img
                src='https://i.ibb.co/DtP795s/Ge-Fv-Qk-Bb-SLa-Mdp-KXF1-Zv-bigstock-Aerial-View-Of-Blue-Lakes-And-227291596.jpg'/>
        </div>
        <div className={c.profileBlock}>
            <img className={c.Block1} src={profile.photos.large ? profile.photos.large : userPhoto} />
            <div className={c.Block2}>Обо мне: {profile.aboutMe || <span className={c.grayText}>нет информации</span>}</div>
            <div className={c.Block3}>Контакты: {profile.contacts.vk || <span className={c.grayText}>нет информации</span>}</div>
            <div><p>Поиск работы:
            <img className={c.Block4} src={profile.lookingForAJob ? needJob : dontNeedJob}/></p>
            Подробнее: {profile.lookingForAJobDescription || <span className={c.grayText}>нет информации</span>}
            </div>
        </div>
        <div>
            <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
        </div>
    </div>
}

export default ProfileInfo;