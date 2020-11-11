import React from "react";
import Pagination from "../Common/Pagination/Pagination";
import User from "./User";

let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}) => {

    return <div>

        <Pagination totalUsersCount={totalUsersCount} pageSize={pageSize}
                    currentPage={currentPage} onPageChanged={onPageChanged}/>
        <div>
            {props.users.map(u => <User key={u.id} unfollow={props.unfollow}
                                        follow={props.follow} user={u}
                                        followingInProgress={props.followingInProgress}/>)
            }
        </div>
    </div>
}

export default Users;