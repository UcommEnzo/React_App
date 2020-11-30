import React from "react";
import c from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageFrom";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogsItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Messages message={m.message} key={m.id}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.message)
    }

    if (!props.isAuth) return <Redirect to="/Login"/>

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={c.message}>
                <div>{messagesElements}</div>
                <div>
                    <AddMessageForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;