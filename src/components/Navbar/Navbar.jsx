import React from 'react';
import c from './Navbar.module.css';
import {NavLink} from "react-router-dom";

function Navbar() {
    return <nav className={c.nav}>
        <div className={c.item}>
            <NavLink to="/Profile" activeClassName={c.activeLink}>Profile</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to="/Dialogs" activeClassName={c.activeLink}>Messages</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to="/News" activeClassName={c.activeLink}>News</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to="/Music" activeClassName={c.activeLink}>Music</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to="/Settings" activeClassName={c.activeLink}>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;