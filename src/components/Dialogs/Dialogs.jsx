import React from "react";
import c from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";

function Dialogs(props) {
    return <div className={c.dialogs}>
        <div className={c.dialogsItem}>
            <DialogsItem name="Aleksey" id="1"/>
            <DialogsItem name="Petr" id="2"/>
            <DialogsItem name="Alexander" id="3"/>
            <DialogsItem name="Svetlana" id="4"/>
            <DialogsItem name="Roman" id="5"/>
        </div>
        <div className={c.message}>
            <Messages message="Hi"/>
            <Messages message="How are you ?"/>
            <Messages message="What are you doing here?"/>
        </div>
    </div>
}

export default Dialogs;