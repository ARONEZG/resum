import React from "react";
import s from "./NameOfUsers.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";


const NameOfUsers = (props) => {
    const dialogsElements = props.messagesPage.dialogs.map(
        dialog =>
            <DialogsItem id={dialog.id} name={dialog.name} dispatch={props.dispatch}/>);

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.form}>
            <textarea/>
            <button>
                Add dialog
            </button>
        </div>
    </div>
}


export default NameOfUsers;