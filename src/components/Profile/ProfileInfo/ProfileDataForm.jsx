import React from 'react';
import c from "../../Common/FormsControls/FormsControls.module.css"
import {Input} from "../../Common/FormsControls/FormsControls";
import {Field, reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        {error && <div className={c.formSummaryError}> {error}</div>}
        <div><b>Имя: </b>
            <Field name={"fullName"} component={Input} placeholder={"Имя"}/>
        </div>
        <div><b>Обо мне: </b>
            <Field name={"aboutMe"} component={Input} placeholder={"Обо мне"}/>
        </div>
        <div><b>Поиск работы: </b>
            <Field name={"lookingForAJob"} component={Input} type={"checkbox"}/>
        </div>
        <div><b>Подробнее:</b>
            <Field name={"lookingForAJobDescription"} component={Input} placeholder={"О поиске работы"}/>
        </div>
        <div>
            <b>Контакты: </b> {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={c.contacts}>
                <b>{key}: <Field name={"contacts." + key} component={Input} placeholder={key}/></b>
            </div>
        })}
        </div>
        {<div>
            <button>save</button>
        </div>}
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;