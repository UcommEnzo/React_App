import React from 'react';
import c from "../../Common/FormsControls/FormsControls.module.css"
import {Input} from "../../Common/FormsControls/FormsControls";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../../types/types";

type ProfileDataPropsType = {
    profile: ProfileType
}
//InjectedFormProps<ProfileDataPropsType> & ProfileDataPropsType
const ProfileDataForm: React.FC<any> = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit} className={c.profileBlock}>
        {error && <div className={c.formSummaryError}> {error}</div>}
        <div className={c.Block1}><b>Имя: </b>
            <Field name={"fullName"} component={Input} placeholder={"Имя"}/>
        </div>
        <div className={c.Block2}><b>Обо мне: </b>
            <Field name={"aboutMe"} component={Input} placeholder={"Обо мне"}/>
        </div>
        <div className={c.Block4}><b>Поиск работы: </b>
            <Field name={"lookingForAJob"} component={Input} type={"checkbox"}/>
        </div>
        <div className={c.Block5}><b>Подробнее:</b>
            <Field name={"lookingForAJobDescription"} component={Input} placeholder={"О поиске работы"}/>
        </div>
        {/*<div>
            <b>Контакты: </b> {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={c.contacts}>
                <b>{key}: <Field name={"contacts." + key} component={Input} placeholder={key}/></b>
            </div>
        })}
        </div>*/}
        {<div className={c.editButton}>
            <button>save</button>
        </div>}
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;