import React from "react";
import c from './Users.module.css';
import userPhoto from '../../assets/images/noavatar.png'

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
                    <div><img src={u.photos.small != null ? u.photos.small : userPhoto}/></div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
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