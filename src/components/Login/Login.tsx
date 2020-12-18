import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
//import c from "./../Common/FormsControls/FormsControls.module.css"
import c from "./../../components/Login/Login.module.css"
import {AppStateType} from "../../redux/redux-store";

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaUrl}) => {
    return <form onSubmit={handleSubmit}>
        {error && <div className={c.formSummaryError}> {error}</div>}
        <div className={c.formGroup}>
            <label className={c.formLabel}>Email</label>
            <Field name={"email"} component={Input} validate={required} className={c.formInput}/>

        </div>
        <div className={c.formGroup}>
            <label className={c.formLabel}>Password</label>
            <Field name={"password"} component={Input} type={"password"}
                   validate={required} className={c.formInput}/>
        </div>
        <div className={c.checkRemember}>
                <Field name={"rememberMe"} component={Input} type={"checkbox"} id={"rememberMe"}  className={c.remember}/>
            <label className={c.label}>remember me</label>
        </div>
        {captchaUrl && <img src={captchaUrl} />}
        {captchaUrl && <Field name={"captcha"} validate={required} component={Input}/>}
        <div>
            <button className={c.formButton}>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)

type MapStatePropsType = {
    captchaUrl: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type LoginFormValuesType = {
    captcha: string
    rememberMe: boolean
    password: string
    email: string
}

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div className={c.body}>
        <div className={c.form}>
            <h1 className={c.formTitle}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    </div>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login)