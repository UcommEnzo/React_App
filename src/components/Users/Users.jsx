import React from "react";
import c from './Users.module.css';
import * as axios from "axios";
import userPhoto from '../../assets/images/noavatar.png'

const Users = (props) => {

    /*[
        {id: 1, followed: true, fullName: 'Aleksey', status: "Hi it's my first status", location: {country: 'Russia', city: 'Cheboksary'}, photoUrl: 'https://i.ibb.co/sv6Gsq8/1.png'},
        {id: 2, followed: true, fullName: 'Petr', status: "Hi it's my first status", location: {country: 'Russia', city: 'Moscow'}, photoUrl: 'https://i.ibb.co/Jd8jnh1/2.png'},
        {id: 3, followed: false, fullName: 'Sasha', status: "Hi it's my first status", location: {country: 'Russia', city: 'Kazan'}, photoUrl: 'https://i.ibb.co/FVmqGCt/3.png'},
        {id: 4, followed: false, fullName: 'Roman', status: "Hi it's my first status", location: {country: 'Russia', city: 'Vladimir'}, photoUrl: 'https://i.ibb.co/jVzWjLv/5.png'}
    ]*/

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items);
            });
    }

    return <div className={c.user}>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div><img src={u.photos.small != null ? u.photos.small : userPhoto}/></div>
                    <div>
                        {u.followed
                            ?<button onClick={()=>{props.unfollow(u.id)}}>Follow</button>
                            :<button onClick={()=>{props.follow(u.id)}}>Unfollow</button> }
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