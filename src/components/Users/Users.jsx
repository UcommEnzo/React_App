import React from "react";
import c from './Users.module.css';
import * as axios from "axios";
import userPhoto from '../../assets/images/noavatar.png'

class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users',{
            withCredentials: true,
            headers: {
                'API-KEY': 'f0cd479f-de27-4286-ae65-b636eca7675c'
            }
        }).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return <div className={c.user}>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div><img src={u.photos.small != null ? u.photos.small : userPhoto}/></div>
                    <div>
                        {u.followed
                            ?<button onClick={()=>{this.props.unfollow(u.id)}}>Follow</button>
                            :<button onClick={()=>{this.props.follow(u.id)}}>Unfollow</button> }
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

}

export default Users;