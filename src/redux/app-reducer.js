import {getAuthUserData} from "./auth-reducer";

const INITIALIZED = 'INITIALIZED';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED:
            return {...state, initialized: true}
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED})
export const initializedApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initializedSuccess())
    })
};

export default appReducer;