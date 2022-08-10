import React from "react";
import s from "./NameOfUsers.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";


const NameOfUsers = (props) => {
    const dialogsElements = props.dialogs.map(
        dialog =>
            <DialogsItem id={dialog.id} name={dialog.name}/>);

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