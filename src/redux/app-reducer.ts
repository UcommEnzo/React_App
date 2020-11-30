import {getAuthUserData} from "./auth-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "./redux-store";
import {ThunkAction} from "redux-thunk";

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

type ActionsTypes = initializedSuccessType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> // Альтернативный вариант


type initializedSuccessType = {type: typeof INITIALIZED}
export const initializedSuccess = (): initializedSuccessType => ({type: INITIALIZED})
export const initializedApp = () => (dispatch: any) => {
    const promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initializedSuccess())
    })
};

export default appReducer;