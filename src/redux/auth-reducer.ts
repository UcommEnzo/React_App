import {authAPI, ResultCodesEnum, ResultCodesForCaptcha, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {Dispatch} from "redux";

const SET_AUTH_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
};

export type initialStateType = typeof initialState

const authReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case GET_CAPTCHA_URL_SUCCESS:
        case SET_AUTH_DATA:
            return {userId: "sd",...state, ...action.payload}
        default:
            return state;
    }
}

type ActionsTypes = getCaptchaUrlSuccessType | setAuthUserDataType
type DispatchType = Dispatch<ActionsTypes>

type setAuthUserDataPayloadType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}
type setAuthUserDataType = {
    type: typeof SET_AUTH_DATA,
    payload: setAuthUserDataPayloadType
}
type getCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl: string}} // аналог setAuthUserDataPayloadType

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataType => ({
    type: SET_AUTH_DATA, payload: {userId, email, login, isAuth}
})
export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessType => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})

export const getAuthUserData = () => async (dispatch: any) => {
    const meData = await authAPI.me()
    if (meData.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = meData.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    const data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData());
    } else {
        if (data.resultCode === ResultCodesForCaptcha.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }
        let message = data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logout = () => async (dispatch: DispatchType) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export const getCaptchaUrl = () => async (dispatch: DispatchType) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer;