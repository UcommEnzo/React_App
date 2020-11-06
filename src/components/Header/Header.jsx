import React from 'react';
import c from './Header.module.css';
import {NavLink} from "react-router-dom";

let Header = (props) => {

    return <header className={c.header}>
        <img src='https://pngimg.com/uploads/donut/donut_PNG98.png'/>
        <div className={c.loginBlock}>
            {props.isAuth
                ? <div>{props.login} <button onClick={props.logout}>Logout</button></div>
                : <NavLink to={'/Login'}>Login</NavLink>}
        </div>
    </header>
}
export default Header;