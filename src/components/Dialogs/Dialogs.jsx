import React from "react";
import c from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";

function Dialogs(props) {
    let dialogsElements = props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Messages message={m.message}/>)
    let avatarsElements = props.state.userAvatars.map(ava => <img className={c.qwe} src={ava.url}/>)

    return <div className={c.dialogs}>
        <div className={c.avatars}>
            {avatarsElements}
        </div>
        <div className={c.dialogsItem}>
            {dialogsElements}
        </div>
        <div className={c.message}>
            {messagesElements}
        </div>
    </div>
}

export default Dialogs;