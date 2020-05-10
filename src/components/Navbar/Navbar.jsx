import React from 'react';
import c from './Navbar.module.css';

function Navbar() {
    return <nav className={c.nav}>
        <div className={c.item}>
            <a href="/profile">Profile</a>
        </div>
        <div className={`${c.item} ${c.rare}`}>
            <a href="/dialogs">Messages</a>
        </div>
        <div className={c.item}>
            <a>News</a>
        </div>
        <div className={c.item}>
            <a>Music</a>
        </div>
        <div className={c.item}>
            <a>Settings</a>
        </div>
    </nav>


}
export default Navbar;