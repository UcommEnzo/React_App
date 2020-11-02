import React from "react";
import c from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogsItem avatar={d.url} key={d.id} name={d.name} id={d.id}/>);
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
                    <AddMessageReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"message"} component={"textarea"} placeholder={"Enter your message"}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'dialogsAddMessageForm'})(AddMessageForm)

export default Dialogs;