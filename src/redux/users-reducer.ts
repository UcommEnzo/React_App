import {userAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";
import {UsersType} from "../types/types";
import {Dispatch} from "redux";
import {AppStateType} from "./redux-store";
import {ThunkAction} from "redux-thunk";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const SET_TOGGLE_IS_FETCHING = 'users/SET_TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 5,
    currentPage: 1,
    totalUsersCount: 20,
    isFetching: true,
    followingInProgress: [] as Array<number> //array of users id
}

export type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.usersCount}
        }
        case SET_TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

type ActionsTypes = FollowSuccessType | UnfollowSuccessType | SetUsersType |
    SetCurrentPageType | SetTotalUsersType | SetToggleIsFetchingType | ToggleFollowingProgressType

type FollowSuccessType = { type: typeof FOLLOW, userId: number }
export const followSuccess = (userId: number): FollowSuccessType => ({type: FOLLOW, userId})
type UnfollowSuccessType = { type: typeof UNFOLLOW, userId: number }
export const unfollowSuccess = (userId: number): UnfollowSuccessType => ({type: UNFOLLOW, userId})
type SetUsersType = { type: typeof SET_USERS, users: Array<UsersType> }
export const setUsers = (users: Array<UsersType>): SetUsersType => ({type: SET_USERS, users})
type SetCurrentPageType = { type: typeof SET_CURRENT_PAGE, currentPage: number }
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage})
type SetTotalUsersType = { type: typeof SET_TOTAL_USERS_COUNT, usersCount: number }
export const setTotalUsersCount = (usersCount: number): SetTotalUsersType => ({type: SET_TOTAL_USERS_COUNT, usersCount})
type SetToggleIsFetchingType = { type: typeof SET_TOGGLE_IS_FETCHING, isFetching: boolean }
export const setToggleIsFetching = (isFetching: boolean): SetToggleIsFetchingType => ({
    type: SET_TOGGLE_IS_FETCHING,
    isFetching
})
type ToggleFollowingProgressType = { type: typeof TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: boolean, userId: number }
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

type DispatchType = Dispatch<ActionsTypes>
type GetStateType = () => AppStateType
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> // Альтернативный вариант

export const requestUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(setToggleIsFetching(true));
        const data = await userAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(setCurrentPage(currentPage));
        dispatch(setToggleIsFetching(false));
    }
}

const followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any,
                                  actionCreator: (userId: number) => FollowSuccessType | UnfollowSuccessType) => {
    dispatch(toggleFollowingProgress(true, userId));
    const response = await apiMethod(userId)
    if (response.data.resultCode == 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, userAPI.followUser, followSuccess)
    }
}

export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, userAPI.unfollowUser, unfollowSuccess)
    }
}

export default usersReducer;