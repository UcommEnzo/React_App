import React, {useState} from 'react';
import c from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "./../../../assets/images/noAvatarProfile.png"
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile)
        return <Preloader/>

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }

    return <div>
        <div className={c.profileBlock}>
            <img className={c.Block1} src={profile.photos.large || userPhoto}/>
            {isOwner && <div className={c.BlockUpload}><input type={"file"} onChange={onMainPhotoSelected}/></div>}
            {editMode
                ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                : <ProfileData profile={profile} isOwner={isOwner}
                               goToEditMode={() => {
                                   setEditMode(true)
                               }}/>}
            <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
        </div>
    </div>
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
        <div><b>Имя: </b>{profile.fullName}</div>
        <div className={c.Block2}><b>Обо мне: </b>{profile.aboutMe ||
        <span className={c.grayText}>нет информации</span>}</div>
        <div className={c.Block4}><b>Поиск работы: </b>{profile.lookingForAJob ? "да" : "нет"}</div>
        {profile.lookingForAJob &&
        <div className={c.Block5}><b>Подробнее: </b>{profile.lookingForAJobDescription ||
        <span className={c.grayText}>нет информации</span>}</div>
        }
        <div><b>Контакты: </b> {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}</div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={c.contacts}><b>{contactTitle}: </b>{contactValue}</div>
}

export default ProfileInfo;