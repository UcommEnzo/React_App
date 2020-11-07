import {userAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_TOGGLE_IS_FETCHING = 'SET_TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    currentPage: 1,
    totalUsersCount: 20,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (action.userId === u.id) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (action.userId === u.id) {
                        return {...u, followed: false}
                    }
                    return u;
                })
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
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (usersCount) => ({type: SET_TOTAL_USERS_COUNT, usersCount})
export const setToggleIsFetching = (isFetching) => ({type: SET_TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (followingInProgress, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress,
    userId
})

export const requestUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setToggleIsFetching(true));
        userAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
                dispatch(setCurrentPage(currentPage));
                dispatch(setToggleIsFetching(false));
            });
    }
}

export const follow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        userAPI.followUser(id)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(followSuccess(id));
                }
                dispatch(toggleFollowingProgress(false, id));
            });
    }
}

export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        userAPI.unfollowUser(id)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(unfollowSuccess(id));
                }
                dispatch(toggleFollowingProgress(false, id));
            });
    }
}

export default usersReducer;