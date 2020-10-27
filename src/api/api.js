import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "f0cd479f-de27-4286-ae65-b636eca7675c"}
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    followUser(id) {
        return instance.post(`follow/${id}`)
    },

    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
    },

    getProfileUser(userId, setUserProfile) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                setUserProfile(response.data)
            });
    }
}