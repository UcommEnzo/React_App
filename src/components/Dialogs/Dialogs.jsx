import React from "react";
import c from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

function Dialogs (props) {
    return <div className={c.dialogs}>
        <div className={c.dialogsItem}>
            <div className={c.item + ' ' + c.active}>
                <NavLink to='/dialogs/1' activeClassName={c.active}>Aleksey</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/dialogs/2' activeClassName={c.active}>Petr</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/dialogs/3' activeClassName={c.active}>Roman</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/dialogs/4' activeClassName={c.active}>Sveta</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/dialogs/5' activeClassName={c.active}>Inna</NavLink>
            </div>
        </div>
        <div className={c.message}>
            <div className="message">Hi</div>
            <div className="message">Hello</div>
            <div className="message">Yo-Yo</div>
        </div>
    </div>
}

export default Dialogs;