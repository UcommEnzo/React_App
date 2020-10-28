import React from "react";
import c from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogsItem avatar={d.url} key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Messages message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;

    let onNewMessageChanged = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    let onSendMessageClick = () => {
        props.sendMessage();
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
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChanged}
                                   placeholder='Enter your message'>q</textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;