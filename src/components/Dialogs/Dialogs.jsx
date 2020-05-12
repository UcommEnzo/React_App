import React from "react";
import c from './Dialogs.module.css';

function Dialogs () {
    return <div className={c.dialogs}>
        <div className={c.dialogsItem}>
            <div className={c.item + ' ' + c.active}>
                Aleksey
            </div>
            <div className={c.item}>
                Petr
            </div>
            <div className={c.item}>
                Roman
            </div>
            <div className={c.item}>
                Sveta
            </div>
            <div className={c.item}>
                Inna
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