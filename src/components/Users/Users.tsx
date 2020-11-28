import React from "react";
import Pagination from "../Common/Pagination/Pagination";
import User from "./User";
import {UsersType} from "../../types/types";

type PropsType = {
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    onPageChanged: (pageNumber: number) => void;
    users: Array<UsersType>
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

let Users: React.FC<PropsType> = ({pageSize, totalUsersCount, users,
                                      currentPage, onPageChanged, ...props}) => {

    return <div>

        <Pagination totalUsersCount={totalUsersCount} pageSize={pageSize}
                    currentPage={currentPage} onPageChanged={onPageChanged}/>
        <div>
            {users.map(u => <User key={u.id} unfollow={props.unfollow}
                                        follow={props.follow} user={u}
                                        followingInProgress={props.followingInProgress}/>)
            }
        </div>
    </div>
}

export default Users;