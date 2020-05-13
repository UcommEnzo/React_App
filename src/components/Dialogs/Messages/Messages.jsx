import React from "react";
import c from './Messages.module.css';

function Messages(props) {
    return <div className={c.dialogs}>{props.message}</div>
}

export default Messages;