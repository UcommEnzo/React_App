import * as axios from "axios";

const instance = axios.create ({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "f0cd479f-de27-4286-ae65-b636eca7675c"}
})

export const getUsers = (currentPage = 1, pageSize = 5) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
};
export const followUser = (id, unfollow) => {
    return instance.delete(`follow/${id}`)
        .then(response => {
            if (response.data.resultCode === 0) {
                unfollow(id)
            }
        })
};
export const unfollowUser = (id, follow) => {
    return instance.post(`follow/${id}`)
        .then(response => {
            if (response.data.resultCode === 0) {
                follow(id)
            }
        })
};
export const getProfileUser = (userId, setUserProfile) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        .then(response => {
            setUserProfile(response.data)
        });
}
