import React from "react";
import c from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";

function Dialogs(props) {
    let dialogsElements = props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Messages message={m.message}/>)

    return <div className={c.dialogs}>
        <div className={c.dialogsItem}>
            {dialogsElements}
        </div>
        <div className={c.message}>
            {messagesElements}
        </div>
    </div>
}

export default Dialogs;