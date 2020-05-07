import React from 'react';
import c from './Navbar.module.css';

function Navbar() {
    return <nav className={c.nav}>
        <div>
            <a className={c.item}>Profile</a>
        </div>
        <div>
            <a className={`${c.item} ${c.rare}`}>Messages</a>
        </div>
        <div>
            <a className={c.item}>News</a>
        </div>
        <div>
            <a className={c.item}>Music</a>
        </div>
        <div>
            <a className={c.item}>Settings</a>
        </div>
    </nav>


}
export default Navbar;