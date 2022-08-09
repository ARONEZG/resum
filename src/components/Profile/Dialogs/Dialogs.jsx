import React from "react";
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const dialogsElements = props.dialogs.map(
        dialog =>
            <DialogsItem id={dialog.id} name={dialog.name}/>);

    const messagesElements = props.messages.map(
        dialog =>
            <Message id={dialog.id} message={dialog.messages}/>);

    return <div className={s.main}>
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
        </div>
        <div className={s.messages}>
            <div className={s.dialog + ' ' + s.active}>
                {messagesElements}
            </div>
        </div>

    </div>;
}


export default Dialogs;