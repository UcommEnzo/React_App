import React from "react";
import c from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";

function Dialogs(props) {

    let dialogs = [
        {id: 1, name: 'Aleksey'},
        {id: 2, name: 'Petr'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Roman'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you ?'},
        {id: 3, message: 'What are you doing here?'}
    ]

    let dialogsElements = dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Messages message={m.message}/>)

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