import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import c from "./../Common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return <form onSubmit={handleSubmit}>
        {error && <div className={c.formSummaryError}> {error}</div>}
        <div>
            <Field name={"email"} component={Input} placeholder={"email"}
                   validate={required}/>
        </div>
        <div>
            <Field name={"password"} component={Input} placeholder={"Password"} type={"password"}
                   validate={required}/>
        </div>
        <div>
            <Field name={"rememberMe"} component={Input} type={"checkbox"}/>remember me
        </div>
        {captchaUrl && <img src={captchaUrl} />}
        {captchaUrl && <Field name={"captcha"} validate={required} component={Input}/>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login)