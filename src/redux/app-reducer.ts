import {getAuthUserData} from "./auth-reducer";

const INITIALIZED = 'app/INITIALIZED';

export type initialStateType = {
    initialized: boolean
}

let initialState: initialStateType = {
    initialized: false
};

const appReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case INITIALIZED:
            return {...state, initialized: true}
        default:
            return state;
    }
}

type initializedSuccessType = {type: typeof INITIALIZED}
export const initializedSuccess = (): initializedSuccessType => ({type: INITIALIZED})
export const initializedApp = () => (dispatch: any) => {
    const promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initializedSuccess())
    })
};

export default appReducer;