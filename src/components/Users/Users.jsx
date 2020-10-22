import React from "react";
import c from './Users.module.css';
import userPhoto from '../../assets/images/noavatar.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    let now = props.currentPage

    return <div className={c.user}>
        <div>
            {pages.map(p => {
                if ((p < now + 3 && p > now - 3) ||
                    p === 1 || p === pages.length)
                    return <button className={props.currentPage === p && c.selectedPage}
                                   onClick={(event) => {
                                       props.onPostChanged(p);
                                   }}>{p}</button>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                         <NavLink to={'/profile/' + u.id}>
                             <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                         </NavLink>
                    </div>

                <div>
                    {u.followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {
                                withCredentials: true,
                                headers: {"API-KEY": "f0cd479f-de27-4286-ae65-b636eca7675c"}
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                });

                        }}>Follow</button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {"API-KEY": "f0cd479f-de27-4286-ae65-b636eca7675c"}
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                });
                        }}>Unfollow</button>}
                </div>
            </span>
                <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
            </span>
                <span>
            <div>{'u.location.country'}</div>
            <div>{'u.location.city'}</div>
            </span>
            </div>)
        }
    </div>
}

export default Users;