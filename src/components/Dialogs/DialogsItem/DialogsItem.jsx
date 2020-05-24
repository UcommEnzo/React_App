import React from "react";
import c from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";

function DialogsItem(props) {
    return <div className={c.item + ' ' + c.active}>
        <NavLink to={'/dialogs/' + props.id} activeClassName={c.active}><img src={props.avatar}/>{props.name}</NavLink>
    </div>
}

export default DialogsItem;